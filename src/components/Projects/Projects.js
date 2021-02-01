import React from 'react';
import './Projects.css'
import Super from '../../images/super-information.png';
import Post from '../../images/post-it.png';
import Trending from '../../images/trending.png'
import Tune from '../../images/tune-it-up.png';

function Projects(props) {
    return(
        <div className="Projects" id="2">
            <h1>Projects:</h1>

            <div className="Super">
            <a href="https://super-information.vercel.app/" target="_blank">
                <h5>Super Information:</h5>
                <img src={Super} className="project1" alt="Super-Information"/>
            </a>
                <p>
                Web app that displays heroes and villains information using a superhero API
                </p>
            </div>

            <div className="Post">
             <a href="https://post-it-appx.herokuapp.com/" target="_blank">
                <h5>Post-It:</h5>
                <img src={Post} className="project2" alt="Post-it"/>
            </a>
                <p>
                Web application with authentication for the user to share thoughts and comment on existing posts. 
                </p>
            </div>

            <div className="Trending">

                <a href="https://project-trending.netlify.app/" target="_blank">
                    <h5>Trending:</h5>
                    <img src={Trending} className="project3" alt="Trending"/>
                </a>
                <p>
                Web application for users to see the latest trending movies & tv shows built in an  agile sprint
                </p>
            </div>

            <div className="Tune">

                <a href="https://tune-it-up.netlify.app/" target="_blank">
                    <h5>Tune-it-up:</h5>
                    <img src={Tune} className="project4" alt="Tune-it-up"/>
                </a>
                <p>
                    A Web app that combines a Rails backend with a React front end. A user can use Tune It Up to keep track of and save his, her, or their favorite songs!
                </p>
            </div>
        </div>
    );
}

export default Projects;