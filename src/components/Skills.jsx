import React from "react"
import PropTypes from "prop-types"
import { useEffect, useState } from "react"
import axios from "axios"

function Skill(props) {
  const [languageList, setLanguageList] = useState([])
  console.log(languageList)

  useEffect(() => {
    // 非同期でデータを取得 TODO: 100以上 over 1handred repos API
    axios
      .get("https://api.github.com/users/BoxPistols/repos?per_page=100")
      .then((response) => {
        // dataから、言語リストを配列で入れる
        const languageList = response.data.map((res) => res.language)
        // 引数でそのままカウント関数に渡す
        const countedLanguageList = generateLanguageCountObj(languageList)
        setLanguageList(countedLanguageList)
      })
  }, [])

  // 全ての言語
  const generateLanguageCountObj = (allLanguageList) => {
    // 整形処理 null以外
    const notNullLanguageList = allLanguageList.filter(
      (language) => language != null
    )
    //重複を省いた新たな配列の生成
    const uniqueLanguageList = [...new Set(notNullLanguageList)]
    // ユニークな言語リスト 評価する
    return uniqueLanguageList.map((item) => {
      return {
        language: item,
        // 言語の数の計算 ex. ['JavaScript', 'JavaScript', ...]
        count: allLanguageList.filter((language) => language === item).length,
      }
    })
  }

  const converseCountToPercentage = (count) => {
    if (count > 10) {
      return <span className="big">95</span>
    }
    return count * 10
  }

  return (
    <>
      <div id="skills">
        <div className="container">
          <div className="heading">
            <h2>Skills</h2>
            <ul>
              {languageList.map((item, index) => (
                <li key={index} className="description">
                  {index + 1}: {item.language} /{" "}
                  <b>{converseCountToPercentage(item.count)} %</b>
                </li>
              ))}
            </ul>
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
