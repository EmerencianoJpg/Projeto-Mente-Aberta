import { RouterProvider } from 'react-router';
import { router } from './routes';

// Ponto de entrada principal da aplicação

export default function App() {
  return <RouterProvider router={router} />;
}