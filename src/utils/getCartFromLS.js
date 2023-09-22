export const getCartFromLs = () => {
  const data = localStorage.getItem("cart");
  const products = data ? JSON.parse(data) : [];
  const productsNumber = products.reduce((start, product) => {
    return start + product.quantity || 0;
  }, 0);
  return { products, productsNumber };
};
