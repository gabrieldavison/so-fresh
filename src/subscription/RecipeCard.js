import React from "react";

const RecipeCard = ({ data }) => {
  return (
    <section data-cy="recipe-card" style={styles.recipeCard}>
      <h3 data-cy="recipe-card-title">{data.title}</h3>
      <img data-cy="recipe-card-image" style={styles.recipeImage} src={data.recipeImage}></img>
      <p data-cy="recipe-card-summary">{data.recipeSummary}</p>
    </section>
  );
};

const styles = {
  recipeImage: {
    maxWidth: "100%",
  },
};

export default RecipeCard;
