import React from "react";
import SubscriptionRow from "./SubscriptionRow";
import "./Recommended.css";

const Recommended = ({ mealPlans }) => {
  return (
    <div className="recommendationBox-K">
      <h2>RECOMMENDED</h2>
      <SubscriptionRow mealPlans={mealPlans} />
    </div>
  );
};

export default Recommended;
