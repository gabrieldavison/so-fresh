import AccountPage from "./Account/AccountPage";
import SubscriptionsPage from "./subscriptionsPage/SubscriptionsPage";
import Subscription from "./subscription/Subscription";
import Recipe from "./recipe/Recipe";
import Survey from "./SurveyPage/survey.react";
import users from "./datamock.json";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./Normalize.css";

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
        <Route path="/survey" element={<Survey />}></Route>
        <Route path="/recipe" element={<Recipe />}></Route>
        <Route path="/survey" element={<Survey />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
