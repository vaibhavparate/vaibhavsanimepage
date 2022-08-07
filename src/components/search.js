import { useState } from "react"
import Animecard from "./card"
import { Link, useNavigate} from 'react-router-dom'
import axios from "axios"

function Search(){
    var [flag,setFlag] =useState(0)
    var search =localStorage.getItem("search")
    var [anime, setAnime]=useState([])
    if(flag <1){
    axios({
        method: 'GET',
        url: 'https://jikan1.p.rapidapi.com/search/anime',
        params: {q: search},
        headers: {
          'X-RapidAPI-Key': '5a477cc51emsh5435d85e5daf940p16167bjsncd04c90a2434',
          'X-RapidAPI-Host': 'jikan1.p.rapidapi.com'
        }
    }).then((response)=>{       
          setFlag(1)
      console.log("response from search api",response)
      localStorage.setItem("result",response.data.results)
      setAnime(response.data.results)

    },(error)=>{
      console.log("error from search api",error)
      setFlag(1)
      setAnime([{title: "Not found", synopsis:"try searching for full name"}])
  })}

   
return <>
       <div className="row">
       {anime.map(function(each,index){
        return <Animecard image={each.image_url} name = {each.title} role = {each.synopsis} goto ={each.url}/>
       })}
       </div>
       
      </>}

export default Search