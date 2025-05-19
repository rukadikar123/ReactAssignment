import Page from "@/app/dashboard/Page";
import NoDataFound from "@/components/NoDataFound";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import GeneratedArticles from "./app/dashboard/GeneratedArticle";

function App() {
  return (
    <>
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
