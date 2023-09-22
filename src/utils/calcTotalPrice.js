export const calcTotalPrice = (items) => {
  return items.reduce((subtotal, product) => {
    return subtotal + product.price * product.quantity;
  }, 0);
};
