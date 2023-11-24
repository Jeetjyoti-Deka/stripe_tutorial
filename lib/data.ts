export const PRODUCTS = [
  {
    id: "1",
    title: "Coffee",
    price: 4.99,
  },
  {
    id: "2",
    title: "Sunglasses",
    price: 9.99,
  },
  {
    id: "3",
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
