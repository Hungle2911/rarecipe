import NewRecipeForm from "../components/NewRecipeForm";

const NewRecipePage = () => {
  return (
    <>
      <div className="flex flex-col items-center min-h-screen">
        <h1 className=" font-semibold text-3xl my-6">
          Add a new recipe to own awesome recipe collection
        </h1>
        <NewRecipeForm />
      </div>
    </>
  );
};

export default NewRecipePage;
