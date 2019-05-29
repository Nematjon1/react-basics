import React from "react";

const SearchBar = (props) => {
  const handleFilterTextChange = (e) => {
    props.onFilterTextChange(e.target.value)
  }

  const handleInStockChange = (e) => {
    props.onInStockChange(e.target.checked)
  }
  return (
    <form>
      <input
        placeholder="Search..."
        onChange={handleFilterTextChange}
        type="text"
        value={props.filterText}
      />
      <p>
        <input
          onChange={handleInStockChange}
          type="checkbox"
          checked={props.inStockOnly}
        />
        {" "}
        Only show products in stock
      </p>
    </form>

  );
}

export default SearchBar;

