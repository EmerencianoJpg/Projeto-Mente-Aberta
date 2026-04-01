import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import About from "./pages/About";
import AdminPanel from "./pages/AdminPanel";
import NotFound from "./pages/NotFound";

/**
 * Configuração principal de rotas da aplicação (React Router)
 * Define como os endereços (URLs) se conectam aos componentes/páginas.
 */
export const router = createBrowserRouter([
  {
    path: "/",
    // Componente Layout envolve todas as páginas (Navbar\Footer)
    Component: Layout,
    children: [
      {
        // Página Inicial: Caminho "/"
        index: true,
        Component: Home,
      },
      {
        // Galeria de Projetos: Caminho "/projetos"
        path: "projetos",
        Component: Projects,
      },
      {
        // Detalhes do Projeto: Caminho "/projeto/id-do-projeto"
        // ":id" é um parâmetro para carregar o projeto certo
        path: "projeto/:id",
        Component: ProjectDetail,
      },
      {
        // Sobre o Evento: Caminho "/sobre"
        path: "sobre",
        Component: About,
      },
      {
        // Painel Administrativo: Caminho "/admin"
        path: "admin",
        Component: AdminPanel,
      },
      {
        // Página de Erro: Qualquer caminho que não exista (404)
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);