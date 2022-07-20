import React from 'react'
import './Playlist.css'
import TrackList from '../TrackList/TrackList'

const Playlist = (props) => {
  const playListName = props.playListName
  const playListTracks = props.playListTracks
  return (
    <div className="Playlist">
      <input value={playListName} onChange={(e)=> props.onNameChange(e.target.value)}/>
      <TrackList tracks={playListTracks} onRemove = {props.onRemove} isRemoval={true}/>
      <button className="Playlist-save" onClick={props.onSave}>SAVE TO SPOTIFY</button>
  </div>
  )
}

export default Playlist