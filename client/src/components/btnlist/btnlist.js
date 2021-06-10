import React, { useContext, useState } from "react";
import "./btnlist.css";
import { AppContext } from "../../prodactcontext";

const Btnlist = () => {
  const { addprodact, locallist, namelist, setNamelist } =
    useContext(AppContext);

  const [addnamelist, setAddNamalist] = useState("");

  const storagename = JSON.parse(localStorage.getItem(`locallistname`)) || [];

  return (
    <div className="tabpro" dir="rtl">
      <div>
        <input
          className="input"
          onInput={(e) => {
            setAddNamalist(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            localStorage.setItem(
              `locallistname`,
              JSON.stringify([
                ...(JSON.parse(localStorage.getItem(`locallistname`)) || []),
                { namelist: addnamelist },
              ])
            );
            setNamelist(addnamelist);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            if (
              !JSON.parse(localStorage.getItem(`locallistname`)) ||
              JSON.parse(localStorage.getItem(`locallistname`)).length === 0
            ) {
              localStorage.setItem(
                `locallistname`,
                JSON.stringify([
                  // ...(JSON.parse(localStorage.getItem(`locallistname`)) || []),
                  { namelist: 1 },
                ])
              );
              setNamelist(1);
            } else {
              for (
                var i = 0;
                i < JSON.parse(localStorage.getItem(`locallistname`)).length;
                i++
              ) {
                var max = Math.max(
                  JSON.parse(localStorage.getItem(`locallistname`))[i].namelist
                );
              }
              localStorage.setItem(
                `locallistname`,
                JSON.stringify([
                  ...(JSON.parse(localStorage.getItem(`locallistname`)) || []),
                  { namelist: max + 1 },
                ])
              );
              setNamelist(max + 1);
            }
          }}
          style={{ width: "100px", margin: "20px" }}
        >
          + AUTO
        </button>
      </div>
      <div>
        {storagename.map((namelist) => (
          <button
            style={{ width: "70px", margin: "10px" }}
            key={namelist.namelist}
            onClick={() => {
              setNamelist(namelist.namelist);
            }}
          >
            {namelist.namelist}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Btnlist;
