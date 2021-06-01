import React from "react";
import "./product.css";
import Milk from "../milk/milk.js";
import Fruit from "../fruit/fruit.js";
import { Tabs } from "antd";

const { TabPane } = Tabs;

function callback(key) {
  // console.log(key);
}

function Product() {
  return (
    <div className="tabpro" dir="rtl">
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="מוצרי חלב" key="1">
          <Milk />
        </TabPane>
        <TabPane tab="פירות וירקות" key="2">
          <Fruit />
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
    </div>
  );
}

export default Product;
