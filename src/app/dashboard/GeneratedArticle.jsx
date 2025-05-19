import ArticleTabSwitcher from "./ArticleTabSwitcher";

// This component renders the "Generated Articles" page
export default function GeneratedArticles() {
  return (
    <div className="py-8  px-2">
      {/* Page heading */}
      <h1 className="text-2xl font-bold mb-4">Generated Articles</h1>
      {/* Tab switcher for switching between different article views */}
      <ArticleTabSwitcher />
    </div>
  );
}
