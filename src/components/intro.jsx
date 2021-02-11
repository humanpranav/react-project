import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import profile from "../profile.jpg";

class Intro extends Component {
  state = {};
  render() {
    return (
      <div>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src={profile} alt="profile" className="profile-img"></img>
            <div className="banner-text">
              <h1>Front End Developer. Designer.</h1>
              <hr />
              <p>
                Passionate about React, Javascript, HTML, CSS, Java and MongoDB.
              </p>
              <div className="social-links">
                <a
                  href="https://www.youtube.com/channel/UCUcfyOW1gHxRnPEm2uIrhKQ"
                  target="_blank"
                >
                  <i class="fa fa-youtube" aria-hidden="true"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/pranavaroraabout/"
                  target="_blank"
                >
                  <i class="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href="https://github.com/humanpranav" target="_blank">
                  <i class="fa fa-github" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Intro;
