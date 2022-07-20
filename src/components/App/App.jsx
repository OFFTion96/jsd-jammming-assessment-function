import React from "react";
import "./App.css";
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import { useState,useEffect } from "react";
import Spotify from '../../utils/Spotify'
//import 3 components

const App = () => {

  const [searchResult,setSearchResult] = useState([{name:'name1',artist:'artist1',album:'album1'},{name:'name2',artist:'artist2',album:'album2'},{name:'name3',artist:'artist3',album:'album3'}])
  const [playListName,setPlayListName] = useState('My Playlisttttt')
  const [playListTracks,setPlayListTracks] = useState([])
  
 
  useEffect(()=>{
    Spotify.getAccessToken()
  },[])


 
  function addTrack(track){
    setPlayListTracks(oldPlayListTracks => {
      if(oldPlayListTracks.includes(track)){
        return oldPlayListTracks;
      } else {
        return [...oldPlayListTracks,track]
      }
    })
  }

  function removeTrack(track){
    setPlayListTracks(oldPlayListTracks=>oldPlayListTracks.filter((item => track !== item)))
  }

  function updatePlaylistName(name){
    setPlayListName(name)
  }

  function savePlaylist(){
    
    const trackUris=playListTracks.map(track=>track.id)
    
    Spotify.savePlaylist(playListName,trackUris).then(()=>{
      setPlayListTracks([])
      setPlayListName('My Playlisttttt')
    })
    console.log(trackUris)
    console.log(playListName)
  }

 
  
  function search(term){
    Spotify.search(term).then((r)=>{
      setSearchResult(r)
    })
  }
  


  console.log(searchResult)
  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar onSearch={search} />
        <div className="App-playlist">
          <SearchResults tracks={searchResult} onAdd={addTrack}/> 
          <Playlist playListName={playListName} playListTracks={playListTracks} onRemove={removeTrack} onNameChange={updatePlaylistName} onSave={savePlaylist}/>
        </div>
      </div>
    </div>
  );
};

export default App;
