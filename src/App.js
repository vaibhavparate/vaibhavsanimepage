import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar';
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Animelist from './components/Animelist';
import Search from './components/search';



function App() {
  return <>
  <BrowserRouter>
  <Navbar/>
  <Routes>

      <Route path = "/" element={<><Animelist/></>} ></Route>
      <Route path = "/search" element={<><Search/></>} ></Route>

      

      


  </Routes>
  </BrowserRouter>
  </>
}

export default App;
