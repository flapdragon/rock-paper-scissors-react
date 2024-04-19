import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandFist, faHand, faHandScissors } from '@fortawesome/free-solid-svg-icons'
import './Result.css'

const Result = ({ playerChoice, score, setScore }) => {
  const [ computerChoice, setComputerChoice ] = useState("")
  const [ result, setResult ] = useState("")
  const [ counter, setCounter ] = useState(1)

  const navigate = useNavigate()

  useEffect(() => {
    // If playerChoice isn't defined or if user came to this route directly
    if (!playerChoice) {
      // Redirect to home
      navigate('/')
    }
  }, [])

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
      counter < 4
        ? setInterval(() => {
          setCounter(counter + 1)
        }, 1000)
        : getGameResult()

    return () => {
      clearInterval(timer)
    }
  }, [counter])

  return (
    <div className="result">
      <div className="result__player">
        <span className="result-text">You picked:</span>
        <div className={`icon icon--${playerChoice} ${result === "win" && counter == 4 ? `icon--${playerChoice}--winner` : ""}`}>
          {playerChoice === "rock" && (
            <FontAwesomeIcon icon={faHandFist} size="6x" />
          )}
          {playerChoice === "paper" && (
            <FontAwesomeIcon icon={faHand} size="6x" />
          )}
          {playerChoice === "scissors" && (
            <FontAwesomeIcon icon={faHandScissors} size="6x" />
          )}
        </div>
      </div>
      {result === "win" && (
        <div className="result__game">
          <span className="result-text">You win</span>
          <Link to="/" onClick={() => {setComputerChoice("")}} className="play-again">
            Play Again
          </Link>
        </div>
      )}
      {result === "lose" && (
        <div className="result__game">
          <span className="result-text">You lose</span>
          <Link to="/" onClick={() => {setComputerChoice("")}} className="play-again">
            Play Again
          </Link>
        </div>
      )}
      {result === "draw" && (
        <div className="result__game">
          <span className="result-text">Draw</span>
          <Link to="/" onClick={() => {setComputerChoice("")}} className="play-again">
            Play Again
          </Link>
        </div>
      )}
      <div className="result__computer">
        <span className="result-text">The computer picked:</span>
        {counter === 4 ? (
          <div className={`icon icon--${computerChoice} ${result === "lose" ? `icon--${computerChoice}--winner` : ""}`}>
            {computerChoice === "rock" && (
              <FontAwesomeIcon icon={faHandFist} size="6x" />
            )}
            {computerChoice === "paper" && (
              <FontAwesomeIcon icon={faHand} size="6x" />
            )}
            {computerChoice === "scissors" && (
              <FontAwesomeIcon icon={faHandScissors} size="6x" />
            )}
          </div>
        ) : (
          <div className="counter">{counter}</div>
        )}
      </div>
    </div>
  )
}

export default Result