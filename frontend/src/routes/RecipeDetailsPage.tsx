import { Link, useParams } from "react-router-dom";
import Hero from "../components/RecipeHero";
import RecipeIngredients from "../components/RecipeIngredients";
import Instructions from "../components/RecipeInstruction";
import { useQuery } from "@tanstack/react-query";
import API from "../API/axios.config";
import { RecipeDetails } from "../types/types";

const RecipeDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const fetchRecipeDetails = async () => {
    try {
      const response = await API.get(`/recipes/${id}`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch recipes");
    }
  };
  const {
    data: recipeDetails,
    error,
    isLoading,
  } = useQuery<RecipeDetails | undefined>({
    queryKey: ["details"],
    queryFn: () => fetchRecipeDetails(),
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !recipeDetails) {
    return <div>Error loading recipes</div>;
  }
  return (
    <>
      <Hero image={recipeDetails.image} name={recipeDetails.name} />

      <div className="container py-5">
        <div className="flex flex-wrap -mx-2">
          <div className="w-full lg:w-1/4 px-2 mb-4 lg:mb-0">
            <RecipeIngredients ingredients={recipeDetails.ingredients} />
          </div>
          <div className="w-full lg:w-1/2 px-2 mb-4 lg:mb-0">
            <Instructions instructions={recipeDetails.instruction} />
          </div>
          <div className="w-full lg:w-1/4 px-2"></div>
        </div>
        <div className="mt-8 text-center">
          <Link to="/recipes" className="text-blue-600 hover:underline">
            Back to recipes
          </Link>
        </div>
      </div>
    </>
  );
};

export default RecipeDetailsPage;
