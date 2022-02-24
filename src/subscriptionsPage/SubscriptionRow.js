import React from "react";
import MealPlan from "./MealPlan";
import "./SubscriptionRow.css";

/*
Reccomendations object is something like this:
{
    fruit: [link, link, link],
    veg: [link, link],
    meat: [link, link],
    dessert: [link, link],

}*/

const SubscriptionRow = ({ mealPlans }) => {
  const mealPlanNames = Object.keys(mealPlans);
  return (
    <div className="row-K">
      {mealPlanNames.map((mealPlanName) => {
        return <MealPlan mealPlanName={mealPlanName} meals={mealPlans} />;
      })}
    </div>
  );
};

export default SubscriptionRow;
