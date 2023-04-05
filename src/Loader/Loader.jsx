import { getShoppingCart } from "../utilities/fakedb";

const cardProductLoader = async () => {
  const loadedProducts = await fetch("products.json");
  const products = await loadedProducts.json();

  const saveCart = [];
  // form fakeDb and local storage
  const storedCart = getShoppingCart();
  for (const id in storedCart) {
    const addProduct = products.find((pd) => pd.id === id);
    if (addProduct) {
      const quantity = storedCart[id];
      addProduct.quantity = quantity;
      saveCart.push(addProduct);
    }
  }

  return saveCart;
};

export default cardProductLoader;
