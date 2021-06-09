import React, { useContext } from "react";
import "./locallist.css";
import { AppContext } from "../../prodactcontext";

const Locallist = ({ onchange }) => {
  const { addprodact, locallist, namelist, setNamalist } =
    useContext(AppContext);

  return (
    <div className="divlocallist">
      {namelist && <div>{` רשימה מס' ${namelist}`}</div>}{" "}
      {locallist.map((product) => (
        <div className="list" key={product.id}>
          <button onClick={() => onchange(product)}>X</button>
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
