import React, { useState } from "react";
import "./App.css";
import Product from "./components/product/product";
import List from "./components/list/list";
import { Tabs } from "antd";

const { TabPane } = Tabs;

function callback(key) {
  // console.log(key);
}

function App() {
  return (
    <div className="App" dir="rtl">
      <header>
        <div className="App-header">shop list</div>
      </header>
      <List />
      <div className="taball">
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="בחר מוצרים" key="1">
            {" "}
            <Product />
          </TabPane>
          <TabPane tab="רשימה" key="2">
            <h1 style={{ color: "white" }}>בקרוב </h1>{" "}
          </TabPane>
          <TabPane tab="הוסף מוצרים" key="3">
            <h1 style={{ color: "white" }}>בקרוב </h1>{" "}
          </TabPane>
          <TabPane tab="רשימה קבועה" key="4">
            <Product />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
