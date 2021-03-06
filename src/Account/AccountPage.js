import './AccountPage.css';
import visaLogo from '../visa-logo.png';
import masterLogo from '../mc-logo.png';
import Header from '../subscriptionsPage/Header';

function AccountPage({ user }) {
	const openMySubscription = () => {
		console.log('Open subscription');
	};

	const saveInfo = () => {
		console.log('Save info');
	};

	return (
		<div className="AccountPage">
			<Header />
			<h1 className="title">Your Info.</h1>
			<form action="" onSubmit={(e) => e.preventDefault()}>
				<div className="plan">
					<p>You are on </p>
					<span className="vegan btn">{user.subscription.plan}</span>
					<p> Plan.</p>
					<button className="btn" onClick={openMySubscription}>
						VIEW MY SUBSCRIPTION
					</button>
				</div>

				<p className="username mb4">
					Your <b>ID</b> is {user.username}.
				</p>
				<div className="password">
					<p>
						<b data-cy="password-text">PASSWORD</b> {`is `}
						<span className="input-wrapper pt1p5 ml mt4">
							<label className="label">Password</label>
							<input type="password" placeholder="Password" value={user.password} className="ac-input" />
						</span>
					</p>
				</div>

				<div className="address">
					<p>
						<b data-cy="address-text">ADDRESS</b> is
					</p>
					<div className="address-inputs ml">
						<span className="input-wrapper block pt1 mb">
							<label className="label">Flat No.</label>
							<input
								type="text"
								placeholder="Flat no."
								className="address-input ac-input"
								value={user.address.flatNo}
							/>
						</span>
						<span className="input-wrapper block pt1 mb">
							<label className="label">Street name</label>
							<input
								type="text"
								placeholder="Street name"
								className="address-input ac-input"
								value={user.address.streetName}
							/>
						</span>
						<span className="input-wrapper block pt1 mb">
							<label className="label">City</label>
							<input
								type="text"
								placeholder="City"
								className="address-input ac-input"
								value={user.address.city}
							/>
						</span>
						<span className="input-wrapper block pt1 mb">
							<label className="label">Post code</label>
							<input
								type="text"
								placeholder="Post code"
								className="address-input ac-input"
								value={user.address.postcode}
							/>
						</span>
					</div>
				</div>
				<div className="card-info">
					<p className="mr">
						<b data-cy="card-text">Card No.</b> {`is `}
					</p>
					<span className="input-wrapper pt1">
						<label className="label">Card No.</label>
						<input type="text" placeholder="No." className="ac-input" value={user.payment.cardNo} />
					</span>
					{user.payment.cardOption === 'visa' ? (
						<img className="card-logo ml" src={visaLogo} alt="" />
					) : (
						<img className="card-logo ml" src={masterLogo} alt="" />
					)}
				</div>
				<div className="next-payment mt4 mb">
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
