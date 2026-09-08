/**
 * Minimal Shopify Storefront API client — no SDK, just typed fetch.
 * Configure with SHOPIFY_STORE_DOMAIN + SHOPIFY_STOREFRONT_ACCESS_TOKEN (see .env.example).
 * Until those are set, callers should fall back to the example data in lib/products.ts —
 * isShopifyConfigured() tells you which mode you're in.
 */

const API_VERSION = "2025-01";

export function isShopifyConfigured() {
  return Boolean(
    process.env.SHOPIFY_STORE_DOMAIN && process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN
  );
}

type GraphQLResponse<T> = {
  data?: T;
  errors?: { message: string }[];
};

export async function shopifyFetch<T>(
  query: string,
  variables?: Record<string, unknown>
): Promise<T> {
  const domain = process.env.SHOPIFY_STORE_DOMAIN;
  const token = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

  if (!domain || !token) {
    throw new Error(
      "Shopify is not configured — set SHOPIFY_STORE_DOMAIN and SHOPIFY_STOREFRONT_ACCESS_TOKEN in .env.local"
    );
  }

  const res = await fetch(`https://${domain}/api/${API_VERSION}/graphql.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": token,
    },
    body: JSON.stringify({ query, variables }),
    // Product data is fine cached for a minute; adjust once traffic patterns are known.
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(`Shopify Storefront API error: ${res.status} ${res.statusText}`);
  }

  const json: GraphQLResponse<T> = await res.json();

  if (json.errors?.length) {
    throw new Error(json.errors.map((e) => e.message).join("; "));
  }

  return json.data as T;
}

export type ShopifyProduct = {
  id: string;
  title: string;
  handle: string;
  priceRange: { minVariantPrice: { amount: string; currencyCode: string } };
  featuredImage: { url: string; altText: string | null } | null;
};

const PRODUCTS_QUERY = /* GraphQL */ `
  query Products($first: Int!) {
    products(first: $first) {
      nodes {
        id
        title
        handle
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        featuredImage {
          url
          altText
        }
      }
    }
  }
`;

export async function getProducts(first = 8): Promise<ShopifyProduct[]> {
  const data = await shopifyFetch<{ products: { nodes: ShopifyProduct[] } }>(
    PRODUCTS_QUERY,
    { first }
  );
  return data.products.nodes;
}
