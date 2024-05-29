import React from "react";
import homeFillButton from "../Home_fill.svg";
import { version } from "react";

const Home = () => {
    // let homeButton = document.getElementsByClassName("home-logo")
    // homeButton.src = homeFillButton
    console.log(version);

    return (
        <div>
            <h1>Welcome to ScanLater</h1>
            <h2>Please use the camera tab to take a clear picture of the text you want translated, wait a second, then use the translate button to recieve your translated text.</h2>
        </div>
    );
};



export default Home;