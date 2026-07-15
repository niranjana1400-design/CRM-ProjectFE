import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="card shadow border-0 mb-4">
      <div className="card-body">
        <div className="input-group">

          <span className="input-group-text bg-primary text-white">
            <FaSearch />
          </span>

          <input
            type="text"
            className="form-control"
            placeholder="Search by Name, Email or Phone..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>
      </div>
    </div>
  );
};

export default SearchBar;