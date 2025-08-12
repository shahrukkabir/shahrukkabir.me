import { createBrowserRouter, RouterProvider } from 'react-router';
import './App.css';
import Home from './components/Home';
import { Toaster } from 'react-hot-toast';
import HomePage from './Pages/Homepage';
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    children: [{
      path: '/',
      element: <Home />
    }],
  }
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
