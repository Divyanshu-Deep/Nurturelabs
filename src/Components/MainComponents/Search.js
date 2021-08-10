import React from "react";
import {FaSearch} from "react-icons/fa";
const Search = () => {
  return (
    <div className="search-bar">
      <div className="first-row">
        <div className="data">
          <span className="text-0">Add another keyword</span> <span className="span-box">1/3</span> <span className="upgrade">UPGRADE</span>
        </div>
        <div className="advance-search">Advance Search</div>
      </div>
      <div className="second-row">
          <div className="search-icon">
              <FaSearch size="25"/>
          </div>
            <div className="text-3">Enter your filters here</div>
            <div className="text-4">SAVE FILTERS</div>
      </div>
    </div>
  );
};

export default Search;

