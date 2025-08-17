import axiosInstance from "./axios.js";

//get random meal
const getRendomMeal = async () => {
  try {
    let meals = [];
    for (let i = 0; i < 10; i++) {
      const res = await axiosInstance.get("/random.php");
      meals.push(res?.data?.meals[0]);
    }
    return meals;
  } catch (error) {
    console.log("Rendom meal fetching get failed", error);
  }
};

export { getRendomMeal };
