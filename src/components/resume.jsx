import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import "../resume.css";
import finalrespic from "./finalrespic.jpg";
class Resume extends Component {
  state = {};
  render() {
    return (
      <div>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src={finalrespic} alt="respic" className="respic-img"></img>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
