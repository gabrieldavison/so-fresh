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

const SubscriptionRow = ({ mealPlans, rowIndex }) => {
  const mealPlanNames = Object.keys(mealPlans);
  return (
    <div className="row-K">
      {mealPlanNames.map((mealPlanName, index) => {
        return (
          <MealPlan
            mealPlanName={mealPlanName}
            meals={mealPlans}
            mealIndex={index}
            rowIndex={rowIndex}
          />
        );
      })}
    </div>
  );
};

export default SubscriptionRow;
