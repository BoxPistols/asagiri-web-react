import React from "react"
import PropTypes from "prop-types"

function Skill(props) {
  return <>Skill {props.name}</>
}

Skill.propTypes = {
  name: PropTypes.string,
}

export default Skill
