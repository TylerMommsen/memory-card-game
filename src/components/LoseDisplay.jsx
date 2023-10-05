import PropTypes from 'prop-types';

const LoseDisplay = ({ handleTryAgainClick }) => {
	return (
		<>
			<div className="lose-display">
				<h3>You Lose!</h3>
				<button className="try-again-btn" onClick={handleTryAgainClick}>
					Try Again
				</button>
			</div>
		</>
	);
};

LoseDisplay.propTypes = {
	handleTryAgainClick: PropTypes.func.isRequired,
};

export default LoseDisplay;
