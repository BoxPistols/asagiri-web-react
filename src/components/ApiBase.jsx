import React, { useState, useEffect } from "react"
import axios from "axios"

export const ApiBase = () => {
  const [data, setData] = React.useState({})

  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get(
        "https://api.github.com/users/BoxPistols"
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
