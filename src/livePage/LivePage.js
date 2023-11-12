import logo from './logo.svg';
import LiveCss from './LivePage.module.css'
import React,{ useState, useEffect } from "react";
import { BsBatteryFull,BsBatteryHalf, BsBattery} from 'react-icons/bs';
import { BiSolidAmbulance } from 'react-icons/bi';
import img1 from "./img/image1.png";
import img2 from "./img/image2.png";
import img3 from "./img/image3.png";
import img4 from "./img/image4.png";
import img5 from "./img/image5.png";


  function LivePage() {
    const backgroundArr = [img1, img2, img3, img4, img5];
    let randomIndex = localStorage.getItem('backgroundIndex');

    if (randomIndex === null) {
      randomIndex = Math.floor(Math.random() * backgroundArr.length);
      localStorage.setItem('backgroundIndex', randomIndex);
    }
    
    const backgroundImg = backgroundArr[randomIndex];
    const appStyle ={
        
      backgroundImage: `url(${backgroundImg})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
    const clockStyle ={
      fontSize: "18px",
      fontFamily: "tway_sky",
      color: "white",
    }
    const today = new Date();
    const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;
    
    const [time, setTime] = useState(new Date());
    const [data, setDate] = useState({})
    const [animatedText, setAnimatedText] = useState("");
    const [textIndex, setTextIndex] = useState(0);
    const textArray = "신종코로나바이러스\n현재현황".split("");

    useEffect(() => {

      // 1초마다 데이터 업데이트
      const intervalId = setInterval(() => {
        setTime(new Date());
        if (textIndex < textArray.length) {
          setAnimatedText((prevText) => prevText + textArray[textIndex]);
          setTextIndex((prevIndex) => prevIndex + 1);
        }
      },200);

      return () => clearInterval(intervalId);
    }, [textIndex]); //인자는 함수와 배열 2개, []에 들어있는 값이 변경되면 자동으로 브라우저가 랜더링
    const hPntCnt = "id";
    return (
        <div className={LiveCss}>
        <div style={appStyle}>
          <div className='clock'>
          <div className={LiveCss.App}>
            <div className='App text-animation'>
              {animatedText}
            </div>
            <h1 style={clockStyle}>
              마지막 업데이트: 
              <day>{formattedDate}</day>
              <span>{time.toLocaleTimeString()}</span>
            </h1>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <BsBatteryFull size={100} color='white' />
              <span style={{ marginLeft: 200 }}></span>
              <BsBatteryHalf size={100} color='white' />
              <span style={{ marginLeft: 200 }}></span>
              <BsBattery size={100} color='white' />
              <span style={{ marginLeft: 200 }}></span>
              <BiSolidAmbulance size={100} color='white' />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className={LiveCss.App} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div className={LiveCss.center}>0</div>
              <div className={LiveCss.center_down}>아니1</div>
              <span style={{ marginTop: '200px' }}></span>
            </div>
            <span style={{ marginLeft: '130px' }}></span>
            <div className={LiveCss.App} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className={LiveCss.center}>0</div>
            <div className={LiveCss.center_down}>입원</div>
              <span style={{ marginTop: '200px' }}></span>
            </div>
            <span style={{ marginLeft: '130px' }}></span>
            <div className={LiveCss.App} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className={LiveCss.center}>0</div>
              <div className={LiveCss.center_down}>입원</div>
              <span style={{ marginTop: '200px' }}></span>
            </div>
            <span style={{ marginLeft: '130px' }}></span>
            <div className={LiveCss.App} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className={LiveCss.center}>0</div>
            <div className={LiveCss.center_down}>입원</div>
              <span style={{ marginTop: '200px' }}></span>
            </div>  
            </div>
            </div>      
          </div>
          </div>
        
  );
}

export default LivePage;
