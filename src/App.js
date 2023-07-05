import './App.css';
import About from './components/About';
// uncomment the page which you want to be displayed
// import Auth from './components/Auth'
// import Home from './components/Home';
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


      {/* uncomment the component which you want to be displayed */}
      {/* <Home /> */}
      <About />

    </div>
  );
}

export default App;
