import React, { useState, useEffect } from "react";
import "./App.css";
import Product from "./components/product/product";
// import List from "./components/list/list";
// import Locallist from "./components/locallist/locallist";
import { Tabs } from "antd";
import { AppContext } from "./prodactcontext";

const { TabPane } = Tabs;

function callback(key) {
  // console.log(key);
}

function App() {
  const [locallist, setLocallist] = useState([]);
  const [namelist, setNamelist] = useState("");

  useEffect(() => {
    !JSON.parse(localStorage.getItem(`locallist${namelist}`))
      ? setLocallist([])
      : setLocallist(JSON.parse(localStorage.getItem(`locallist${namelist}`)));
  }, [namelist]);

  const valuelocallist = {
    locallist: locallist,
    addprodact: (value) => setLocallist(value),
    namelist: namelist,
    setNamelist: (value) => setNamelist(value),
  };

  return (
    <div className="App" dir="rtl">
      <AppContext.Provider value={valuelocallist}>
        <header>
          <div className="App-header">shop list</div>
        </header>
        <div className="taball">
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="בחר מוצרים" key="1">
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
        {/* <List /> */}
        {/* <Locallist /> */}
      </AppContext.Provider>
    </div>
  );
}

export default App;
