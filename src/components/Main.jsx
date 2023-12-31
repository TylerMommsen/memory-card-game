import Card from './Card';
import Score from './Score';
import WinDisplay from './WinDisplay';
import LoseDisplay from './LoseDisplay';
import { useCallback, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

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

const allImgs = [car1, car2, car3, car4, car5, car6, car7, car8, car9, car10, car11, car12];

const Main = () => {
	const [score, setScore] = useState(0);
	const [highScore, setHighScore] = useState(0);
	const [cards, setCards] = useState([]);
	const [clickedCards, setClickedCards] = useState([]);

	const handleImgClick = useCallback(
		(e) => {
			const imageName = e.target.getAttribute('data-name');

			// lose condition
			if (clickedCards.includes(imageName)) {
				document.querySelector('.lose-display').style.display = 'flex';
				document.querySelector('.dark-overlay').style.display = 'block';
			} else {
				const newScore = score + 1;
				if (newScore > highScore) setHighScore(newScore);
				setScore(newScore);

				// win condition
				if (newScore === allImgs.length) {
					document.querySelector('.win-display').style.display = 'flex';
					document.querySelector('.dark-overlay').style.display = 'block';
					return;
				}

				const updatedClickedCards = [...clickedCards, imageName];
				setClickedCards(updatedClickedCards);
			}
		},
		[score, highScore, clickedCards]
	);

	const shuffleCards = useCallback(() => {
		// add atleast 1 card that hasn't been clicked yet
		const addUnclickedImage = (images) => {
			let done = false;
			while (!done) {
				const randomIndex = Math.floor(Math.random() * allImgs.length);
				if (
					!clickedCards.includes(allImgs[randomIndex]) &&
					!images.includes(allImgs[randomIndex])
				) {
					done = true;
					const imageIndexToReplace = Math.floor(Math.random() * images.length);
					let newImages = images;
					newImages.splice(imageIndexToReplace, 1, allImgs[randomIndex]);
					return newImages;
				}
			}
		};

		// Fisher-Yates shuffle algorithm
		for (let i = allImgs.length - 1; i >= 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[allImgs[i], allImgs[j]] = [allImgs[j], allImgs[i]];
		}

		// select random 5 shuffled images
		const randomStartPoint = Math.floor(Math.random() * (allImgs.length - 5));
		const endPoint = randomStartPoint + 5;
		let selectedImgs = allImgs.slice(randomStartPoint, endPoint);

		// check if every single card has already been clicked
		const allCardsClicked = selectedImgs.every((card) => clickedCards.includes(card));
		if (allCardsClicked) {
			selectedImgs = addUnclickedImage(selectedImgs);
		}

		// create array of card components with the images
		const cardArray = selectedImgs.map((image) => (
			<Card key={uuidv4()} image={image} handleImgClick={handleImgClick} />
		));

		return cardArray;
	}, [handleImgClick]);

	// restart game after losing
	const handleTryAgainClick = () => {
		document.querySelector('.lose-display').style.display = 'none';
		document.querySelector('.dark-overlay').style.display = 'none';
		setClickedCards([]);
		setScore(0);
	};

	useEffect(() => {
		setCards(shuffleCards());
	}, [shuffleCards]);

	return (
		<>
			<main>
				<WinDisplay />
				<LoseDisplay handleTryAgainClick={handleTryAgainClick} />
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
