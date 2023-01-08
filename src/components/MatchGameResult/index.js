import './index.css'

const MatchGameResult = props => {
  const {score} = props

  return (
    <div className="card-result">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy"
      />
      <h1>Your Score</h1>
      <h1>{score}</h1>
      <button type="button" className="play-again-btn">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png "
          alt="reset"
        />
        Play Again
      </button>
    </div>
  )
}

export default MatchGameResult
