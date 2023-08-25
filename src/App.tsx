import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './modules/home-page/page/Home';
import Login from './modules/login-page/page/Login';

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='login' element={<Login />}/>
          <Route path='main' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
