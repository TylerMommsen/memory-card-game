import PropTypes from 'prop-types';
import Tilt from 'react-parallax-tilt';

const Card = ({ image, handleImgClick }) => {
	return (
		<>
			<Tilt
				perspective={500} // Adjust the perspective for 3D effect
				scale={1.01} // Adjust the scaling of the element
				tiltMaxAngleX={6} // Maximum tilt angle on the X-axis
				tiltMaxAngleY={6} // Maximum tilt angle on the Y-axis
			>
				<div className="card animate">
					<img className="card-image" src={image} data-name={image} onClick={handleImgClick} />
				</div>
			</Tilt>
		</>
	);
};

Card.propTypes = {
	image: PropTypes.string.isRequired,
	handleImgClick: PropTypes.func.isRequired,
};

export default Card;
