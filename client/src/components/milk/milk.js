import React, { useState, useEffect } from "react";
import "./milk.css";
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
    axios.get("http://127.0.0.1:8000/api/milk/").then((res) => {
      setProducts(res.data);
      // console.log(res.data);
    });
  }, []);

  const onchange = (product) => {
    axios.get("http://127.0.0.1:8000/api/list/").then((res) => {
      const listcart = res.data.find((prod) => prod.id === product.id);
      if (!listcart) {
        setkamut(product.kamut++);
        axios
          .post("http://127.0.0.1:8000/api/cart/", {
            id: product.id,
            title: product.title,
            kamut: product.kamut,
          })
          .then((res) => {});

        // setInputValue([
        //   ...inputValue,
        //   {
        //     id: product.id,
        //     title: product.title,
        //     kamut: product.kamut,
        //   },
        // ]);
      } else {
        setInputValue(
          inputValue.filter((listpro) => product.id !== listpro.id)
        );
        setkamut((product.kamut = 0));
      }
    });
  };

  return (
    <div className="opendiv">
      {products.map((product) => (
        <div className="product" key={product.id}>
          <input
            type="checkbox"
            onChange={() => onchange(product)}
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
                setChecked(true);
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
      {/* for (let i = 0; i < asas.length; i++) {
              // const element = array[i];
              setprod([{ aaa: product.title, bbb: product.kamut }]);
            } */}
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
