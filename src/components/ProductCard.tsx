import type { ExampleProduct } from "@/lib/products";

/**
 * The per-garment card used on the shop grid and as the hero's product
 * callouts. Until real product photography exists, the image area is a
 * flat fabric-swatch fill — no illustrated garment, no gradient frame.
 * A drawn icon reads like a wireframe; a plain color block reads like a
 * swatch card, which is at least honest about what it is.
 */
export function ProductCard({
  product,
  size = "grid",
}: {
  product: ExampleProduct;
  size?: "grid" | "feature";
}) {
  const compact = size === "feature";

  return (
    <div className="flex flex-col bg-paper">
      <div
        className={compact ? "aspect-[3/4]" : "aspect-[3/4.3]"}
        style={{
          background: product.swatch,
          boxShadow: product.outline ? "inset 0 0 0 1px var(--newsprint-line)" : undefined,
        }}
      />
      <div className="px-3.5 pb-5.5 pt-4">
        <div className="text-[13px] font-bold leading-snug">
          {product.name.toUpperCase()}
          <br />
          BOOTCUT Nº01
        </div>
        <div className="mt-1.5 text-[10px] leading-relaxed tracking-[0.04em] text-ink-soft">
          {product.cat}
          <br />
          {product.material}
          <br />
          {product.origin}
        </div>
        <div className="mt-2.5 text-[12px] font-bold tabular-nums">{product.price}</div>
      </div>
    </div>
  );
}
