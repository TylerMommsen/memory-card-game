import PropTypes from 'prop-types';

const Card = ({ image, handleImgClick }) => {
	return (
		<>
			<div className="card">
				<img className="card-image" src={image} data-name={image} onClick={handleImgClick} />
			</div>
		</>
	);
};

Card.propTypes = {
	image: PropTypes.string.isRequired,
	handleImgClick: PropTypes.func.isRequired,
};

export default Card;
