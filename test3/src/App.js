// src/App.js
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import { myStore } from './redux/config';
import { Home } from './Home';
import { UserList } from './UserList';
import { ShowUserList } from './ShowUserList';


function App() {
  // Define the routes
  const routerPaths = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/home", element: <Home /> },
    { path: "/userList", element: <UserList /> },
    { path: "/showUserList", element: <ShowUserList /> }
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
