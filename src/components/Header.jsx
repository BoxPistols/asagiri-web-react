import React from "react"
import PropTypes from "prop-types"

function Header(props) {
  return <>Header {props.name}</>
}

Header.propTypes = {
  name: PropTypes.string,
}

export default Header
