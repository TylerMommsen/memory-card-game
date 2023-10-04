import PropTypes from 'prop-types';

const Card = ({ image }) => {
	return (
		<>
			<div className="card">
				<img className="card-image" src={image} />
			</div>
		</>
	);
};

Card.propTypes = {
	image: PropTypes.string.isRequired,
};

export default Card;
