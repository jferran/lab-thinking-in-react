import React from 'react';

function ProductRow({ product }) {
    const style=product.inStock? {} : {color:'red'}
  return (
    <tr>
      <td style={style}>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

export default ProductRow;
