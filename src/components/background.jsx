const Background = () => {
	return (
		<>
			<div className="bg-video">
				<video autoPlay muted playsInline loop>
					<source src="/bg-vid.mp4" type="video/mp4"></source>
				</video>
			</div>
		</>
	);
};

export default Background;
