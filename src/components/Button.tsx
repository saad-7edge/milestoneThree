import React from "react";
import "./../App.css";

interface Props {
	title: string;
	onClick?: () => void;
	disabled?: boolean;
}

const Button = ({ title, onClick, disabled }: Props) => {
	return (
		<button className="button" disabled={disabled} onClick={onClick}>
			{title}
		</button>
	);
};

export default Button;
