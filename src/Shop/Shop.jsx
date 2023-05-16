import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";
import { addToDb, getShoppingCart } from "../utilities/fakedb";
import "./Shop.css";
import { useLoaderData } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

  // 1. total determine the total number of items
  const { totalProducts } = useLoaderData();
  console.log(totalProducts);

  // TODO 2. decide on the number of items per page
  const totalPages = Math.ceil(totalProducts / itemsPerPage);
  const pageNumbers = [...Array(totalPages).keys()];

  const options = [5, 10, 20];
  const handleSelectChange = (e) => {
    setItemsPerPage(parseInt(e.target.value));
    setCurrentPage(0);
  };

  // useEffect(() => {
  //   fetch("http://localhost:5000/products")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:5000/products?page=${currentPage}&limit=${itemsPerPage}`);
      const data = await response.json();
      setProducts(data);
    };
    fetchData();
  }, [currentPage, itemsPerPage]);

  // data outside interrogation korar jonno used useEffect()
  useEffect(() => {
    // step 2: get id
    const storedCart = getShoppingCart();
    // ja ja korsi shob array te dukaiya save korte hobe
    const savedCart = [];
    // object tai loop korte for in lagbe
    for (const id in storedCart) {
      // step 3: get the product from products by using id
      const addedProduct = products.find((product) => product._id === id);

      if (addedProduct) {
        // step 4: get quantity of the product
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        // step 5: ja ja korsi shob push koira dilam [] array er vitor
        savedCart.push(addedProduct);
      }
    }
    // step 6:
    setCart(savedCart);
  }, [products]);

  // event handler and create new cart for order summary
  const addToCart = (product) => {
    console.log(product);
    const newCart = [...cart, product];
    setCart(newCart);
    // click korle local storage e store hobe tai addToDb import korlam
    // step : 1
    addToDb(product._id);
  };

  // ------------------------ return -------------------------------
  return (
    <>
      <div className="shop-container">
        {/*--------------- products----------------- */}
        <div className="product-container">
          {products.map((product) => (
            <Products
              product={product}
              key={product._id}
              addToCart={addToCart}
            ></Products>
          ))}
        </div>

        {/*--------------- order summary------------------ */}
        <div className="order-summary">
          <Cart cart={cart}></Cart>
        </div>
      </div>

      {/* pagination */}
      <div className="pagination">
        {pageNumbers.map((number) => (
          <button
            className={currentPage === number ? "selected" : ""}
            onClick={() => setCurrentPage(number)}
            key={number}
          >
            {number}
          </button>
        ))}
        <select value={itemsPerPage} onChange={handleSelectChange}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Shop;
