import './Header.css'

const Header = ({ score }) => {
  return (
    <div className="header">
      <div className="header-text">
        <span>Rock&nbsp;</span>
        <span>Paper&nbsp;</span>
        <span>Scissors&nbsp;</span>
      </div>
      <div className="score-box">
        <span>Score</span>
        <div className="score-box__score">{score}</div>
      </div>
    </div>
  )
}

export default Header 