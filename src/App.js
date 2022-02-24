import AccountPage from "./Account/AccountPage";
import SubscriptionsPage from "./subscriptionsPage/SubscriptionsPage";
import Subscription from "./subscription/Subscription";
import users from "./datamock.json";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Survey from "./SurveyPage/survey.react";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">All Subscriptions</Link>
        <Link to="/account">Account</Link>
        <Link to="/subscription">Subscription</Link>
      </nav>
      <Routes>
        <Route path="/" element={<SubscriptionsPage />}></Route>
        <Route
          path="/account"
          element={<AccountPage user={users[0]} />}
        ></Route>
        <Route path="/subscription" element={<Subscription />}></Route>
        <Route path="/survey" element= {<Survey/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
