import React from "react";
import {useRef, useState, useEffect} from 'react';
// import axios from "axios";

import bookmarkFillButton from '../Bookmark_fill.svg'

//const express = require('express');
//const mongoose = require('mongoose');

// const app = express();

// mongoose.connect('mongodb+srv://emmanuelsuberu:es123456@bennwebprog.okxyn6m.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error('Could not connect to MongoDB', err));

// app.listen(3000, () => console.log('Server is running on port 3000'));
// In your React application, you would then use a library like axios or the built-in fetch API to make HTTP requests to this server. Here's a basic example:
// import axios from 'axios';

// axios.get('http://localhost:3000/my-endpoint')
//   .then(response => {
//     // Do something with the data
//     console.log(response.data);
//   })
//   .catch(error => {
//     // Handle the error
//     console.error(error);
//   });

const ReadingList = () => {
    let windowSize = useRef([window.innerWidth, window.innerHeight]);
    // let bookmarkButton = document.getElementsByClassName("bookmark-logo")
    // bookmarkButton.src = bookmarkFillButton

    // const [items, setItems] = useState([]);

    // useEffect(() => {
    //   axios.get("/api/items")
    //     .then(response => setItems(response.data))
    //     .catch(error => console.error(error));
    // }, []);
  
    return (
        <div>
            <header className="App-header">
            <title>Reading List</title>
            <h2 style={{position: "fixed", top: 50 + "px"}}>Currently Reading Manga</h2>
            <table style={{border:"5px double black"}}>
                <tr>
                    <th style={{border: "1px solid red"}}>Name</th>
                    <th style={{border: "1px solid red"}}>Author</th>
                    <th style={{border: "1px solid red"}}>Description</th>
                </tr>
                <tr style={{border: "5px solid black"}}>
                    <td>One Piece</td>
                    <td>Eiichiro Oda</td>
                    <td>A rubber man sets off to find the One Piece and become King of the Pirates</td>
                </tr>

                <tr style={{border: "5px solid black"}}>
                    <td>Vinland Saga</td>
                    <td>Makoto Yukimura</td>
                    <td>The son of a great viking warrior dedicates his life to searching for Vinland, a land with no violence or injustice.</td>
                </tr>

                <tr style={{border: "5px solid black"}}>
                    <td>Alice in Borderland</td>
                    <td>Haro Aso</td>
                    <td>A young man and his friends are transported to a barren country where they must participate in deadly games to survive.</td>
                </tr>
            </table>
        <ul>
      </ul>
            </header>
        </div>
    );
};

export default ReadingList;