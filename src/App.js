import './App.css';
import AccountPage from './Account/AccountPage';
import users from './datamock.json';

function App() {
	const user = users[3];

	return (
		<div className="App">
			<AccountPage user={user} />
		</div>
	);
}

export default App;
