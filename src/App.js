import AccountPage from "./Account/AccountPage";
import SubscriptionsPage from "./subscriptionsPage/SubscriptionsPage";
import users from "./datamock.json";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">All Subscriptions</Link>
        <Link to="/account">Account</Link>
      </nav>
      <Routes>
        <Route path="/" element={<SubscriptionsPage />}></Route>
        <Route
          path="/account"
          element={<AccountPage user={users[0]} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
