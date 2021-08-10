import React from "react";
import "./style.css";
import Search from "./MainComponents/Search";
import Table from "./MainComponents/Table";
import Button from "./MainComponents/Button";
const Main = ({table}) => {
  return (
    <div className="item-container">
      <div className="search">
        <Search />
      </div>
      <div className="table">
        <Table table={table} />
      </div>
      <div className="button-tab">
        <Button />
      </div>
    </div>
  );
};

export default Main;
