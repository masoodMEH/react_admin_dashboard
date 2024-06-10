import React from 'react';
import { RouterProvider } from 'react-router-dom';

import router from './router';
import Login from './features/identity/components/login';
import Register from './features/identity/components/register';

const App = () => {
  return <RouterProvider router={router}/>
};

export default App;