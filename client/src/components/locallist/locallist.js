import React, { useContext } from "react";
import "./locallist.css";
import { AppContext } from "../../prodactcontext";

const Locallist = ({ setProduct }) => {
  const { locallist, namelist, setNamelist } = useContext(AppContext);

  return (
    <div className="divlocallist">
      <div className="localover">
        {namelist && (
          <div>
            <h1 style={{ fontWeight: 900 }}>
              {" "}
              <button
                className="plus"
                onClick={() => {
                  const removenamelist = JSON.parse(
                    localStorage.getItem(`locallistname`)
                  ).filter((listpro) => namelist !== listpro.namelist);
                  localStorage.setItem(
                    `locallistname`,
                    JSON.stringify(removenamelist)
                  );
                  setNamelist();
                  localStorage.removeItem(`locallist${namelist}`);
                }}
              >
                X
              </button>
              {` רשימה מס' ${namelist}`}{" "}
            </h1>{" "}
          </div>
        )}{" "}
        {locallist
          .sort((a, b) => (a.title > b.title ? 1 : -1))
          .map((product) => (
            <div className="list" key={product.id}>
              <button
                onClick={() => {
                  setProduct({
                    id: product.id,
                    title: product.title,
                    kamut: product.kamut,
                    image: product.image,
                    checked: false,
                  });
                }}
              >
                X
              </button>
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
    </div>
  );
};

export default Locallist;
