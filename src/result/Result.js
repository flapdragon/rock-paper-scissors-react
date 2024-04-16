import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Result = ({ playerChoice, score, setScore }) => {
  const [ computerChoice, setComputerChoice ] = useState("")

  const newComputerPick = () => {
    const choices = [ 'rock', 'paper', 'scissors' ]
    const index = Math.floor(Math.random() * 3)
    console.log(choices, index)
    setComputerChoice(choices[index])
  }

  useEffect(() => {
    newComputerPick()
  }, [computerChoice])

  // TODO: remove this
  const handleClick = () => {
    console.log("handleClick")
    setScore(score + 1)
  }

  return (
    <div>
      <h1>{playerChoice}</h1>
      <h1>{computerChoice}</h1>
      <button onClick={handleClick}>You Win</button>
      <Link to="/">
        Play Again
      </Link>
    </div>
  )
}

export default Result