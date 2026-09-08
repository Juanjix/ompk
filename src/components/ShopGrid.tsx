import { isShopifyConfigured, getProducts } from "@/lib/shopify";
import { exampleProducts } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { ShopHeading } from "@/components/ShopHeading";

export async function ShopGrid() {
  const useShopify = isShopifyConfigured();
  const shopifyProducts = useShopify ? await getProducts(8).catch(() => null) : null;

  return (
    <section id="shop" className="px-6 py-24 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1180px]">
        <ShopHeading />

        {shopifyProducts ? (
          <div className="grid grid-cols-2 gap-px bg-newsprint-line sm:grid-cols-4">
            {shopifyProducts.map((p) => (
              <div key={p.id} className="flex flex-col bg-paper">
                <div className="relative flex aspect-[3/4.3] items-end justify-center pb-3.5">
                  <span className="absolute left-3 top-3 text-[13px] font-extrabold tracking-[-0.01em]">
                    OMPK
                  </span>
                  {p.featuredImage ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={p.featuredImage.url}
                      alt={p.featuredImage.altText ?? p.title}
                      className="h-full w-full object-cover"
                    />
                  ) : null}
                </div>
                <div className="px-3.5 pb-5.5 pt-4">
                  <div className="text-[13px] font-bold">{p.title}</div>
                  <div className="mt-1 text-[12px] font-bold tabular-nums">
                    {p.priceRange.minVariantPrice.currencyCode}{" "}
                    {p.priceRange.minVariantPrice.amount}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-px bg-newsprint-line sm:grid-cols-4">
            {exampleProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}

        {!useShopify && (
          <p className="font-editorial mt-6 text-[12px] italic text-ink-soft">
            Catálogo de ejemplo — conectá SHOPIFY_STORE_DOMAIN y
            SHOPIFY_STOREFRONT_ACCESS_TOKEN en .env.local para traer productos
            reales.
          </p>
        )}
      </div>
    </section>
  );
}
