export interface Recipe {
    id: number;
    name: string;
    image: string;
}
export interface RecipeCardProps {
  recipe: Recipe
}
export interface RecipeDetails {
  image?: string;
  name: string;
  ingredients: string;
  instruction: string;
}
