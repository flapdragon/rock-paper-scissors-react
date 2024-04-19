import { Link } from 'react-router-dom'
import Triangle from '../images/bg-triangle.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandFist, faHand, faHandScissors } from '@fortawesome/free-solid-svg-icons'
import './Player.css'

const Player = ({ setPlayerChoice }) => {
  const handleClick = (choice) => {
    setPlayerChoice(choice)
  }

  return (
    <div className="player">
      <img src={Triangle} alt="" className="triangle" />
      <div className="items">
        <Link to="/result">
          <div
            data-id="rock"
            onClick={() => handleClick("rock")}
            className="icon icon--rock"
          >
            <FontAwesomeIcon icon={faHandFist} size="4x" onClick={() => handleClick("rock")} />
          </div>
        </Link>
        <Link to="/result">
          <div
            data-id="paper"
            onClick={() => handleClick("paper")}
            className="icon icon--paper"
          >
            <FontAwesomeIcon icon={faHand} size="4x" onClick={() => handleClick("paper")} />
          </div>
        </Link>
        <Link to="/result">
          <div
            data-id="scissors"
            onClick={() => handleClick("scissors")}
            className="icon icon--scissors"
          >
            <FontAwesomeIcon icon={faHandScissors} size="4x" onClick={() => handleClick("scissors")} />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Player