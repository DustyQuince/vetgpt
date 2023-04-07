import { useState } from 'react'
import { BrowserRouter, Route, RouteProps, Routes } from 'react-router-dom';
import LandingPage from './LandingPage'
import './App.css'

function App() {

  const routes: RouteProps[] = [
    { path: '/', element: <LandingPage />, index: true },
    // { path: '/second', element: <SecondPage /> },
    // { path: '/third', element: <ThirdPage /> },
  ];
  const [count, setCount] = useState(0)

  return (
    <div className="App">
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
