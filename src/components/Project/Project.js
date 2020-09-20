import React from "react";
import PropTypes from "prop-types";

function Project({ title, description, skills }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{skills}</p>
      <p>{description}</p>
    </div>
  );
}

Project.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  skills: PropTypes.array,
};

export default Project;
