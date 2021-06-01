import React, { useState, useEffect } from "react";
import "./fruit.css";
import axios from "axios";

const Fruit = (props) => {
  let [products, setProducts] = useState([]);
  let [kamut, setkamut] = useState(1);

  useEffect(() => {
    axios.get("http://localhost:8000/api/fruit/").then((res) => {
      setProducts(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div className="opendiv">
      {products.map((product) => (
        <div className="product" key={product.id}>
          <input type="checkbox"></input>
          <img src={product.image} alt=""></img>
          {product.title}
          <div>
            <button
              className="plus"
              onClick={() => {
                setkamut(product.kamut++);
                // console.log(product.kamut);
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
    </div>
  );
};

export default Fruit;
