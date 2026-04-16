import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from "react-router/dom";
import { router } from './routes/Routes';
import FriendContext from './context/FriendContext';
import FriendProvider from './context/FriendContext';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendProvider>
      <RouterProvider router={router} />
      <ToastContainer position="top-center" autoClose={800}/>
    </FriendProvider>
  </StrictMode>,
)
