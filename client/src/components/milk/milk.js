import React, { useState, useEffect } from "react";
import "./milk.css";
import axios from "axios";

const Milk = (props) => {
  let [products, setProducts] = useState([]);
  let [kamut, setkamut] = useState();
  // const [checked, setChecked] = React.useState(false);
  // const [inputValue, setInputValue] = useState([]);
  // const [list, setlist] = useState([]);

  useEffect(() => {
    axios.get("/api/milk/").then((res) => {
      setProducts(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get("/api/list/").then((res) => {
      localStorage.setItem("userName", JSON.stringify(res.data));
    });
  }, []);

  const removeProduct = (productId) => {
    axios.delete("/api/list/" + productId);
  };

  const onchange = (product) => {
    const productId = product.id;
    axios.get("/api/list/").then((res) => {
      const listcart = res.data.find((prod) => prod.id === product.id);
      if (!listcart) {
        setkamut(product.kamut++);
        axios.post("/api/cart/", {
          id: product.id,
          title: product.title,
          kamut: product.kamut,
        });
        // .then((res) => {});

        // setInputValue([
        //   ...inputValue,
        //   {
        //     id: product.id,
        //     title: product.title,
        //     kamut: product.kamut,
        //   },
        // ]);
      } else {
        // setInputValue(
        //   inputValue.filter((listpro) => product.id !== listpro.id)
        // );
        setkamut((product.kamut = 0));
        removeProduct(productId);
      }
    });
  };

  return (
    <div className="opendiv">
      {products.map((product) => (
        <div className="product" key={product.id}>
          <input
            type="checkbox"
            onChange={() => onchange(product, product.id)}
            id={product.id}
            value={(product.kamut, product.id)}
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
      <button
        onClick={() => {
          console.log("prod");
        }}
      >
        aa
      </button>
    </div>
  );
};

export default Milk;
