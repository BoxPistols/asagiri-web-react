import React from "react"
import PropTypes from "prop-types"

function Skill(props) {
  return (
    <>
      <div id="skills">
        <div className="container">
          <div className="heading">
            <h2>Skills</h2>
          </div>
          <div className="skills-container"></div>
        </div>
      </div>
    </>
  )
}

Skill.propTypes = {
  name: PropTypes.string,
}

export default Skill
