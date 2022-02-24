import React, { Fragment } from 'react';
import 'Popup.css';

function Popup({ content, status }) {
	if (status) {
		return <div className="Popup">{content}</div>;
	} else {
		return <Fragment />;
	}
}
export default Popup;
