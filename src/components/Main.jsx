import Card from './Card';
import Score from './Score';
import { useEffect, useState } from 'react';

const car1 = '/card-imgs/car1.jpg';
const car2 = '/card-imgs/car2.jpg';
const car3 = '/card-imgs/car3.jpg';
const car4 = '/card-imgs/car4.jpg';
const car5 = '/card-imgs/car5.jpg';
const car6 = '/card-imgs/car6.jpg';
const car7 = '/card-imgs/car7.jpg';
const car8 = '/card-imgs/car8.jpg';
const car9 = '/card-imgs/car9.jpg';
const car10 = '/card-imgs/car10.jpg';
const car11 = '/card-imgs/car11.jpg';
const car12 = '/card-imgs/car12.jpg';

const Main = () => {
	const [score, setScore] = useState(0);
	const [highScore, setHighScore] = useState(0);
	const [cards, setCards] = useState([]);

	useEffect(() => {
		const allImgs = [
			car1,
			car2,
			car3,
			car4,
			car5,
			car6,
			car6,
			car7,
			car8,
			car9,
			car10,
			car11,
			car12,
		];

		// Fisher-Yates shuffle algorithm
		for (let i = allImgs.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[allImgs[i], allImgs[j]] = [allImgs[j], allImgs[i]];
		}

		// select the first 8 shuffled images
		const selectedImgs = allImgs.slice(0, 8);

		// create array of card components with the images
		const cardArray = selectedImgs.map((image, index) => <Card key={index} image={image} />);

		setCards(cardArray);
	}, []);

	return (
		<>
			<main>
				<div className="game-description">
					<h2>Increase your score by clicking on an image, but avoid clicking it twice!</h2>
				</div>
				<Score score={score} highScore={highScore} />
				<div className="cards">{cards}</div>
			</main>
		</>
	);
};

export default Main;
