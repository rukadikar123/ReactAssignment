// Importing useNavigate hook from react-router-dom to programmatically navigate
import { useNavigate } from "react-router-dom";


export default function NoDataFound() {
   // Initialize the navigate function from React Router
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-full py-10">
        {/* Heading displayed when no data is found */}
      <h2 className="text-xl font-semibold mb-4">No data found</h2>
      {/* Button to navigate the user back to the homepage */}
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded"
        onClick={() => navigate("/")}           // Redirect to homepage on click
      >
        Go to Home
      </button>
    </div>
  );
}