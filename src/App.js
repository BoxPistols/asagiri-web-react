import React from "react"
import Header from "./components/Header"
import Contact from "./components/Contact"
import Skill from "./components/Skills"
import "./App.css"

function App() {
  return (
    <React.StrictMode>
      <div className="App">
        <Header name="ヘッダー" />
        <Skill name="スキル" />
        <Contact name="お問い合わせ" />
      </div>
    </React.StrictMode>
  )
}

export default App
