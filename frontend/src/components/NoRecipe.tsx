import { Link } from "react-router-dom";

const NoRecipes = () => {
  return (
    <div className="w-full h-1/2 flex items-center justify-center">
      <h4 className="text-xl text-gray-700">
        No recipes yet. Why not{" "}
        <Link to="/new_recipe" className="text-blue-600 hover:underline">
          create one
        </Link>
      </h4>
    </div>
  );
};

export default NoRecipes;
