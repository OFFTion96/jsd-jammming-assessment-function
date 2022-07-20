import './TrackList.css'
import React from "react";
import Track from '../Track/Track';

const TrackList = (props) => {
  const searchResult=props.tracks
  return (
    <div className="TrackList">
    {searchResult.map(trackMusic=>{
      return <Track track={trackMusic} key={trackMusic.music} onAdd={props.onAdd}/>
    })}
    </div>
  )
};

export default TrackList;
