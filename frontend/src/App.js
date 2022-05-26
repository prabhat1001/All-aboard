import {Routes, Router, Route} from 'react-router-dom';
import Navigation from './components/shared/Navigation/Navigation';
import Home from './Pages/Home/Home';
import './App.css';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';


function App() {
  return (
    <div className="App">
       <Navigation />
       {/* <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>  */}
      <Home/>
      <Register/>
      <Login/>
      
     
      
    </div>
  );
}

export default App;
