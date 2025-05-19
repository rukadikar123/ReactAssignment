import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page from "@/app/dashboard/Page";
import NoDataFound from "@/components/NoDataFound";
import GeneratedArticles from "./app/dashboard/GeneratedArticle";

function App() {
  return (
    <>
      {/* Setting up client-side routing using BrowserRouter */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page />}>
            <Route path="generated-articles" element={<GeneratedArticles />} />
            <Route path="*" element={<NoDataFound />} />
          </Route>
        </Routes>
      </BrowserRouter>{" "}
    </>
  );
}

export default App;
