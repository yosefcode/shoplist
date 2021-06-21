import React, { useState, useEffect, useContext } from "react";
import "./milk.css";
import axios from "axios";
import { AppContext } from "../../prodactcontext";

const Milk = ({ setProduct }) => {
  let [products, setProducts] = useState([]);
  // const [checked, setChecked] = React.useState(false);
  // const [list, setlist] = useState([]);
  const {
    setLocallist,
    locallist,
    namelist,
    product,
    // setProduct,
    getItemlocallist,
  } = useContext(AppContext);

  // const getItemlocallist =
  //   JSON.parse(localStorage.getItem(`locallist${namelist}`)) || [];

  useEffect(() => {
    axios.get("/api/milk/").then((res) => {
      var listproduct = getItemlocallist.concat(res.data);
      for (var i = 0; i < listproduct.length; ++i) {
        for (var j = i + 1; j < listproduct.length; ++j) {
          if (listproduct[i].id === listproduct[j].id)
            listproduct.splice(j--, 1);
        }
      }
      setProducts(listproduct);
    });
  }, [namelist]);

  return (
    <div className="opendiv">
      {products
        .sort((a, b) => (a.title > b.title ? 1 : -1))
        .map((product) => (
          <div className="product" key={product.id}>
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

export default Milk;
