interface IngredientsProps {
  ingredients: string;
}
const RecipeIngredients = ({ ingredients }: IngredientsProps) => {
  return (
    <div className="mb-6">
      <h5 className="text-xl font-semibold mb-2">Ingredients</h5>
      <div>{ingredients}</div>
    </div>
  );
};

export default RecipeIngredients;
