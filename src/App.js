import logo from "./logo.svg"
import "./App.css"
import Header from "./components/Header"
import Contact from "./components/Contact"
import Skill from "./components/Skills"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Header name="ヘッダー" />
          <Skill name="スキル" />
          <Contact name="お問い合わせ" />
        </p>
      </header>
    </div>
  )
}

export default App
