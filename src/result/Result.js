import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Result = ({ playerChoice, score, setScore }) => {
  const [ computerChoice, setComputerChoice ] = useState("")
  const [ result, setResult ] = useState("")
  const [ counter, setCounter ] = useState(1)

  const newComputerPick = () => {
    const choices = [ 'rock', 'paper', 'scissors' ]
    const index = Math.floor(Math.random() * 3)
    console.log(choices, index)
    setComputerChoice(choices[index])
  }

  useEffect(() => {
    newComputerPick()
  }, [computerChoice])

  const getGameResult = () => {
    console.log(playerChoice, computerChoice)
    if (playerChoice === 'rock' && computerChoice === 'scissors') {
      setResult('win')
      setScore(score + 1)
    }
    else if (playerChoice === 'rock' && computerChoice === 'paper') {
      setResult('lose')
      setScore(score - 1)
    }
    else if (playerChoice === 'paper' && computerChoice === 'scissors') {
      setResult('lose')
      setScore(score - 1)
    }
    else if (playerChoice === 'paper' && computerChoice === 'rock') {
      setResult('win')
      setScore(score + 1)
    }
    else if (playerChoice === 'scissors' && computerChoice === 'paper') {
      setResult('win')
      setScore(score + 1)
    }
    else if (playerChoice === 'scissors' && computerChoice === 'rock') {
      setResult('lose')
      setScore(score - 1)
    }
    else {
      setResult('draw')
    }
  }

  useEffect(() => {
    const timer =
      counter <= 3
        ? setInterval(() => {
          setCounter(counter + 1)
        }, 1000)
        : getGameResult()

    return () => {
      clearInterval(timer)
    }
  }, [counter])

  // TODO: remove this
  const handleClick = () => {
    console.log("handleClick")
    setScore(score + 1)
  }

  return (
    <div>
      <h1>{playerChoice}</h1>
      <h1>{computerChoice}</h1>
      <h1>{result}</h1>
      <button onClick={handleClick}>You Win</button>
      <Link to="/">
        Play Again
      </Link>
    </div>
  )
}

export default Result