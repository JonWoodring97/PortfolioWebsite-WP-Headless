import React from 'react';

let About = () => {
    return (
        <div className = 'aboutpage-container'> 
            <div className = 'about-greeting'>
                <h1 className = 'page-title'> About Me </h1>
            </div>
            <div className = 'about-content'>
                <h1 className = 'section-title'> Who I am </h1>  
                <p className = 'light-text large-text'> My name is Jon Woodring. I am a web developer living in Ypsilanti, Michigan. <br></br> </p>
                <p className = 'light-text small-text'> I recently finished a full time job as a full stack software engineer and am now freelancing. <br></br></p>
                <p className = 'light-text small-text'> During the day I am working on building my freelance business, at night I work on building my own products. My most recent project is [project]</p>
            </div>
        </div>
    )
}

export default About; 