import React from 'react';
import './Projects.css'

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Super from '../../images/super-information.png';
import Post from '../../images/post-it.png';
import Trending from '../../images/trending.png'
import Tune from '../../images/tune-it-up.png';

import  ReactPlayer from 'react-player'

function Projects(props) {
    return(
        <div className="Projects" id="projects">
            <h1>Projects:</h1>

            <div className="Meals">
                <a href="https://expo.io/@luisxros/projects/meals-app" target="_blank" alt="Meals" >
                    <h5>MEals App:</h5>
                </a>
                <div>
                    <ReactPlayer
                        className="project5" 
                        url="https://www.youtube.com/watch?v=OJfIAImlrEg"
                        width="350px"
                        height="200px"
                        config={{
                            youtube: {
                              playerVars: { showinfo: 1 }
                            }}}/>
                </div>

                <div className="git">
                <a href="https://github.com/luisxros/meals-app" target="_blank"> <FontAwesomeIcon icon={faGithub} /></a>
                </div>
                <p>
                A mobile application where the user can see meals,their instructions & steps on how to make them.
                </p>

            </div>

            <div className="Trending">

            <a href="https://project-trending.netlify.app/" target="_blank">
                <h5>Trending:</h5>
                <img src={Trending} className="project3" alt="Trending"/>
                </a>
              

                <div className="git">
                <a href="https://github.com/luisxros/trending-front-end" target="_blank"> <FontAwesomeIcon icon={faGithub} /></a>
                </div>

                <p>
                    Web application for users to see the latest trending movies & tv shows built in an  agile sprint.
                </p>

            </div>
            
            <div className="Post">
             <a href="https://post-it-appx.herokuapp.com/" target="_blank">
                <h5>Post-It:</h5>
                <img src={Post} className="project2" alt="Post-it"/>
            </a>
                

                <div className="git">
                <a href="https://github.com/luisxros/post-it" target="_blank"> <FontAwesomeIcon icon={faGithub} /></a>
                </div>

                <p>
                Web application with authentication for the user to share thoughts and comment on existing posts. 
                </p>
                
            </div>

            <div className="Super">
            <a href="https://super-information.vercel.app/" target="_blank">
                <h5>Super Information:</h5>
                <img src={Super} className="project1" alt="Super-Information"/>
            </a>
               

                <div className="git">
                <a href="https://github.com/luisxros/super-information" target="_blank"> <FontAwesomeIcon icon={faGithub} /></a>
                </div>

                <p>
                Web app that displays heroes and villains information using a superhero API.
                </p>

            </div>


           

            <div className="Tune">

                <a href="https://tune-it-up.netlify.app/" target="_blank">
                    <h5>Tune-it-up:</h5>
                    <img src={Tune} className="project4" alt="Tune-it-up"/>
                </a>
              
                <div className="git">
                    <a href="https://github.com/luisxros/tune-it-up-frontend" target="_blank"> <FontAwesomeIcon icon={faGithub} /></a>
                </div>

                <p>
                A group collaboration where a user can use Tune It Up to keep track of and save their favorite songs 
                </p>

            </div>

        

        </div>
    );
}

export default Projects;