import './App.css';
import Auth from './components/Auth';
// import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
// import Home from './components/Home';
// import Login from './components/Atoms/Login';
function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/auth" element={
            <auth />
          } />
        </Routes>
      </BrowserRouter> */}

      {/* <NavLink to="/auth"><p className='text-right w-full capitalize text-blue-600 active:text-purple-600 '>Login</p></NavLink> */}
      <Auth />
    </div>
  );
}

export default App;
