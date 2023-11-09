import MainMenuCss from "./Home.css";
import React from 'react'
import video from './backVideo.mp4'

// import { useNavigate, Routes, Route, BrowserRouter as Router } from "react-router-dom";
const MainMenu = () => {
  return (
    <div className={MainMenuCss.App}>
        <video autoPlay loop muted>
        <source src = {video} type = 'video/mp4' />
        </video>
        <h1>covid-19 감염 현황</h1>
        <div class={MainMenuCss.frame}>
            <button className={`${MainMenuCss.button} ${MainMenuCss["custom-btn"]} ${MainMenuCss["btn-2"]}`}>Covid-19 Live</button>
            <a href="/World"><button className={`${MainMenuCss.button} ${MainMenuCss["custom-btn"]} ${MainMenuCss["btn-2"]}`}>Covid-19 World</button></a>
      </div>
    </div>
  )
}

export default MainMenu