import { Link } from "react-router-dom";
import { RecipeCardProps } from "../types/types";

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <img
          src={recipe.image}
          className="w-full h-48 object-cover object-center"
          alt={`${recipe.name} image`}
        />
        <div className="p-4">
          <h5 className="font-bold text-gray-800">{recipe.name}</h5>
          <Link
            to={`/recipe/${recipe.id}`}
            className="block mt-2 text-blue-600 hover:underline"
          >
            View Recipe
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
