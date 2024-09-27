import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Chef Odin's Recipes
      </h1>
      <strong>
        <em>
          <h2 className="text-2xl text-gray-700 mb-6">Welcome to the family</h2>
        </em>
      </strong>
      <Link
        to="/recipes"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700"
        role="button"
      >
        View Recipes
      </Link>
    </div>
  );
};

export default Home;
