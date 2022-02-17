import React, { useState } from "react";
import Button from "./Button";

/*
Each Meal Plan is something like this:
{
    fruit: [link, link, link],
    veg: [link, link],
    meat: [link, link],
    dessert: [link, link],

}*/
const MealPlan = ({ mealPlanName, meals }) => {
  let [mealsIndex, setMealsIndex] = useState(0);

  const handleMealsIndex = (direction) => {
    if (direction === "right") {
      if (mealsIndex < meals.length - 1) {
        return (mealsIndex += 1);
      } else {
        return (mealsIndex = 0);
      }
    } else {
      if (mealsIndex > 0) {
        return (mealsIndex -= 1);
      } else {
        return (mealsIndex = meals.length - 1);
      }
    }
  };

  return (
    <div>
      <img
        src={meals[mealPlanName][mealsIndex]}
        alt="meal"
        width="120"
        height="120"
      />
      <h3 class="label">{mealPlanName}</h3>
    </div>
  );
};

export default MealPlan;
