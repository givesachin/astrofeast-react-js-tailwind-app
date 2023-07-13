import './App.css';
import About from './components/About';
import Login from './components/Atoms/Login';
import Signup from './components/Atoms/Signup';
// uncomment the page which you want to be displayed
import Auth from './components/Auth'
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="App">
            {/* <NavLink to="/auth"><p className='text-right w-full capitalize text-blue-600 active:text-purple-600 '>Login</p></NavLink> */}
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} ></Route>
                    <Route path="/auth" element={<Auth />} />

                </Routes>
            </Router>
            {/* uncomment the component which you want to be displayed */}
            {/* <Home /> */}
            {/* <About /> */}

        </div>
    );
}

export default App;