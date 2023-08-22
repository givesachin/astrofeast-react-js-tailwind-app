import './App.css';
import About from './components/About';
import Login from './components/Atoms/Login';
import Signup from './components/Atoms/Signup';
// uncomment the page which you want to be displayed
import Auth from './components/Auth'
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Shop from './components/Shop';
import Sitemap from './components/Sitemap';
import CategoryDetail from './components/CategoryDetail';

function App() {
    return (
        <div className="App">
            {/* <NavLink to="/auth"><p className='text-right w-full capitalize text-blue-600 active:text-purple-600 '>Login</p></NavLink> */}
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} ></Route>
                    <Route exact path="/about" element={<About />} ></Route>
                    <Route exact path="/shop" element={<Shop />} ></Route>
                    <Route exact path="/shop/categorydetail" element={<CategoryDetail />} ></Route>
                    <Route exact path="/sitemap" element={<Sitemap />} ></Route>
                    <Route path="/auth" element={<Auth />} >
                        <Route exact path='login' element={<Login />} />
                        <Route exact path='signup' element={<Signup />} />
                    </Route>
                </Routes>
            </Router>
            {/* uncomment the component which you want to be displayed */}
            {/* <Home /> */}
            {/* <About /> */}

        </div>
    );
}

export default App;