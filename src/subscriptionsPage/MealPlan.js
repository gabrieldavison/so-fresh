import React, { useState } from "react";
import Button from "./Button";
import "./MealPlan.css";
import { Link } from "react-router-dom";

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
      <div className="buttonContainer-K">
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
      <Link className="label-K" to="/subscription">
        {mealPlanName}
      </Link>
    </div>
  );
};

export default MealPlan;
