import React from 'react'

function SearchBar({setSearch, setOnlyInStock}) {
    const[searchInput, setSearchInput] = React.useState('')
    const handleChange = (event) => {
        setSearchInput(event.target.value)
        setSearch(event.target.value)
    }
    const handleCheckBox = (event) => {
        setOnlyInStock(event.target.checked)
    }
  return (
    <div>
        <input type="text" name="search" onChange={handleChange} placeholder="Search" value={searchInput}/>
        <input type="checkbox" name="inStockFilter" onChange={handleCheckBox}/><label htmlFor='inStockFilter'>Only show products in stock</label>
    </div>
  )
}

export default SearchBar