import React from "react"
import './SearchResults.css'
import TrackList from "../TrackList/TrackList"

const SearchResults = (props) => {
  const searchResult=props.tracks
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList tracks={searchResult} onAdd={props.onAdd} isRemoval={false}/>
    </div>
  )
}

export default SearchResults