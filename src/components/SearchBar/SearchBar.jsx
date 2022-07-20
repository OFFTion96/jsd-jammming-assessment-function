import React, { useState,useEffect } from 'react'
import './SearchBar.css'

const SearchBar = (props) => {
  const [searchTerm,setSearchTerm] = useState("")
  

  return (
    <div className="SearchBar">
      <input onChange={(e)=>setSearchTerm(e.target.value)}
      value = {searchTerm} 
      placeholder="Enter A Song, Album, or Artist" />
      <button className="SearchButton">SEARCH</button>
  </div>
  )
}

export default SearchBar