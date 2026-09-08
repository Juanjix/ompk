/**
 * Example catalogue for the Bootcut Nº01 hero garment, used until a real Shopify
 * store is connected (see isShopifyConfigured() in lib/shopify.ts). These are
 * illustrative colorways from the brand design pass (Brand Bible §21), not live
 * inventory or a final price — swap for getProducts() once SHOPIFY_STORE_DOMAIN /
 * SHOPIFY_STOREFRONT_ACCESS_TOKEN are set.
 */
export type ExampleProduct = {
  id: string;
  name: string;
  cat: string;
  material: string;
  origin: string;
  price: string;
  swatch: string;
  outline?: boolean;
  dashed?: boolean;
};

export const exampleProducts: ExampleProduct[] = [
  {
    id: "1",
    name: "Indigo Denim",
    cat: "CAT. Nº 001",
    material: "100% COTTON",
    origin: "MADE IN ARGENTINA",
    price: "USD 185",
    swatch: "#33455f",
  },
  {
    id: "2",
    name: "Black Corduroy",
    cat: "CAT. Nº 002",
    material: "100% COTTON",
    origin: "MADE IN ARGENTINA",
    price: "USD 185",
    swatch: "#17140f",
  },
  {
    id: "3",
    name: "White Denim",
    cat: "CAT. Nº 003",
    material: "100% COTTON",
    origin: "MADE IN ARGENTINA",
    price: "USD 185",
    swatch: "#e8e0ce",
    outline: true,
  },
  {
    id: "4",
    name: "Striped Hickory",
    cat: "CAT. Nº 004",
    material: "100% COTTON",
    origin: "MADE IN ARGENTINA",
    price: "USD 185",
    swatch: "#EFE9DA",
    dashed: true,
  },
];
