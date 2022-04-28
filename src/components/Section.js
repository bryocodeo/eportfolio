import React from 'react';
import './styles/Section.scss';
import me from './assets/me.png';

const Section = () => {
  return (
    <div className="section" id='section'>
      <div className="sectionContainer">
        <div className="sectionImg">
          <img src={me} alt="" />
        </div>

        <div className="sectionContent">
          <h1>Technical Skills</h1>
          <h3>PROFICIENT IN FUNDAMENTALS</h3>
          <p>FRONT-END DEVELOPMENT</p>
          <p>HTML, CSS, and JavaScript</p>
          <p>DOM Manipulation</p>
          <p>React</p>
          <p>MySQL</p>
        </div>
      </div>
    </div>
  );
}

export default Section