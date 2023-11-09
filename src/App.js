// Importing modules
import React, {  useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainMenu from "./Home";
import Live from './live';
import Nav from './Nav';
import CovidWorld from "./CheckBox_world";

function App() {
    return (
        <div>
             <Nav />
            <Routes>
                <Route path="/live" element={<Live />}></Route>
                <Route path="/" element={<MainMenu/>}></Route>
                <Route path="/world" element={<CovidWorld/>}></Route>
            </Routes>

        </div>
    )
};
    export default App;