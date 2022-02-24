import AccountPage from "./Account/AccountPage";
import SubscriptionsPage from "./subscriptionsPage/SubscriptionsPage";
import Subscription from "./subscription/Subscription";
import users from "./datamock.json";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SubscriptionsPage />}></Route>
        <Route
          path="/account"
          element={<AccountPage user={users[0]} />}
        ></Route>
        <Route path="/subscription" element={<Subscription />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
