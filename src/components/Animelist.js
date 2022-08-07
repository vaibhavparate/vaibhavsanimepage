import { useState, useEffect } from 'react';
import Animecard from './card';
import axios from 'axios';
function Animelist(){
  var [animes, setAnimes]=useState([])
  useEffect(()=>{
    axios({
        method: 'GET',
        url: 'https://jikan1.p.rapidapi.com/top/anime/1/upcoming',
        headers: {
          'X-RapidAPI-Key': '5a477cc51emsh5435d85e5daf940p16167bjsncd04c90a2434',
          'X-RapidAPI-Host': 'jikan1.p.rapidapi.com'
        }
    }).then((response)=>{
        console.log("response from top api",response)
      setAnimes(response.data.top)
    },(error)=>{console.log("error from top api",error)})
  },[])
 if(animes.length == 0){
   return <>
    <div className="spinner-container">
      <div className="loading-spinner">
      </div>
    </div>
   </>
 }
 else{ 
    return <>
    
  <div className="row">
  {animes.map(function(each,index){
   return <Animecard image={each.image_url} name = {each.title} role = {each.synopsis} goto ={each.url}/>
  })}
  </div>
  
  </>}
   
    
}

export default Animelist