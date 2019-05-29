import React, { Component } from 'react';

import SearchBar from "../SearchBar";
import ProductTable from "./ProductTable/ProductTable";
import './App.css';

class App extends Component {
  state = {
    filterText: "",
    inStockOnly: false
  }

  handleFilterTextChange = (filterText) => {
    this.setState({
      filterText
    });
  }

  handleInStockChange = (inStockOnly) => {
    this.setState({
      inStockOnly
    });
  }

  render() {
    return (
      <div className="App">
        <SearchBar
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
          filterText={this.state.filterText}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStock={this.state.inStockOnly}
        />
      </div>
    );
  }
}

export default App;
