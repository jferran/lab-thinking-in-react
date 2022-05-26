//import React from 'react'
import { useState } from 'react';
import jsonData from './../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function ProductsPage() {
    const [products, setProducts] = useState(jsonData);
    const [search, setSearch] = useState('')
    const [onlyInStock, setOnlyInStock] = useState(false)
  return (
    <div>
        <h1>IronStore</h1>
        <SearchBar setSearch={setSearch} setOnlyInStock={setOnlyInStock}/>
        <ProductTable 
            products={jsonData.filter((product) => onlyInStock ? product.inStock : true && product.name.toLowerCase().includes(search.toLowerCase()))}

            />
    </div>
  )
}

export default ProductsPage