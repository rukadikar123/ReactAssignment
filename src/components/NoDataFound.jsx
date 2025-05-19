import { useNavigate } from "react-router-dom";

export default function NoDataFound() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-full py-10">
      <h2 className="text-xl font-semibold mb-4">No data found</h2>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded"
        onClick={() => navigate("/")}
      >
        Go to Home
      </button>
    </div>
  );
}