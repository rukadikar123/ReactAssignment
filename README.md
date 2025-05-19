# React Assignment

This project is a **React + Vite** application featuring a dashboard UI with sidebar navigation, article management, and data tables. It uses modern React patterns, shadcn/ui components, and Tailwind CSS for styling.

## Features

- **Sidebar Navigation:**  
  Collapsible sidebar with navigation links for different sections (Articles, Auto Blog, Internal Links, etc.).  

- **Article Management:**  
  - View "Generated Articles" in a responsive data table.
  - Tab switcher for viewing Generated, Published, Scheduled, and Archived articles.
  - Each article displays fields like title, category, word count, created date, action, and publisher.


- **Responsive Data Table:**  
  - Sortable and draggable rows.
  - Pagination and rows-per-page selection.
  - Responsive design with horizontal scrolling on small screens.


- **Routing:**  
  - Uses React Router for nested routes.
  - Sidebar links update the main content area via `<Outlet />`.

  
- **Modern UI:**  
  - Built with shadcn/ui and Tailwind CSS.
  - Clean, minimal, and accessible design.



## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)



## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

   
2. **Run the development server:**
   ```sh
   npm run dev
   ```
