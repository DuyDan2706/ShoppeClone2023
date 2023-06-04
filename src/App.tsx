import { useState } from 'react'
import useRouteElements from './useRouteElements'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const routeElements = useRouteElements()

  return <div>
    {routeElements}
    <ToastContainer />
    </div>
}

export default App
