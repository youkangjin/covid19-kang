import './App.css';
import { useEffect, useState, useRef} from 'react';
import { Route,Routes,useNavigate } from 'react-router-dom';
import Live from './live';
import World from './CheckBox_world';
import Home from './Home';

function App() {
  const [data, setData] = useState({
    name:"",
    age:0,
    date:"",
    programming:""
  })
  const navigate=useNavigate();

  const [checkAnim, setCheckAnim] = useState(true);

  const menuBtn = useRef();  //빈 참조변수 생성
  const sub1Btn = useRef();
  const sub2Btn = useRef();
  const sub3Btn = useRef();
  const M1Text=useRef();
  const M2Text=useRef();
  const M3Text=useRef();
  const blurPage=useRef();

  const clickMenu = () => {
    if(sub1Btn.current.style.display=='block'){
    sub1Btn.current.classList.remove("appear");
    sub1Btn.current.classList.add("disappear");
    sub2Btn.current.classList.remove("appear");
    sub2Btn.current.classList.add("disappear");
    sub3Btn.current.classList.remove("appear");
    sub3Btn.current.classList.add("disappear");
    }else{
      sub1Btn.current.classList.remove("disappear");
      sub1Btn.current.classList.add("appear");
      sub2Btn.current.classList.remove("disappear");
      sub2Btn.current.classList.add("appear");
      sub3Btn.current.classList.remove("disappear");
      sub3Btn.current.classList.add("appear");
      sub1Btn.current.style.display='block'; //ref={}로 참조한 요소 변서에 담기
      sub2Btn.current.style.display='block';
      sub3Btn.current.style.display='block';
      blurPage.current.style.display='block';
    setCheckAnim(true);
    }
  };


  const clicksub1 = () => {
    clickMenu();
    navigate('/live');
   
  };
  const clicksub2 = () => {
    clickMenu();
    navigate('/World');
  };
  const clicksub3 = () => {
    clickMenu();
    navigate('/');
  };

  const animSub1 = () => {      //animation 종료시 실행
    if( checkAnim ){
      setCheckAnim(false);
    }else{
      sub1Btn.current.style.display='none'; //ref={}로 참조한 요소 변서에 담기
      sub2Btn.current.style.display='none';
      sub3Btn.current.style.display='none';
      blurPage.current.style.display='none';
      setCheckAnim(true);
    }
  }

  const detailSub1 = () => {              // 서브메뉴 :hover
    if( M1Text.current.style.display=="block"){
      M1Text.current.style.display="none";
    }else{
      M1Text.current.style.display="block";
    }
  }
  const detailSub2 = () => {              // 서브메뉴 :hover
    if( M2Text.current.style.display=="block"){
      M2Text.current.style.display="none";
    }else{
      M2Text.current.style.display="block";
    }
  }
  const detailMain = () => {              // 서브메뉴 :hover
    if( M3Text.current.style.display=="block"){
      M3Text.current.style.display="none";
    }else{
      M3Text.current.style.display="block";
    }
  }
  

  useEffect(() => {
    //플라스크 서버로 api를 찾아서 데이터 조회 및 수정
    fetch("/data").then((res)=>{ //플라스크에 data라는 url 있어야함
      setData({
        name:data.name,
        age:data.age,
        date:data.date,
        programming:data.programming
      })
    })
  }, []) //인자는 함수와 배열 2개, []에 들어있는 값이 변경되면 자동으로 브라우저가 랜더링
  
  return (
    <div>
      <input type="button" id="menu" value="Menu" ref={menuBtn} onClick={clickMenu}></input>
      <input type="button" className="submenu1 disappear" ref={sub1Btn} onClick={clicksub1} onMouseEnter={detailSub1} onMouseLeave={detailSub1} onAnimationEnd={animSub1}></input>
      <input type="button" className="submenu2 disappear" ref={sub2Btn} onClick={clicksub2} onMouseEnter={detailSub2} onMouseLeave={detailSub2} onAnimationEnd={animSub1}></input>
      <input type="button" className="submenu3 disappear" ref={sub3Btn} onClick={clicksub3} onMouseEnter={detailMain} onMouseLeave={detailMain} onAnimationEnd={animSub1}></input>
      <div id="M1Text" ref={M1Text}>Covid-19 Live</div>
      <div id="M2Text" ref={M2Text}>Covid-19 World</div>
      <div id="M3Text" ref={M3Text}>Main</div>
      <div id="blur" ref={blurPage} onClick={clickMenu}></div>

      <Routes>
          <Route path="/live" element={<Live />}></Route>
          <Route path="/world" element={<World />}></Route>
          <Route path="/" element={<Home />}></Route>
      </Routes>
      
    </div>
    );
}


export default App;