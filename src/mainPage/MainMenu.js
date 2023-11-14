import MainMenuCss from "./MainMenu.module.css";
import React from 'react'
import video from '../../src/backVideo.mp4'
import BarChart from "../components/BarChart";


const MainMenu = () => {
  const CovidWorldClick = () => {
    window.location.href = '/world';
  }
  const BarChart = () => {
    window.location.href = '/chart';
  }
  return (
    
    <div className={MainMenuCss}>
      <video autoPlay loop muted>
        <source src={video} type='video/mp4' />
      </video>
      <h1 className={MainMenuCss.h1}>
      Covid-19 감염 현황
      </h1>
      <div className={MainMenuCss.frame}>
        <button className={`${MainMenuCss.button} ${MainMenuCss["custom-btn"]} ${MainMenuCss["btn-2"]}`}onClick={BarChart}>챠트 그리기</button>
        <button className={`${MainMenuCss.button} ${MainMenuCss["custom-btn"]} ${MainMenuCss["btn-2"]}`}onClick={CovidWorldClick}>Covid-19 World</button>
      </div>
    </div>
  )
}

export default MainMenu