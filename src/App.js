import AccountPage from "./Account/AccountPage";
import users from "./datamock.json";
import SubscriptionsPage from "./subscriptionsPage/SubscriptionsPage";
import Subscription from "./subscription/Subscription";
import Recipe from "./recipe/Recipe";
import "./Normalize.css";

function App() {
  return (
    <div className="App">
      <AccountPage user={users[0]} />
    </div>
  );
}

export default App;
