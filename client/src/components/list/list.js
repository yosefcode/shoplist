import React, { useState, useEffect } from "react";
import "./list.css";
import axios from "axios";
import socketIOClient from "socket.io-client";

const Listdata = (props) => {
  let [products, setProducts] = useState([]);

  const socket = socketIOClient(process.env.REACT_APP_URLSOCKET);

  const getproducts = () => {
    axios.get("/api/list/").then((res) => {
      setProducts(res.data);
    });
  };

  useEffect(() => {
    getproducts();
    socket.on("AddProduct", () => {
      getproducts();
    });
  }, []);

  return (
    <div className="divlist">
      {products.map((product) => (
        <div className="list" key={product.id}>
          <input
            type="checkbox"
            // onChange={() => onchange(product)}
          ></input>
          <img src={product.image} alt=""></img>
          {product.title}
          <div>
            <button
              className="plus"
              // onClick={() => {
              //   setkamut(product.kamut++);
              //   setChecked(true);
              // }}
            >
              +
            </button>
            {"  "}
            {product.kamut}
            {"  "}
            <button
              className="minus"
              // onClick={() => {
              //   setkamut(product.kamut--);
              // }}
            >
              -
            </button>
          </div>
        </div>
      ))}{" "}
    </div>
  );
};

export default Listdata;
