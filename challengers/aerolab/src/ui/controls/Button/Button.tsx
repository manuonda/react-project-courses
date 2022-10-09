import { colors } from '@material-ui/core';
import React from 'react';

import styles from "./Button.module.css";



export interface ButtonInterface extends React.ButtonHTMLAttributes<HTMLButtonElement>{
	colorScheme?: "primary" | "secondary"
}

const Button : React.FC<ButtonInterface> = ({ colorScheme = 'secondary', children,...props}) => {
	return <button className={`${styles.container} ${styles[colorScheme]}`} {...props}>{children}</button>;
};

export default Button;
