import { useState } from "react"
import { Link, useNavigate} from 'react-router-dom'
import axios from "axios"
function Navbar(){
    
    var[error,setError]=useState("")
    var[flag,setFlag]=useState()
    var navigate = useNavigate()
  console.log("Navbar")
      function result(){
           
      }
      function gotosearch(){
        navigate("/search")
      }
      function getSearch(event){
        setFlag(event.target.value)
        console.log(flag)
        console.log(event.target.value)
        localStorage.setItem("search", flag)
        
    }

    return<>
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <Link to ="/"style={{ textDecoration: 'none' }}><a class="navbar-brand" href="#">AnimeMangaPedia</a></Link>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          {/* <a class="nav-link active" aria-current="page" href="#">Manga</a> */}
        </li>
        <li class="nav-item">
        <Link to ="/"style={{ textDecoration: 'none' }}> <a class="nav-link" href="#">Anime</a></Link>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input onChange={getSearch}  class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button onClick={gotosearch} class="btn btn-outline-success" type="submit">Search</button>
        {/* <button class="btn btn-outline-success" type="submit">Login</button> */}
      </form>
    </div>
  </div>
</nav>
    </>
}
export default Navbar