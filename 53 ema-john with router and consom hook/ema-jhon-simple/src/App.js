import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from "./layouts/Main";
import About from './component/About/About';
import Shop from './component/Shop/Shop';
import Orders from './component/Orders/Orders';
import Inventory from './component/Inventory/Inventory';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('products.json'),
          element: <Shop></Shop>

          // 53-4 Create products and saved cart loader and return multiple items

        },
        {
          path: '/orders',
          loader: () => fetch(`products.json`),
          element: <Orders></Orders>
        },
        {
          path: '/inventory',
          element: <Inventory></Inventory>
        },
        {
          path: 'about',
          element: <About></About>
        }
      ]
    },

  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
