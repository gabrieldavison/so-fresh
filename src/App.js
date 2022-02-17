import './App.css';
import AccountPage from './Account/AccountPage';

function App() {
	const user = {
		username: 'jennyang',
		subscription: {
			nextPayment: '13/04/2022'
		}
	};
	return (
		<div className="App">
			<AccountPage user={user} />
		</div>
	);
}

export default App;
