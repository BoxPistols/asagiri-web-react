import React from "react"
import PropTypes from "prop-types"

function Contact(props) {
  return <>Contact {props.name}</>
}

Contact.propTypes = {
  name: PropTypes.string,
}

export default Contact
