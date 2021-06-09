import React, { useState, useEffect } from "react";
import "./milk.css";
import axios from "axios";

const Milk = ({ onchange, namelist }) => {
  let [products, setProducts] = useState([]);
  let [kamut, setkamut] = useState();
  // const [checked, setChecked] = React.useState(false);
  // const [list, setlist] = useState([]);

  useEffect(() => {
    // JSON.parse(localStorage.getItem("userName")) === null
    //   ? localStorage.setItem("userName", JSON.stringify([]))
    //   : console.log("aaa");
    axios.get("/api/milk/").then((res) => {
      setProducts(res.data);
    });
  }, []);

  // const removeProduct = (productId) => {
  //   axios.delete("/api/list/" + productId);
  // };

  return (
    <div className="opendiv">
      {products.map((product) => (
        <div className="product" key={product.id}>
          <input
            type="checkbox"
            onChange={() => {
              namelist && onchange(product);
            }}
          ></input>
          <img src={product.image} alt=""></img>
          {product.title}
          <div>
            <button
              className="plus"
              onClick={() => {
                setkamut(product.kamut++);
              }}
            >
              +
            </button>
            {"  "}
            {product.kamut}
            {"  "}
            <button
              className="minus"
              onClick={() => {
                setkamut(product.kamut--);
              }}
            >
              -
            </button>
          </div>
        </div>
      ))}{" "}
      {/* <button
        onClick={() => {
          console.log("prod");
        }}
      >
        aa
      </button> */}
    </div>
  );
};

export default Milk;
