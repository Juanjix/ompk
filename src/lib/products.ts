/**
 * Example catalogue for the Bootcut Nº01 hero garment, used until a real Shopify
 * store is connected (see isShopifyConfigured() in lib/shopify.ts). These are
 * illustrative colorways/prices from the brand design pass, not live inventory —
 * swap for getProducts() once SHOPIFY_STORE_DOMAIN / SHOPIFY_STOREFRONT_ACCESS_TOKEN
 * are set.
 */
export type ExampleProduct = {
  id: string;
  name: string;
  cat: string;
  price: string;
  swatch: string;
  outline?: boolean;
  dashed?: boolean;
};

export const exampleProducts: ExampleProduct[] = [
  { id: "1", name: "Raw Indigo", cat: "CAT. Nº 001 — BOOTCUT Nº01", price: "USD 185", swatch: "#33455f" },
  { id: "2", name: "Black Sateen", cat: "CAT. Nº 002 — BOOTCUT Nº01", price: "USD 185", swatch: "#17140f" },
  { id: "3", name: "White Denim", cat: "CAT. Nº 003 — BOOTCUT Nº01", price: "USD 185", swatch: "#e8e0ce", outline: true },
  { id: "4", name: "Striped Hickory", cat: "CAT. Nº 004 — BOOTCUT Nº01", price: "USD 185", swatch: "#EFE9DA", dashed: true },
];
