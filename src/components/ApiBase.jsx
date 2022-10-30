import React, { useState, useEffect } from "react"
import axios from "axios"

export const ApiBase = () => {
  const [data, setData] = React.useState({})

  const id = process.env.REACT_APP_ID_NAME
  const key = process.env.REACT_APP_KEY_NAME

  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get(
        `https://api.github.com/users/BoxPistols?client_id=${id}&client_secret=${key}`
      )
      setData(response.data)
    }
    getUser()
  }, [])

  return (
    <>
      <div className="test">
        <div>
          <p>name: {data.name}</p>
          <p>public_repos: {data.public_repos}</p>
          <p>company: {data.company}</p>
        </div>
      </div>
    </>
  )
}
