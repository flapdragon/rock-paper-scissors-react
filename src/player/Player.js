import { Link } from 'react-router-dom'

const Player = ({ setPlayerChoice }) => {
  const handleClick = (e) => {
    setPlayerChoice(e.target.dataset.id)
  }

  return (
    <div>
      <Link to="/result">
        <button data-id="rock" onClick={handleClick}>Rock</button>
        <button data-id="paper" onClick={handleClick}>Paper</button>
        <button data-id="scissors" onClick={handleClick}>Scissors</button>
      </Link>
    </div>
  )
}

export default Player