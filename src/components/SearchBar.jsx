import React from 'react'

function SearchBar({setSearch}) {
    const[searchInput, setSearchInput] = React.useState('')
    const handleChange = (event) => {
        setSearchInput(event.target.value)
        setSearch(event.target.value)
    }
  return (
    <div>
        <input type="text" name="search" onChange={handleChange} placeHolder="Search" value={searchInput}/>
    </div>
  )
}

export default SearchBar