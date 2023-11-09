// Importing modules
import React, {  useState, useEffect, Component } from "react";
import "./App.css";
import { useNavigate, Routes, Route, BrowserRouter as Router } from "react-router-dom";
import MainMenu from "./Home";
import CovidWorld from "./CovidWorld";

function App() {
    return (
        <div className="App">
            <Router>
            <Routes>
                <Route path="/" element={<MainMenu/>}></Route>
                <Route path="/covid" element={<CovidWorld/>}></Route>
            </Routes>
            </Router>
        </div>
    )
};
    export default App;