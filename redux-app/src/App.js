// src/App.js
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import { myStore } from './redux/config'; // Correct path to your store
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { Web } from './Web';


function App() {
  // Define the routes
  const routerPaths = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/home", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
    { path: "/web", element: <Web /> }
  ]);

  return (
    <Provider store={myStore}>
      <div className='bg-slate-400'>
        <RouterProvider router={routerPaths} />
      </div>
    </Provider>
  );
}

export default App;
