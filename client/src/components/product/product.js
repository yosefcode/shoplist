import React, { useContext, useState } from "react";
import "./product.css";
import Milk from "../milk/milk.js";
import Fruit from "../fruit/fruit.js";
import { Tabs } from "antd";
import { AppContext } from "../../prodactcontext";
import Locallist from "../locallist/locallist.js";

const { TabPane } = Tabs;

function callback(key) {
  // console.log(key);
}

const Product = () => {
  const { addprodact, locallist, namelist, setNamalist } =
    useContext(AppContext);

  const [addnamelist, setAddNamalista] = useState("");

  const storagename = JSON.parse(localStorage.getItem(`locallistname`)) || [];

  const onchange = (product) => {
    const productslist = {
      id: product.id,
      title: product.title,
      kamut: product.kamut,
      image: product.image,
    };

    const add = () => {
      localStorage.setItem(
        `locallist${namelist}`,
        JSON.stringify([
          ...(JSON.parse(localStorage.getItem(`locallist${namelist}`)) || []),
          productslist,
        ])
      );

      addprodact((locallist) => [...locallist, productslist]);
    };

    const removelocal = locallist.filter(
      (listpro) => product.id !== listpro.id
    );

    const removeprodactall = () => {
      localStorage.setItem(
        `locallist${namelist}`,
        JSON.stringify(removeprodact)
      );
      addprodact(removelocal);
    };

    const getItemlocallist =
      JSON.parse(localStorage.getItem(`locallist${namelist}`)) || [];

    const findprodact = getItemlocallist.find((prod) => prod.id === product.id);

    const removeprodact = !findprodact
      ? null
      : getItemlocallist.filter((listpro) => findprodact.id !== listpro.id);

    !findprodact ? add() : removeprodactall();

    // setkamut((product.kamut = 0));

    // // removeProduct(productId);
    // console.log("aaa");
  };

  return (
    <div className="tabpro" dir="rtl">
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="מוצרי חלב" key="1">
          <Milk onchange={onchange} namelist={namelist} />
        </TabPane>
        <TabPane tab="פירות וירקות" key="2">
          <Fruit onchange={onchange} />
        </TabPane>
        <TabPane tab="שימורים" key="3">
          <h1 style={{ color: "white" }}>בקרוב </h1>{" "}
        </TabPane>
        <TabPane tab="מוצרי בשר" key="4">
          <h1 style={{ color: "white" }}>בקרוב </h1>{" "}
        </TabPane>
        <TabPane tab="מוצרי אפיה" key="5">
          <h1 style={{ color: "white" }}>בקרוב </h1>{" "}
        </TabPane>
        <TabPane tab="חומרי נקיון" key="6">
          <h1 style={{ color: "white" }}>בקרוב </h1>{" "}
        </TabPane>
        <TabPane tab="חטיפים" key="7">
          <h1 style={{ color: "white" }}>בקרוב </h1>{" "}
        </TabPane>
        <TabPane tab="חד פעמי" key="8">
          <h1 style={{ color: "white" }}>בקרוב </h1>{" "}
        </TabPane>
      </Tabs>
      <div>
        <input
          className="input"
          onInput={(e) => {
            setAddNamalista(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            // localStorage.setItem(`locallist${addnamelist}`, JSON.stringify([]));
            localStorage.setItem(
              `locallistname`,
              JSON.stringify([
                ...(JSON.parse(localStorage.getItem(`locallistname`)) || []),
                { namelist: addnamelist },
              ])
            );
            setNamalist(addnamelist);
          }}
        >
          +
        </button>
      </div>
      <div>
        {storagename.map((namelist) => (
          <button
            style={{ width: "70px", margin: "10px" }}
            key={namelist.namelist}
            onClick={() => {
              setNamalist(namelist.namelist);
            }}
          >
            {namelist.namelist}
          </button>
        ))}
      </div>
      <Locallist onchange={onchange} />
    </div>
  );
};

export default Product;
