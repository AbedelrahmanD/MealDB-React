var apiUrl = "https://www.themealdb.com/api/json/v1/1/";
var constants = {
    mealsApi: `${apiUrl}search.php?s=`,
    mealApi: `${apiUrl}lookup.php?i=`,
    mealsFilterApi: `${apiUrl}filter.php?c=`,
    categoriesApi: `${apiUrl}categories.php`,
};
export default constants;