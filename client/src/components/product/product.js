import React, { useContext, useState, useEffect } from "react";
import "./product.css";
import Milk from "../milk/milk.js";
import Fruit from "../fruit/fruit.js";
import { Tabs } from "antd";
import { AppContext } from "../../prodactcontext";
import Locallist from "../locallist/locallist.js";
import AllLocallist from "../all‏locallist/all‏locallist.js";
import Btnlist from "../btnlist/btnlist";

const { TabPane } = Tabs;

function callback(key) {
  // console.log(key);
}
const Product = () => {
  const { addprodact, locallist, namelist, setNamelist } =
    useContext(AppContext);

  const [product, setProduct] = useState({});

  useEffect(() => {
    namelist && onchange();
  }, [product]);

  const getItemlocallist =
    JSON.parse(localStorage.getItem(`locallist${namelist}`)) || [];

  const removelocal = locallist.filter((listpro) => product.id !== listpro.id);

  const removeprodact = !product
    ? null
    : getItemlocallist.filter((listpro) => product.id !== listpro.id);

  const add = () => {
    localStorage.setItem(
      `locallist${namelist}`,
      JSON.stringify([
        ...(JSON.parse(localStorage.getItem(`locallist${namelist}`)) || []),
        product,
      ])
    );

    addprodact((locallist) => [...locallist, product]);
  };

  const removeprodactall = () => {
    localStorage.setItem(`locallist${namelist}`, JSON.stringify(removeprodact));
    addprodact(removelocal);
  };

  const change = () => {
    removeprodactall();
    add();
  };

  const onchange = () => {
    !product
      ? add()
      : product.checked === false
      ? removeprodactall()
      : product.kamut > 0
      ? change()
      : removeprodactall();
  };

  return (
    <div className="tabpro" dir="rtl">
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="מוצרי חלב" key="1">
          <Milk
            onchange={onchange}
            namelist={namelist}
            setProduct={setProduct}
          />
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
      <Btnlist />
      <Locallist setProduct={setProduct} />
      <AllLocallist setProduct={setProduct} />
    </div>
  );
};

export default Product;
