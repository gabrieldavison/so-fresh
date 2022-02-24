import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ data }) => {
  console.log(data);
  return (
    <section style={styles.recipeCard}>
      <h3>
        <Link to="/recipe">{data.title}</Link>
      </h3>
      <img style={styles.recipeImage} src={data.recipeImage}></img>
      <p>{data.recipeSummary}</p>
    </section>
  );
};

const styles = {
  recipeImage: {
    maxWidth: "100%",
  },
};

export default RecipeCard;
