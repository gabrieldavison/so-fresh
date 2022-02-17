import React from 'react';
import './AccountPage.css';

function AccountPage({ user }) {
	return (
		<div className="AccountPage">
			<h1>Your Info.</h1>
			<form action="">
				<div className="plan">
					<p>You are on </p>
					<button className="heavy-meat btn">Heavy meat</button>
					<p> Plan.</p>
				</div>
				<p className="username">
					Your <b>ID</b> is {user.username}.
				</p>
				<div className="password">
					<p>
						<b>PASSWORD</b> is <input type="password" placeholder="Password" />
					</p>
				</div>
				<div className="address">
					<p>
						<b>ADDRESS</b> is
					</p>
					<div className="address-inputs">
						<input type="text" placeholder="Flat no." className="address-input" />
						<input type="text" placeholder="Street name" className="address-input" />
						<input type="text" placeholder="City" className="address-input" />
					</div>
				</div>
				<div className="card-info">
					<p>
						<b>Card No.</b> {`is `}
					</p>
					<input type="text" placeholder="No." />
					<span class="card-option">VISA</span>
				</div>
				<div className="next-payment">
					<p>
						<b>Next Payment</b> is on <span className="next-date">{user.subscription.nextPayment}</span>
					</p>
					<button className="btn">CANCEL</button>
				</div>
				<button className="btn mt">SAVE</button>
			</form>
		</div>
	);
}
export default AccountPage;
