import React,{Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./Contact.css";
class Contact extends Component{
    render(){
        return(
            <div>
                <h2>My contact details</h2>
                <br></br>
               
                <FontAwesomeIcon icon={["fab","instagram"]} size="2x"/>
                <a href="https://www.instagram.com/sai._.nagesh"
                style={{
                    textShadow:"0 1px 0 rgba(0,0,0,0.1)",
                    margin:"0rem 2rem 0rem 0.5rem",
                    textDecoration:"none",
                    color:"#ced4ea"

                }}>Instagram</a>

<FontAwesomeIcon icon={["fab","linkedin"]} size="2x"/>
                <a href="https://www.linkedin.com/in/sainageshch"
                style={{
                    textShadow:"0 1px 0 rgba(0,0,0,0.1)",
                    margin:"0rem 2rem 0rem 0.5rem",
                    textDecoration:"none",
                    color:"#ced4ea"

                }}>Linkedin</a>

<FontAwesomeIcon icon={["fab","github"]} size="2x"/>
                <a href="https://www.github.com/sainageshch"
                style={{
                    textShadow:"0 1px 0 rgba(0,0,0,0.1)",
                    margin:"0rem 2rem 0rem 0.5rem",
                    textDecoration:"none",
                    color:"#ced4ea"

                }}>Github</a>
            </div>
        )
    }
}
export default Contact;