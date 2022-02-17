import React from "react";
import SubscriptionRow from "./SubscriptionRow";

/*
    mealPlanRows looks something like this:

    I have an array and this array contains 4 ojects (each row). 
    Each row contains 4 different meal plans. 
    The key of each meal plan is a string and the value is an array that contains the links of 7 different pictures.

    [{
        fruit: [],
        veg: []
    },{
        fruit: [],
        veg: [],
    },{
        fruit: [],
        veg: [],
    }]
*/
const SubscriptionsGrid = ({ mealPlanRows }) => {
  return (
    <div class="subscriptionGrid">
      {mealPlanRows.map((mealPlanRow) => {
        return <SubscriptionRow mealPlans={mealPlanRow} />;
      })}
    </div>
  );
};

export default SubscriptionsGrid;