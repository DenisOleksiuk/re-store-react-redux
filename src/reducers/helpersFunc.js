const updateCartItems = (cartItems, item, idx) => {
  if (idx === -1) {
    return [...cartItems, item];
  } else {
    return [
      ...cartItems.slice(0, idx),
      item,
      ...cartItems.slice(idx + 1),
    ]
  };
};

const updateCartItem = (item = {}, book) => {
  const {
    id = book.id,
    title = book.title,
    count = 0,
    total = 0,
  } = item;

  return {
    id,
    title,
    count: count + 1,
    total: total + book.price,
  };
};

export {
  updateCartItems,
  updateCartItem,
};
