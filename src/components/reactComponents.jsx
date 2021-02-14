import React from "react";
import "../reactComponents.css";
import Candidates from "./candidates";
import HttpComponent from "./httpComponent";

const ReactComponents = () => {
  return (
    <div>
      <h2 className="heading">Cool React Components!</h2>
      <p className="comp-intro-2">
        Your job is hard! Keeping track of all of the resumes can be a pain!
        This Component is here to help! Sort by expertise to find the best
        candidate!
      </p>
      <Candidates></Candidates>
    </div>
  );
};

export default ReactComponents;
