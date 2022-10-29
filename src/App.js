import "./App.css"
import Header from "./components/Header"
import Contact from "./components/Contact"
import Skill from "./components/Skills"

function App() {
  return (
    <div className="App">
      <Header name="ヘッダー" />
      <Skill name="スキル" />
      <Contact name="お問い合わせ" />
    </div>
  )
}

export default App
