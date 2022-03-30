import React, { useState } from "react";
import Button from "./Button";
import "./MealPlan.css";
import { Link } from "react-router-dom";
import Left from "./Pictures/noun-left-arrow-2294276.svg";
import Right from "./Pictures/noun-right-arrow-2294274.svg";

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
    <div className="container-K">
      <img
        src={meals[mealPlanName][mealsIndex]}
        className="picture-K"
        alt="meal"
        width="120"
        height="120"
      />
      <div className="buttonContainer-K">
        <Button
          onClick={() => mealsIndex > 0 && setMealsIndex((mealsIndex -= 1))}
          ImageSrc={Left}
        />
        <Button
          onClick={() =>
            mealsIndex < meals[mealPlanName].length - 1 &&
            setMealsIndex((mealsIndex += 1))
          }
          ImageSrc={Right}
        />
      </div>
      <Link to="/subscription">{mealPlanName}</Link>
    </div>
  );
};

export default MealPlan;
