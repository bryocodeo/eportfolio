import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import React from 'react';
import './styles/Main.scss';
import man from './assets/man.png';
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="main" id="home">
      <div className="mainContainer">
        <div className="mainContent">
          <div className="text">
            <p>Hey Yo! </p>
            <h1>Bryan Orense</h1>
            <p>Front-End Developer</p>

            <div className="icons">
              <Facebook className="icon" />
              <Instagram className="icon" />
              <Twitter className="icon" />
              <LinkedIn className="icon" />
            </div>

            <div className="buttons">
              <button>
                <a href="#projects">See my Work</a>
              </button>
              <button>
                <Link to={"./contact"}>Let's Talk!</Link>
              </button>
            </div>
          </div>
        </div>

        <div className="mainImg">
          <img src={man} alt="ProfilePic" />
        </div>
      </div>
    </div>
  );
}

export default Main