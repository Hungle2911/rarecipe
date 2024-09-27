import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { RecipeDetails } from "../types/types";
const NewRecipeForm = () => {
  // const { register, handleSubmit } = useForm<RecipeDetails>();
  return (
    <form className="w-2/3">
      <div className="mb-4">
        <label
          htmlFor="recipeName"
          className="block text-sm font-medium text-gray-700"
        >
          Recipe name
        </label>
        <input
          type="text"
          name="name"
          id="recipeName"
          className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="recipeIngredients"
          className="block text-sm font-medium text-gray-700"
        >
          Ingredients
        </label>
        <input
          type="text"
          name="ingredients"
          id="recipeIngredients"
          className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
        <small id="ingredientsHelp" className="text-sm text-gray-500">
          Separate each ingredient with a comma.
        </small>
      </div>
      <div className="mb-4">
        <label
          htmlFor="instruction"
          className="block text-sm font-medium text-gray-700"
        >
          Preparation Instructions
        </label>
        <textarea
          className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          id="instruction"
          name="instruction"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full py-3 mt-3 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Create Recipe
      </button>
      <Link
        to="/recipes"
        className="block mt-3 text-center text-indigo-600 hover:underline"
      >
        Back to recipes
      </Link>
    </form>
  );
};

export default NewRecipeForm;
