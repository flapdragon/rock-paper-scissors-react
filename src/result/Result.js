import { Link } from 'react-router-dom'

const Result = ({ playerChoice, score, setScore }) => {
  const handleClick = () => {
    console.log("handleClick")
    setScore(score + 1)
  }
  return (
    <div>
      <h1>{playerChoice}</h1>
      <button onClick={handleClick}>You Win</button>
      <Link to="/">
        Play Again
      </Link>
    </div>
  )
}

export default Result