import logo from './logo.svg';
import './App.css';
import Button from "react-bootstrap/Button";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import {useRef, useState, useEffect} from 'react';
import axios from "axios";

import Home from "./pages/home";
import Camera from "./pages/camera";
import ReadingList from "./pages/readingList";

import homeFillButton from './Home_fill.svg'
import homeButton from './Home.svg'

import cameraButton from './Camera.svg'
import cameraFillButton from './Camera_fill.svg'

import bookmarkButton from './Bookmark.svg'
import bookmarkFillButton from './Bookmark_fill.svg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

        <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/camera" element={<Camera />} />
            <Route path="/readingList" element={<ReadingList />} />
            <Route path="*" element={<NotFound />} />
         </Routes>
         <NavBar/>
        </BrowserRouter>
      </header>
    </div>
  );
}

function NavBar() {
  let windowSize = useRef([window.innerWidth, window.innerHeight]);
  console.log("width: " + windowSize.current[0] + " height: " + windowSize.current[1])
  return (
    <nav>
      <table  style={{position: "fixed", left: (windowSize.current[0]/2 - 150) + "px", top: (windowSize.current[1] - 100) + "px"}}>
        <tr>
          <th>
            <Link to="/"><img src={homeButton} width="100" height="100" className="home-logo" alt="home"/></Link>
          </th>
          <th>
            <Link to ="/Camera"><img src={cameraButton} width="100" height="100" className="camera-logo" alt="camera"/></Link>
          </th>
          <th>
            <Link to ="/ReadingList"><img src={bookmarkButton} width="100" height="100" className="bookmark-logo" alt="bookmark"/></Link>
          </th>
        </tr>
      </table>
    </nav>
  )
}

// function Home() {
//   return <h1>Home</h1>;
// }

// function Camera() {
//   return <h1>Camera</h1>;
// }

// function ReadingList() {
//   return <h1>Reading List</h1>;
// }

function NotFound() {
  return <h1>Not Found</h1>;
}

export default App;
