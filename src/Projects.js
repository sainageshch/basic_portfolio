import React,{Component} from "react";
import ReactDOM from "react-dom/client";
import "./Projects.css"
class Projects extends Component{
    render(){
        return(
            <div>
                
               <div className="projects"> <a href="https://github.com/sainageshch/dbms_mini_project">
                <h1>IPL Management System</h1></a>
                </div>
                <p>-Created a full functional IPL management system. 
<br></br>-Functional focus on – creation of user and admin account, scheduling matches, creating, deleting and updating players details, displaying players and team ranks.
<br></br>-Database and SQL is used at the backend to store  all the data.
<br></br>-All records are accurately saved in .CSV files.  </p>
<a href="https://github.com/sainageshch/cg_mini_project"><h1>Walking Robot using OpenGL</h1></a>
                <p>-Created a Robot body structure with different shapes. 
<br></br>-The Robot can walk, stand, run, comeback to its initial position with reset option and an exit option to end the terminal. 
<br></br>-All these functions are used with the help of drop down menu.
<br></br>-Used key board  functions to control the directions of robot walking using arrow keys. 
</p>
            </div>
        )
    }
}

export default Projects;