import React, { useState, useEffect } from "react";
import "./fruit.css";
import axios from "axios";

const Fruit = ({ namelist, setProduct }) => {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    // JSON.parse(localStorage.getItem("userName")) === null
    //   ? localStorage.setItem("userName", JSON.stringify([]))
    //   : console.log("aaa");
    axios.get("/api/fruit/").then((res) => {
      setProducts(res.data);
      // const aaa = res.data;
    });
  }, []);

  // axios.get("/api/milk/").then((res) => {
  // console.log(aaa);
  // }),
  // useEffect(() => {
  //   !JSON.parse(localStorage.getItem(`locallist${namelist}`))
  //     ? axios.get("/api/milk/").then((res) => {
  //         setProducts(res.data);
  //       })
  //     : setProducts([
  //         ...list,
  //         JSON.parse(localStorage.getItem(`locallist${namelist}`)),
  //       ]);
  //   console.log(products);
  // }, [namelist]);

  // const chek = (product) => {
  //   const findprodact = JSON.parse(
  //     localStorage.getItem(`locallist${namelist}`)
  //   ).find((prod) => prod.id === product.id);
  //   console.log(findprodact && findprodact.checked);
  // };

  // const removeProduct = (productId) => {
  //   axios.delete("/api/list/" + productId);
  // };

  return (
    <div className="opendiv">
      {products.map((product) => (
        <div className="product" key={product.id}>
          {/* <input
            type="checkbox"
            checked={
              product.checked
              // JSON.parse(localStorage.getItem(`locallist${namelist}`)) &&
              // namelist && chek(product)
            }
            // onChange={() => {
            //   namelist &&
            //     // onchange();
            //     // setProduct(product);
            //   console.log(product);
            // }}
          ></input> */}
          <button
            className="plus"
            onClick={() => {
              setProduct({
                id: product.id,
                title: product.title,
                kamut: product.kamut,
                image: product.image,
                checked: false,
              });
              product.kamut = 0;
            }}
          >
            X
          </button>

          <img src={product.image} alt=""></img>
          {product.title}
          <div>
            <button
              className="buttonplus"
              onClick={() => {
                namelist && product.kamut++;
                setProduct({
                  id: product.id,
                  title: product.title,
                  kamut: product.kamut,
                  image: product.image,
                });
              }}
            >
              +
            </button>
            {"  "}
            {product.kamut}
            {"  "}
            <button
              className="buttonplus"
              disabled={product.kamut < 1 ? true : false}
              onClick={() => {
                product.kamut--;
                setProduct({
                  id: product.id,
                  title: product.title,
                  kamut: product.kamut,
                  image: product.image,
                });
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
