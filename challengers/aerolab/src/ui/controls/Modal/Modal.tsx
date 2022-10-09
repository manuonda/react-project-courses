import React from 'react';
import styles from "./Modal.module.scss";

export interface ModalInterface {
	 onClose: VoidFunction;
}

const Modal : React.FC<ModalInterface> = ({ children, onClose }) => {
	return 
	(<section className='styles.container'>
	<b onClick={onClose}></b>
	<article>
		{children}
	</article>
	</section>);
};

export default Modal;
