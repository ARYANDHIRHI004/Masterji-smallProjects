const oneRendomMeal = document.getElementById("oneRendomMeal");
const mealName = document.getElementById("mealName");
const mealCategory = document.getElementById("mealCategory");
const mealInstructions = document.getElementById("mealInstructions");
const link = document.getElementById("link");
const rendomMealsLeast = document.getElementById("rendomMealsLeast");

// Rendom Meals
import { getRendomMeal } from "./services/foodApi.js";

(async () => {
  const RendomMeals = await getRendomMeal();
  //   if(!RendomMeals) return
  const oneMeal = RendomMeals[0];
  oneRendomMeal.firstElementChild.src = oneMeal?.strMealThumb;
  mealName.innerHTML = oneMeal?.strMeal;
  mealCategory.innerHTML = oneMeal?.strCategory;
  mealInstructions.innerHTML = oneMeal?.strInstructions;
  link.innerHTML = "Watch Now";
  link.href = oneMeal?.strYoutube;

  rendomMealsLeast.innerHTML = RendomMeals.map((meal) => {
    return `<a href="/src/pages/meal.html">  
                <div class="flex flex-col min-w-60 p-5 h-70 rounded-2xl items-center">
                    <img class="rounded-2xl" width="100" src=${meal.strMealThumb} alt="">
                    <p class="text-xl text-center mt-5">${meal?.strMeal}</p>
                    <p class="text-[10px]">${meal?.strCategory}</p>
                </div>
            </a>`;
  });
})();
