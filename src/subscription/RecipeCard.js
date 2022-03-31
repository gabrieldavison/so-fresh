import React from "react";
import { Link } from "react-router-dom";
const RecipeCard = ({ data }) => {
  return (
    <section data-cy="recipe-card" style={styles.recipeCard}>
      <h3 data-cy="recipe-card-title"><Link to="/recipe">{data.title}</Link></h3>
      <img data-cy="recipe-card-image" style={styles.recipeImage} src={data.recipeImage}></img>
      <p data-cy="recipe-card-summary">{data.recipeSummary}</p>
    </section>
  );
};

const styles = {
  recipeImage: {
    maxWidth: "100%",
    height: "120px"
  },
};

export default RecipeCard;
