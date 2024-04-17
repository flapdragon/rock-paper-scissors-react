import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router'
import Header from './header/Header'
import Player from './player/Player'
import Result from './result/Result'
import Footer from './footer/Footer'
import './App.css'

function App() {
  const [ score, setScore ] = useState(0)
  const [ playerChoice, setPlayerChoice ] = useState("")

  // Get score from local storage
  useEffect(() => {
    const scoreLS = JSON.parse(localStorage.getItem('score'))
    if (scoreLS) {
      setScore(scoreLS)
    }
  }, [])

  // Set score in local storage
  useEffect(() => {
    localStorage.setItem('score', JSON.stringify(score))
  }, [score])

  return (
    <div className="container">
      <Header score={score} />
      <Routes>
        <Route path="/" element={<Player setPlayerChoice={setPlayerChoice} />}></Route>
        <Route path="/result" element={<Result playerChoice={playerChoice} score={score} setScore={setScore} />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
