import React from "react";
import data from "./data";
import Header from "../subscriptionsPage/Header";

const Recipe = () => {
  return (
    <div style={styles.recipe}>
      <Header />
      <h2>{data.recipeTitle}</h2>
      <div style={styles.recipeSummary}>
        <div>
          <img src={data.recipeImage}></img>
        </div>
        <div>
          <div style={styles.recipeDescription}>
            <p>{data.recipeDescription}</p>
          </div>
          <div style={styles.ingredientsAllergens}>
            <section style={styles.listWrapper}>
              <h3>Ingredients</h3>
              <ul>
                {data.ingredients.map((ingredient, i) => (
                  <li key={i}>{ingredient}</li>
                ))}
              </ul>
            </section>
            <section style={styles.listWrapper}>
              <h3>Allergens</h3>
              <ul>
                {data.allergens.map((allergen, i) => (
                  <li key={i}>{allergen}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  recipe: {
    maxWidth: "1000px",
    margin: "auto",
  },
  recipeSummary: {
    display: "flex",
    flexDirection: "row",
  },
  recipeDescription: {
    display: "flex",
    alignItems: "center",
    padding: "1rem",
  },
  ingredientsAllergens: {
    padding: "1rem",
    display: "flex",
    flexDirection: "row",
  },
  listWrapper: {
    width: "50%",
  },
};

export default Recipe;
