// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button";
import { quoteData } from "./data";

function App() {
	const maxLength = quoteData.length;
	const [quoteNumber, setQuoteNumber] = useState<number>(0);

	useEffect(() => {
		const timeoutSlideshow = setTimeout(() => {
			setQuoteNumber((prev) => (prev < maxLength - 1 ? prev + 1 : 0)); // Restart at 0 after the last quote
		}, 5000);

		return () => clearTimeout(timeoutSlideshow);
	}, [quoteNumber, maxLength]);

	const handleRestart = () => {
		setQuoteNumber(0);
		console.log(`Restarted: ${quoteNumber}`);
	};

	const handlePrevious = () => {
		if (quoteNumber > 0) {
			setQuoteNumber((prev) => prev - 1);
		}
	};

	const handleNext = () => {
		if (quoteNumber < maxLength - 1) {
			setQuoteNumber((prev) => prev + 1);
		}
	};

	return (
		<div className="container">
			<div className="buttons">
				<Button title="Restart" onClick={handleRestart} />
				<Button title="Previous" onClick={handlePrevious} />
				<Button title="Next" onClick={handleNext} />
			</div>
			<div className="slideshow-container">
				<h3>{quoteData[quoteNumber].quote}</h3>
				<h3>~{quoteData[quoteNumber].author}</h3>
			</div>
		</div>
	);
}

export default App;
