import "./App.css";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import React from "react"
import Navigation from "./components/shared/Navigation/Navigation";
import Home from "./Pages/Home/Home";
import Authenticate from "./Pages/Authenticate/Authenticate";
import Activate from "./Pages/Activate/Activate";
import Rooms from "./Pages/Rooms/Rooms"
const isAuth = false;
const user = {
    activated: false,
};



function App() {
  return (
    <div className="App">
      {/* <Navigation />  
      
      [IMPORTANT NOTE: Previously we were rendering the navbar outside the routing context. 
                       The Router isn't aware of what routes the links are attempting to link 
                       to that it is managing.]
      */}

      <Router>
          <Navigation/>
          <Routes>

              <Route exact path="/" element={(<GuestRoute><Home/></GuestRoute>)}></Route>            

              <Route path="/authenticate" element={(<GuestRoute><Authenticate/></GuestRoute>)} ></Route>
              <Route path="/activate" element={(<SemiProtectedRoute><Activate/></SemiProtectedRoute>)}></Route>
              <Route path="/rooms" element={(<ProtectedRoute><Rooms/></ProtectedRoute>)}></Route>
            
          </Routes>
      </Router>


    </div>
  );
}
;

// GUEST ROUTE
const GuestRoute = ({ children, location}) => {
  return  isAuth ? (
          <Navigate to={{
              pathname: '/rooms',
              state: {from: location}
            }}
            />
          )
          :
          (
            children
          );
}


// SEMI-PROTECTED ROUTE
const SemiProtectedRoute=({children, location})=>{
  // const { user, isAuth } = useSelector((state) => state.auth);
    return !isAuth ?(
              <Navigate to={{
                        pathname:'/',
                        state:{ from: location},
              }}/>
            ) 
            : 
            isAuth && !user.activated ?
            ( children ) 
            :
            (
              <Navigate to={{
                        pathname:'/rooms',
                        state:{ from: location},
              }}/>
            );
  }
    


// PROTECTED ROUTE
const ProtectedRoute=({children, location})=>{
  // const { user, isAuth } = useSelector((state) => state.auth);
     
      return !isAuth ?(
          <Navigate to={{
                    pathname:'/',
                    state:{ from: location},
          }}/>
        ) 
        : isAuth && !user.activated ? 
        (
          <Navigate to={{
                    pathname: '/activate',
                    state: { from: location },
          }}/>
        ) 
        : 
        ( children);
  }
   

  
export default App;
