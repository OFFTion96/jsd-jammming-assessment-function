import './Track.css'
import React from 'react'

const Track = (props) => {
  function renderAction(){
      if(props.isRemoval){
        return <button className="Track-action" onClick={removeTrack}>-</button>
      } else {
        return <button className="Track-action" onClick={addTrack}>+</button>
      }
  }

  function addTrack(){
    props.onAdd(props.track)
  }

  function removeTrack(){
    props.onRemove(props.track)
  }

  

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{props.track.name}</h3>
        <p>{props.track.artist} | {props.track.album} </p>
      </div>
      {renderAction()}
  </div>
  )
}

export default Track