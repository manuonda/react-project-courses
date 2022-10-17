import React from 'react';


export interface AlertInterface {

 }

const AlertDialog: React.FC<AlertInterface> = () => {

	const handleCancel = () => {
        
	}

	const handleConfirm = () => {
	}
       

	return
	(<section>
		<button type="button" className="nes-btn is-primary" onClick={() => }>
			Open dialog
		</button>
		<dialog className="nes-dialog" id="dialog-default">
			<form method="dialog">
				<p className="title">Dialog</p>
				<p>Alert: this is a dialog.</p>
				<menu className="dialog-menu">
					<button className="nes-btn">Cancel</button>
					<button className="nes-btn is-primary">Confirm</button>
				</menu>
			</form>
		</dialog>
	</section>);
};

export default AlertDialog;
