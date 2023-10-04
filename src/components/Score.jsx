import PropTypes from 'prop-types';

const Score = ({ score, highScore }) => {
	return (
		<>
			<div className="score">
				<div className="current-score">Score: {score}</div>
				<p>|</p>
				<div className="high-score">High Score: {highScore}</div>
			</div>
		</>
	);
};

Score.propTypes = {
	score: PropTypes.number.isRequired,
	highScore: PropTypes.number.isRequired,
};

export default Score;
