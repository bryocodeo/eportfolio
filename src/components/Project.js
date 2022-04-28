import React from 'react';
import proj from './assets/proj.jpg';
import proj1 from "./assets/proj1.jpg";
import proj2 from "./assets/proj2.jpg";
import './styles/Project.scss';
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

const Project = () => {
  return (
    <div className="container">
      <div>
        <Typography
          variant="h2"
          gutterBottom
          align="center"
          color="textPrimary"
        >
          <br />
          Projects
        </Typography>
      </div>
      <div className="projects" id="projects">
        <div className="projectSection">
          <div className="cards">
            <CardContent>
              <img src={proj1} alt="" />
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://bryocodeo.github.io/";
                }}
              >
                See Project
              </button>

              <Typography gutterBottom variant="h5" component="div">
                E-Magazine
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Mauris efficitur iaculis lorem, non dictum risus finibus a.
                Morbi feugiat ac nibh sed consectetur. Proin aliquam posuere
                posuere. Sed nisi purus, fermentum ut ipsum quis, mollis pretium
                risus. Nam bibendum sem vel aliquet scelerisque. #LiwanagSaDilim
              </Typography>
            </CardContent>
          </div>
          <div className="cards">
            <CardContent>
              <img src={proj2} alt="" />
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://github.com/bryocodeo";
                }}
              >
                See Project
              </button>

              <Typography gutterBottom variant="h5" component="div">
                E-Calculator
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                a purus vitae tellus elementum ullamcorper. Nunc blandit ex vel
                tellus malesuada placerat. Nam bibendum sem vel aliquet
                scelerisque. Maecenas scelerisque finibus enim.
                #KulayRosasAngBukas
              </Typography>
            </CardContent>
          </div>
          <div className="cards">
            <CardContent>
              <img src={proj} alt="" />
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://github.com/bryocodeo";
                }}
              >
                See Project
              </button>

              <Typography gutterBottom variant="h5" component="div">
                React-ToDo-App
              </Typography>
              <Typography variant="body2" color="text.secondary">
                In hac habitasse platea dictumst. Interdum et malesuada fames ac
                ante ipsum primis in faucibus. Proin sodales lorem vehicula,
                dapibus odio id, dapibus nisl. Quisque ipsum ex, efficitur ut
                sodales vitae, bibendum sit amet ex. #LetLeniLead
              </Typography>
            </CardContent>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project