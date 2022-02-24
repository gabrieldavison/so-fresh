import AccountPage from "./Account/AccountPage";
import users from "./datamock.json";
import SubscriptionsPage from "./subscriptionsPage/SubscriptionsPage";
import Subscription from "./subscription/Subscription";
import Recipe from "./recipe/Recipe";

function App() {
  const user = users[3];

  return (
    <div className="App">
      <SubscriptionsPage />
    </div>
  );
}

export default App;
