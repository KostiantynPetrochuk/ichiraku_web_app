const createIngredientsString = (ingredients: string[]): string => {
  const ingredientsString: string =
    ingredients[0].charAt(0).toUpperCase() +
    ingredients[0].slice(1) +
    ", " +
    ingredients.slice(1).join(", ");
  return ingredientsString;
};

export default createIngredientsString;
