import React from 'react'
import './Playlist.css'
import TrackList from '../TrackList/TrackList'

const Playlist = (props) => {
  const playListName = props.playListName
  const playListTracks = props.playListTracks
  return (
    <div className="Playlist">
      <input value={playListName}/>
      <TrackList tracks={playListTracks} />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
  </div>
  )
}

export default Playlist