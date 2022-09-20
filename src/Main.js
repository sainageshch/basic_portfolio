import React, {Component} from "react";
import {Route,Routes,BrowserRouter,NavLink,Link,HashRouter} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import "./main.css";
import Internships from "./Internships";
import {library} from "@fortawesome/fontawesome-svg-core";
import { createRoot } from 'react-dom/client';
import{
    fab,
    faTwitterSquare,
    faFacebook,
    faLinkedin,
    faGithub,
    faInstagram

} from "@fortawesome/free-brands-svg-icons";
library.add(fab, faTwitterSquare,
    faFacebook,
    faLinkedin,
    faGithub,
    faInstagram);

class Main extends Component{
   render(){
        return(
            <HashRouter>
            <div>
                <div className="sai">
                <Link className="logo" to="/"><h1>Sai Nagesh C H</h1></Link>

                </div>
                
                <ul className="header">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/projects">Projects</NavLink></li>
                    <li><NavLink to="/internships">Internships</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    
                </ul>
                <div className="content">
                <Routes>
                <Route exact path="/" element={<Home/>}></Route>
                <Route  path="/Internships" element={<Internships/>}></Route>
                <Route  path="/Projects" element={<Projects/>}></Route>
                <Route  path="/About" element={<About/>}></Route>
                <Route  path="/Contact" element={<Contact/>}></Route>
                </Routes>
               
               
                </div>
            </div>
            </HashRouter>
        );
    }
}

export default Main;