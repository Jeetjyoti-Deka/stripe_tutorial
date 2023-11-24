export const PRODUCTS = [
  {
    id: "price_1OG2gVSB9hgZSR471PASK1bv",
    title: "Coffee",
    price: 4.99,
  },
  {
    id: "price_1OG2hlSB9hgZSR47ly0DpIcl",
    title: "Sunglasses",
    price: 9.99,
  },
  {
    id: "price_1OG2ijSB9hgZSR47LN8xSb2d",
    title: "Camera",
    price: 39.99,
  },
];

export function getProductById(id: string) {
  const product = PRODUCTS.find((item) => item.id === id);

  if (!product) {
    console.log("Product does not exist");
    return undefined;
  }

  return product;
}
