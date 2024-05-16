import React from "react";

const SearchBar = ({ searchTerm, onSearchTermChange }) => {
    return (
        <input
            type="search"
            placeholder="Search products"
            className="search-bar-products"
            value={searchTerm}
            onChange={onSearchTermChange}
        />
    );
};

export default SearchBar;
