import AccountPage from "./Account/AccountPage";
import users from "./datamock.json";

function App() {
  return (
    <body>
      <AccountPage user={users[0]} />
    </body>
  );
}

export default App;
