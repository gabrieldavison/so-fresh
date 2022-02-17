import React from "react";

const RecipeSummary = ({ data }) => {
  console.log(data);
  return (
    <section>
      <h3>{data.title}</h3>
      <img style={styles.recipeImage} src={data.recipeImage}></img>
      <p>{data.recipeSummary}</p>
    </section>
  );
};

const styles = {
  recipeImage: {
    width: "200px",
  },
};

export default RecipeSummary;
