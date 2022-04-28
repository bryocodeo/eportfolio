import React from 'react';
import proj from './assets/proj.jpg';
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
              <img src={proj} alt="" />
              <button>See Project</button>

              <Typography gutterBottom variant="h5" component="div">
                Let
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Mauris efficitur iaculis lorem, non dictum risus finibus a.
                Morbi feugiat ac nibh sed consectetur. Proin aliquam posuere
                posuere. Sed nisi purus, fermentum ut ipsum quis, mollis pretium
                risus.
              </Typography>
            </CardContent>
          </div>
          <div className="cards">
            <CardContent>
              <img src={proj} alt="" />
              <button>See Project</button>

              <Typography gutterBottom variant="h5" component="div">
                Leni
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                a purus vitae tellus elementum ullamcorper. Nunc blandit ex vel
                tellus malesuada placerat. Nam bibendum sem vel aliquet
                scelerisque. Maecenas scelerisque finibus enim.
              </Typography>
            </CardContent>
          </div>
          <div className="cards">
            <CardContent>
              <img src={proj} alt="" />
              <button>See Project</button>

              <Typography gutterBottom variant="h5" component="div">
                Lead
              </Typography>
              <Typography variant="body2" color="text.secondary">
                In hac habitasse platea dictumst. Interdum et malesuada fames ac
                ante ipsum primis in faucibus. Proin sodales lorem vehicula,
                dapibus odio id, dapibus nisl. Quisque ipsum ex, efficitur ut
                sodales vitae, bibendum sit amet ex.
              </Typography>
            </CardContent>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project