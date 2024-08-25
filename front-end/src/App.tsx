import { Route, Routes } from "react-router-dom";
import "./App.css";
import Index from "./routes/Index";
import RecipesPage from "./routes/RecipesPage";
import RecipeDetailsPage from "./routes/RecipeDetailsPage";
import NewRecipePage from "./routes/NewRecipePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/recipe/:id" element={<RecipeDetailsPage />} />
        <Route path="/recipe/new" element={<NewRecipePage />} />
      </Routes>
    </>
  );
}

export default App;
