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
	const [disabled, setDisabled] = useState({
		restart: false,
		next: false,
		previous: false,
	});

	useEffect(() => {
		const timeoutSlideshow = setTimeout(() => {
			setQuoteNumber((prev) => {
				const nextQuote = prev < maxLength - 1 ? prev + 1 : maxLength - 1; // Restart at 0 after last quote
				setDisabled({
					restart: nextQuote === 0,
					next: nextQuote === maxLength - 1,
					previous: nextQuote < 0,
				});
				console.log(nextQuote, "is next quote");
				return nextQuote;
			});
		}, 3000);

		return () => clearTimeout(timeoutSlideshow);
	}, [quoteNumber, maxLength]);

	const handleRestart = () => {
		setQuoteNumber(0);
		console.log(`Restarted: ${quoteNumber}`);
		setDisabled({ restart: true, next: false, previous: true });
	};

	const handlePrevious = () => {
		setQuoteNumber((prev) => {
			const newQuoteNumber = prev > 0 ? prev - 1 : 0;
			setDisabled({
				restart: false,
				next: false,
				previous: newQuoteNumber === 0,
			});
			return newQuoteNumber;
		});
	};

	const handleNext = () => {
		setQuoteNumber((prev) => {
			const newQuoteNumber = prev < maxLength - 1 ? prev + 1 : prev;
			setDisabled({
				restart: false,
				next: newQuoteNumber === maxLength - 1,
				previous: false,
			});
			return newQuoteNumber;
		});
	};

	return (
		<div className="container">
			<div className="buttons">
				<Button
					title="Restart"
					onClick={handleRestart}
					disabled={disabled.restart}
				/>
				<Button
					title="Previous"
					onClick={handlePrevious}
					disabled={disabled.previous}
				/>
				<Button title="Next" onClick={handleNext} disabled={disabled.next} />
			</div>
			<div className="slideshow-container">
				<h3>{quoteData[quoteNumber].quote}</h3>
				<h3>~{quoteData[quoteNumber].author}</h3>
			</div>
		</div>
	);
}

export default App;
