import React from "react";
import data from "./data.js";
import RecipeSummary from "./RecipeSummary";

const Subscription = () => {
  return (
    <div>
      <h1>So Fresh</h1>
      <section>
        <h2>{data.subscriptionTitle}</h2>
        <div style={styles.colWrapper}>
          <div>
            <img
              style={styles.subscriptionImage}
              src={data.subscriptionImage}
            ></img>
          </div>
          <div>
            <p>{data.subscriptionSummary}</p>
          </div>
        </div>
      </section>
      <section>
        {data.recipes.map((recipe) => (
          <RecipeSummary key={recipe.title} data={recipe} />
        ))}
      </section>
    </div>
  );
};

const styles = {
  subscriptionImage: {
    width: "500px",
  },
  colWrapper: {
    display: "flex",
    flexDirection: "row",
  },
};
export default Subscription;
