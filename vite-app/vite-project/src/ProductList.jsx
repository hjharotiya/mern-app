import Product from "./Product";
import { useEffect, useState } from "react";
import data from "./data";
import axios from "axios";
// axios.defaults.baseUrl = "http://localhost:8080";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  //   const products = data;
  const getProducts = async () => {
    const res = await axios.get("/products");
    console.log(res.data);
    setProducts(res.data);
  };

  const handelClick = async (id) => {
    const res = await axios.delete(`/products/${id}`);
    console.log(res.data);
    //(res.data);
    if (res.data._id) {
      setProducts(products.filter((product) => product._id !== res.data._id));
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      {products.map((product, index) => (
        <Product {...product} key={index} handelClick={handelClick}></Product>
      ))}
    </>
  );
};
// ProductList();

export default ProductList;
