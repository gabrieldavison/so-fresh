import React from "react";
import data from "./data";
import Header from "../subscriptionsPage/Header";

const Recipe = () => {
  return (
    <>
      <Header />
      <div style={styles.recipe}>
        <h2 data-cy="recipe-title">{data.recipeTitle}</h2>
        <div style={styles.recipeSummary}>
          <div>
            <img data-cy="recipe-image" src={data.recipeImage}></img>
          </div>
          <div>
            <div style={styles.recipeDescription}>
              <p data-cy="recipe-description">{data.recipeDescription}</p>
            </div>
            <div style={styles.ingredientsAllergens}>
              <section style={styles.listWrapper}>
                <h3>Ingredients</h3>
                <ul data-cy="ingredients-list">
                  {data.ingredients.map((ingredient, i) => (
                    <li key={i}>{ingredient}</li>
                  ))}
                </ul>
              </section>
              <section style={styles.listWrapper}>
                <h3>Allergens</h3>
                <ul data-cy="allergens-list">
                  {data.allergens.map((allergen, i) => (
                    <li key={i}>{allergen}</li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const styles = {
  recipe: {
    maxWidth: "1200px",
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
    fontSize: "1.3rem"
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
