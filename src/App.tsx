import { useState } from 'react'
import { BrowserRouter, Route, RouteProps, Routes } from 'react-router-dom';
import LandingPage from './LandingPage'
import History from './History'
import Confirmation from "./Confirm"
import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const routes: RouteProps[] = [
    { path: '/', element: <LandingPage />, index: true },
    { path: '/history', element: <History /> },
    { path: '/confirm', element: <Confirmation /> },
  ];
  const [count, setCount] = useState(0)

  return (
    <div className="App" data-bs-theme="dark">
    <BrowserRouter>
      <Routes>
        {routes.map((route, idx) => (
          <Route key={idx} {...route} />
        ))}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App
