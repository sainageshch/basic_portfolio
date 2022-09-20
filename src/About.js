import React,{Component} from "react";
import ReactDOM from "react-dom/client";
import "./About.css";
class About extends Component{
    render(){
        return(
           <div>
                <h2>About me</h2>
                <div className="border"></div>
                <p>Pursuing BE with a major in Computer Science Engineering. Seeking a position which requires innovative, challenging employment that will utilize my education and professional skills and offer advancement opportunity, where I can employ my skills and analytical abilities for the growth of the company, while being resourceful, flexible and loyal.</p>
            </div>
        )
    }
}
export default About;