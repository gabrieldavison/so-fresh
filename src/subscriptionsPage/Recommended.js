import React from "react";
import SubscriptionRow from "./SubscriptionRow";

const Recommended = ({ mealPlans }) => {
  return (
    <div class="recommendationBox">
      <h2>RECOMMENDED</h2>
      <SubscriptionRow mealPlans={mealPlans} />
    </div>
  );
};

export default Recommended;
