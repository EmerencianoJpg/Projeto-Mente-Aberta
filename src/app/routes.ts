import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import About from "./pages/About";
import AdminPanel from "./pages/AdminPanel";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "projetos",
        Component: Projects,
      },
      {
        path: "projeto/:id",
        Component: ProjectDetail,
      },
      {
        path: "sobre",
        Component: About,
      },
      {
        path: "admin",
        Component: AdminPanel,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);