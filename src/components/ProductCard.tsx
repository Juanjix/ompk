import { TrouserIcon } from "@/components/TrouserIcon";
import type { ExampleProduct } from "@/lib/products";

/**
 * The per-garment card used on the shop grid and as the hero's product
 * callouts. Mark, bootcut number, materials, origin, price — the same
 * hierarchy as a real hang tag (Brand Bible §26), not a generic PDP tile.
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
        className={`relative flex items-end justify-center ${
          compact ? "aspect-[3/4]" : "aspect-[3/4.3]"
        } pb-3.5`}
        style={{
          background:
            "linear-gradient(165deg, var(--paper-raised), var(--newsprint) 140%)",
        }}
      >
        <span className="absolute left-3 top-3 text-[13px] font-extrabold tracking-[-0.01em]">
          OMPK
        </span>
        <TrouserIcon fill={product.swatch} dashed={product.dashed} />
      </div>
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
