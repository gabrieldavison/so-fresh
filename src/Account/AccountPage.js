import React, { useState } from 'react';
import './AccountPage.css';
import visaLogo from '../visa-logo.png';
import masterLogo from '../mc-logo.png';

function AccountPage({ user }) {
	const openMySubscription = () => {
		console.log('Open subscription');
	};

	const saveInfo = () => {
		console.log('Save info');
	};

	return (
		<div className="AccountPage">
			<h1>Your Info.</h1>
			<form action="" onSubmit={(e) => e.preventDefault()}>
				<div className="plan">
					<p>You are on </p>
					<span className="vegan btn">{user.subscription.plan}</span>
					<p> Plan.</p>
					<button className="btn" onClick={openMySubscription}>
						VIEW MY SUBSCRIPTION
					</button>
				</div>

				<p className="username">
					Your <b>ID</b> is {user.username}.
				</p>
				<div className="password">
					<p>
						<b>PASSWORD</b> is <input type="password" placeholder="Password" value={user.password} />
					</p>
				</div>
				<div className="address">
					<p>
						<b>ADDRESS</b> is
					</p>
					<div className="address-inputs">
						<input
							type="text"
							placeholder="Flat no."
							className="address-input"
							value={user.address.flatNo}
						/>
						<input
							type="text"
							placeholder="Street name"
							className="address-input"
							value={user.address.streetName}
						/>
						<input type="text" placeholder="City" className="address-input" value={user.address.city} />
						<input
							type="text"
							placeholder="Post code"
							className="address-input"
							value={user.address.postcode}
						/>
					</div>
				</div>
				<div className="card-info">
					<p>
						<b>Card No.</b> {`is `}
					</p>
					<input type="text" placeholder="No." value={user.payment.cardNo} className="ml" />
					{user.payment.cardOption === 'visa' ? (
						<img className="card-logo ml" src={visaLogo} alt="" />
					) : (
						<img className="card-logo ml" src={masterLogo} alt="" />
					)}
				</div>
				<div className="next-payment">
					<p>
						<b>Next Payment</b> is on <span className="next-date">{user.subscription.nextPayment}</span>
					</p>
				</div>
				<button className="btn mt" onClick={saveInfo}>
					SAVE
				</button>
			</form>
		</div>
	);
}
export default AccountPage;
