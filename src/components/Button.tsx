import React from "react";
import "./../App.css";

interface Props {
	title: string;
	onClick?: () => void;
}

const Button = ({ title, onClick }: Props) => {
	return (
		<button className="button" onClick={onClick}>
			{title}
		</button>
	);
};

export default Button;
