import React from "react";
import data from "./data.js";
import RecipeSummary from "./RecipeSummary";

const Subscription = () => {
  console.log(data);
  return (
    <>
      <section>
        <h1>So Fresh</h1>
        {data.subscriptionImage ?? <img src={data.subscriptionImage}></img>}
        <h2>{data.subscriptionTitle}</h2>
        <p>{data.subscriptionSummary}</p>
      </section>
      <section>
        {data.recipes.map((recipe) => (
          <RecipeSummary key={recipe.title} data={recipe} />
        ))}
      </section>
    </>
  );
};
export default Subscription;
