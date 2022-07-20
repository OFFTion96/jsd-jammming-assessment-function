import './TrackList.css'
import React from "react";
import Track from '../Track/Track';

const TrackList = (props) => {
  const searchResult=props.tracks
  return (
    <div className="TrackList">
    {searchResult.map(trackMusic=>{
      return <Track track={trackMusic} key={trackMusic.id} onAdd={props.onAdd} onRemove={props.onRemove} isRemoval={props.isRemoval}/>
    })}
    </div>
  )
};

export default TrackList;
