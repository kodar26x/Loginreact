// import { Component } from "react";
import {Route, Routes } from "react-router-dom";
import EditPost from "../card/edit";
import Dashboard from "../dasboard/Dashboard";
import Imagedragon from "../inputgambar/inputimg";
import Login1 from "../login2/login2";
// import Nabur from "../navbar/Navbar";
import Register from "../registrasi/registrasi";
import Homepage from "../homepage/homepage";

function Cobaaja () {
    return (
    
        
            <Routes>

                <Route path="/edit/:id" element={<EditPost/>}/>
                <Route path="/Login" element={<Login1/>}/>
                <Route path="/" element={<Homepage/>}/>

                <Route path="/image" element={<Imagedragon  />}/>
                <Route path="/register"element={<Register/>} />
                <Route path='/Dashboard' element={<Dashboard />}/> 
            </Routes>
    
    );
}

export default Cobaaja;