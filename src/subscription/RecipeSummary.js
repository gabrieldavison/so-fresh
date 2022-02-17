import React from "react";

const RecipeSummary = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h3>{data.title}</h3>
      {data.recipeImage ?? <img src={data.recipeImage}></img>}
      <p>{data.recipeSummary}</p>
    </div>
  );
};

export default RecipeSummary;
