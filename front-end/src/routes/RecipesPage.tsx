import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import RecipeCard from "../components/RecipeCard";
import NoRecipes from "../components/NoRecipe";
import { useEffect } from "react";
import API from "../API/axios.config";
import { Recipe } from "../types/types";

const fetchRecipes = async () => {
  try {
    const response = await API.get("/recipes");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch recipes");
  }
};

const RecipesPage = () => {
  const navigate = useNavigate();

  const {
    data: recipes = [],
    error,
    isLoading,
  } = useQuery<Recipe[]>({
    queryKey: ["recipes"],
    queryFn: () => fetchRecipes(),
  });

  useEffect(() => {
    if (error) {
      navigate("/");
    }
  }, [error, navigate]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading recipes</div>;
  }

  return (
    <>
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Recipes for every occasion</h1>
          <p className="mt-4 text-lg text-gray-700">
            We’ve pulled together our most popular recipes, our latest
            additions, and our editor’s picks, so there’s sure to be something
            tempting for you to try.
          </p>
        </div>
      </section>
      <div className="py-12">
        <main className="container mx-auto">
          <div className="flex justify-end mb-6">
            <Link
              to="/recipe/new"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Create New Recipe
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.length > 0 ? (
              recipes.map((recipe: Recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))
            ) : (
              <NoRecipes />
            )}
          </div>
          <div className="mt-8 text-center">
            <Link to="/" className="text-blue-600 hover:underline">
              Home
            </Link>
          </div>
        </main>
      </div>
    </>
  );
};

export default RecipesPage;
