import React from "react";
import data from "./data.js";
import RecipeCard from "./RecipeCard";

const Subscription = () => {
  return (
    <div style={styles.subscriptionPage}>
      <h1>So Fresh</h1>
      <section>
        <h2>{data.subscriptionTitle}</h2>
        <div style={styles.flexRow}>
          <div>
            <img
              style={styles.subscriptionImage}
              src={data.subscriptionImage}
            ></img>
          </div>
          <div style={styles.subscriptionSummary}>
            <p>{data.subscriptionSummary}</p>
          </div>
        </div>
      </section>
      <section style={styles.flexRow}>
        {data.recipes.map((recipe) => (
          <div style={styles.recipeCard}>
            <RecipeCard key={recipe.title} data={recipe} />
          </div>
        ))}
      </section>
    </div>
  );
};

const styles = {
  subscriptionPage: {
    maxWidth: "1000px",
    margin: "auto",
    backgroundColor: "#FFE7E7",
  },
  subscriptionImage: {
    width: "500px",
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
  },
  recipeCard: {
    paddingRight: "1rem",
    justifyContent: "center",
    width: "20%",
  },
  subscriptionSummary: {
    display: "flex",
    alignItems: "center",
    padding: "1rem",
  },
};
export default Subscription;
