import React from "react";
import data from "./data.js";
import RecipeCard from "./RecipeCard";
import Header from "../subscriptionsPage/Header";
import style from "./Subscription.module.css";

const Subscription = () => {
  return (
    <div className={style.subscriptionPage}>
      <Header />
      <section>
        <h2>{data.subscriptionTitle}</h2>
        <div className={style.flexRow}>
          <div>
            <img
              className={style.subscriptionImage}
              src={data.subscriptionImage}
            ></img>
          </div>
          <div className={style.subscriptionSummary}>
            <p>{data.subscriptionSummary}</p>
          </div>
        </div>
      </section>
      <section className={style.flexRow}>
        {data.recipes.map((recipe) => (
          <div className={style.recipeCard}>
            <RecipeCard key={recipe.title} data={recipe} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Subscription;
