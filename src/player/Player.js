import { Link } from 'react-router-dom'
import Triangle from '../images/bg-triangle.svg'
import './Player.css'

const Player = ({ setPlayerChoice }) => {
  const handleClick = (e) => {
    setPlayerChoice(e.target.dataset.id)
  }

  return (
    <div className="player">
      <img src={Triangle} alt="" className="triangle" />
      <div className="items">
        <Link to="/result">
          <div
            data-id="rock"
            onClick={handleClick}
            className="icon icon--rock"
          >
          </div>
        </Link>
        <Link to="/result">
          <div
            data-id="paper"
            onClick={handleClick}
            className="icon icon--paper"
          >
          </div>
        </Link>
        <Link to="/result">
          <div
            data-id="scissors"
            onClick={handleClick}
            className="icon icon--scissors"
          >
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Player