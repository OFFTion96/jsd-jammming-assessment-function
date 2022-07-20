import React, { useState,useEffect } from 'react'
import './SearchBar.css'

const SearchBar = (props) => {
  const [searchTerm,setSearchTerm] = useState("")

  function search(){
    props.onSearch(searchTerm)
  }

  
  function handleTermChange(e){
    setSearchTerm(e.target.value)
  }

  function enterKey(e){
    if (e.key==="Enter"){
      search()
    }
  }

  return (
    <div className="SearchBar">
      <input onChange={handleTermChange} onKeyPress={enterKey}
      value = {searchTerm} 
      placeholder="Enter A Song, Album, or Artist" />
      <button className="SearchButton" onClick={search}>SEARCH</button>
  </div>
  )
}

export default SearchBar