import React, { useState, useEffect } from "react";
import "./list.css";
import axios from "axios";
import Avatar from "antd/lib/avatar/avatar";

const Milk = (props) => {
  let [products, setProducts] = useState([]);
  const [productfull, setproductfull] = useState([]);
  const [selected, setselected] = useState([]);
  let [kamut, setkamut] = useState();
  const [checked, setChecked] = React.useState(false);
  const [inputValue, setInputValue] = useState([]);
  const [list, setlist] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/list/").then((res) => {
      setProducts(res.data);
      // console.log(res.data);
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

export default Milk;
