import AccountPage from './Account/AccountPage';
import users from './datamock.json';
import './Normalize.css';

function App() {
	return (
		<div className="App">
			<AccountPage user={users[0]} />
		</div>
	);
}

export default App;
