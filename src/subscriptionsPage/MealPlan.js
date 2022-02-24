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

  return (
    <div>
      <img
        src={meals[mealPlanName][mealsIndex]}
        alt="meal"
        width="120"
        height="120"
      />
      <div className="buttonContainer">
        <Button
          onClick={() => mealsIndex > 0 && setMealsIndex((mealsIndex -= 1))}
        />
        <Button
          onClick={() =>
            mealsIndex < meals[mealPlanName].length - 1 &&
            setMealsIndex((mealsIndex += 1))
          }
        />
      </div>
      <h3 className="label">{mealPlanName}</h3>
    </div>
  );
};

export default MealPlan;
