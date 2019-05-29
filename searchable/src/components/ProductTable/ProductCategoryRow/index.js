import React from "react";

const ProductCategoryRow = (props) => (
  <tr>
    <th colSpan="2">
      {props.category}
    </th>
  </tr>
);

export default ProductCategoryRow;

