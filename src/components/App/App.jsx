import React from "react";
import "./App.css";
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import { useState,useEffct } from "react";
//import 3 components

const App = () => {

  const [searchResult,setSearchResult] = useState([{name:'name1',artist:'artist1',album:'album1'},{name:'name2',artist:'artist2',album:'album2'},{name:'name3',artist:'artist3',album:'album3'}])
  const [playListName,setPlayListName] = useState('My Playlisttttt')
  const [playListTracks,setPlayListTracks] = useState([{name:'playListName1',artist:'playListArtist1',album:'playListAlbum1',id:1},
  {name:'playListName2',artist:'playListArtist2',album:'playListAlbum2',id:2}])

 
  function addTrack(track){
    setPlayListTracks(oldPlatListTracks => {
      if(oldPlatListTracks.includes(track)){
        return oldPlatListTracks;
      } else {
        return [...oldPlatListTracks,track]
      }
    })
  }

  


  console.log(searchResult)
  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults tracks={searchResult} onAdd={addTrack}/> 
          <Playlist playListName={playListName} playListTracks={playListTracks}/>
        </div>
      </div>
    </div>
  );
};

export default App;
