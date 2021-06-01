import React, { useState, useEffect } from "react";
import "./locallist.css";
// import axios from "axios";

const Locallist = (props) => {
  const storage = JSON.parse(localStorage.getItem("userName"));
  let [products, setProducts] = useState([]);

  useEffect(() => {
    // axios.get("http://127.0.0.1:8000/api/list/").then((res) => {
    setProducts(storage === null ? null : storage);
  }, []);

  return (
    <div className="divlocallist">
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

export default Locallist;
