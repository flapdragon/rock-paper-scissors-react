import { useState } from 'react'
import { Routes, Route } from 'react-router'
import Header from './header/Header'
import Player from './player/Player'
import Result from './result/Result'
import Footer from './footer/Footer'

function App() {
  const [ score, setScore ] = useState(0)
  const [ playerChoice, setPlayerChoice ] = useState("")

  return (
    <div>
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
