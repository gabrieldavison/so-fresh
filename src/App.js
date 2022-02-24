import AccountPage from "./Account/AccountPage";
import SubscriptionsPage from "./subscriptionsPage/SubscriptionsPage";
import Subscription from "./subscription/Subscription";
import Recipe from "./recipe/Recipe";
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
        <Route path="/recipe" element={<Recipe />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
