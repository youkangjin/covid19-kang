// Importing modules
import React, {  useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Live from './live';
import MainMenu from "./mainPage/MainMenu";
import CovidWorld from "./components/CovidWorld";
import BarChart from "./components/BarChart";
function App() {
    return (
        <div className="App">
            
            <Routes>
                <Route path="/live" element={<Live />}></Route>
                <Route path="/" element={<MainMenu/>}></Route>
                <Route path="/world" element={<CovidWorld/>}></Route>
                <Route path="/chart" element={<BarChart/>}></Route>
            </Routes>

        </div>
    )
};
    export default App;