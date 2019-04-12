import React from 'react';

import githubLogo from '../../assets/img/github-logo-white.png';
import './ProjectModal.css';

function ProjectModal({ content, pageNum, handleExitButtonClick }) {

  if(content.color) {
    document.body.style.setProperty('--project-color', content.color);
  } else {
    // fallback to default if a project specific color doesn't exist
    let defaultColor = window.getComputedStyle(document.body).getPropertyValue('--bg-color');
    document.body.style.setProperty('--project-color', defaultColor);
  }
  
  return (
    <div className="project-modal">
      <button className="exit" onClickCapture={handleExitButtonClick}>
        <svg version="1.1"
          x="0px" y="0px" height="0.5em" viewBox="0 0 40.5 32.8" enableBackground="new 0 0 40.5 32.8">
          <g>
            <polygon fill="#FFFFFF" points="0,32.8 13.5,32.8 27,16.4 13.5,0 0,0 13.5,16.4 	"/>
            <polygon fill="#FFFFFF" points="40.5,32.8 27,32.8 13.5,16.4 27,0 40.5,0 27,16.4 	"/>
          </g>
        </svg>
      </button>
      <h1>{content.copy.header}</h1>
      <p>{content.copy.body}</p>
      <h3>See the tech <span>stack</span></h3>
      <a href={content.links.code} target="_blank" rel="noopener noreferrer">
      <img src={githubLogo} className="github-logo" alt="github logo"/>
      </a>
      <img src={content.links.image} className="project-img" alt="screenshot of the app"/>
    </div>
  );
}

export default ProjectModal;
