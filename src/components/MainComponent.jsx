import React from "react";
import PasswordPage from "./PasswordComponent";
import EmailPage from "./EmailComponent";
import { Routes, Route } from "react-router-dom";

function Main() {
    return (
        <div px-5 py-5 className="h-screen bg-gray-100 flex flex-col items-center justify-center">
          
          <img src="src\assets\Gmail_icon_(2020).svg.png" className="logo w-50 h-60 " />
          
            <Routes>
                <Route path="/login" element={<EmailPage />} />
                <Route path="/password" element={<PasswordPage />} />
                <Route path="/" element={<EmailPage />} />	
                <Route path="*" element={<><h1>404</h1><p>Pabhaizika!</p></>} />
                           
            </Routes>

            
           
        </div>
    );
}

export default Main;