import React from "react"
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/shared/Navigation/Navigation";
import Home from "./Pages/Home/Home";
import "./App.css";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <div className="App">
      {/* <Navigation />  
      
      [IMPORTANT NOTE: Previously we were rendering the navbar outside the routing context. 
                       The Router isn't aware of what routes the links are attempting to link 
                       to that it is managing.]
      
      */}

      <Router>
            <Navigation />  {/* [SOLUTION the previous navigation problem): We need to move 
                                <Navigation/> inside the routing context so the Router is aware 
                                and can manage routing correctly. ] */}

            <Routes>
              <Route exact path="/" element={<Home />} ></Route>
              <Route path="/register" element={<Register />}></Route>
              <Route path="/login" element={<Login />}></Route>
            </Routes>
      </Router> 

    </div>
  );
}

export default App;
