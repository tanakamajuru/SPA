import React from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Login from "./LoginComponent";

import About from "./AboutComponent";
import Home from "./HomeComponent";
import { Routes, Route, Navigate } from "react-router-dom";

function Main() {
    return (
        <div>
        <Header />
            <input type="checkbox" id="toggle" className="toggle" />
            
            <input type="text" />
            <button onClick={() => { window.location.href = "/login"; }}>
               Proceed
            </button>
            {/* creating and defining routes */}
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<h1>404</h1>} />
                <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default Main;