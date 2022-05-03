import React from "react"
import { Routes, BrowserRouter as Router, Route, Navigate, } from "react-router-dom";
import Navigation from "./components/shared/Navigation/Navigation";
import Home from "./Pages/Home/Home";
import "./App.css";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Authenticate from "./Pages/authenticate/Authenticate";
import Activate from "./Pages/activate/Activate";
import Rooms from "./Pages/Rooms/Rooms"
const isAuth = true;
const user = {
    activated: true,
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
            <Navigation />  {/* [SOLUTION the previous navigation problem): We need to move 
                                <Navigation/> inside the routing context so the Router is aware 
                                and can manage routing correctly. ] */}

            <Routes>
              <Route exact path="/" element={<Home />} ></Route>
              {/* <Route path="/register" element={<Register />}></Route>
              <Route path="/login" element={<Login />}></Route> */}
              <Route path="/authenticate" element={<Authenticate />}></Route>
              {/*"error" <GuestRoute path="/authenticate"><Authenticate /></GuestRoute>
               */}
               <SemiProtectedRoute path="/activate">
                   <Activate/>
               </SemiProtectedRoute>
               <ProtectedRoute path="/rooms">
                 <Rooms />

               </ProtectedRoute>
            </Routes>

      </Router> 

    </div>
  );
}

const GuestRoute = ({children, ...rest}) => {
  return(
    <Route {...rest}
     render={({location}) =>{
        return isAuth ? (
        <Navigate to={
            { 
              pathname:"/rooms", 
            
              state: { from: location}
          }
        }/>
        ):
        (
          children

        );

      }}>
      
    </Route> 
  );

};

const SemiProtectedRoute=({children,...rest})=>{
  return(
    <Route{...rest}
    render={({location}) => {
      return !isAuth ?
        (
          <Redirect 
          to={{
            pathname:'/',
            state:{ from: location},
          }}
          />
        ) : isAuth && !user.activated ?(
          children
          ) :(
        <Navigate to={{
          pathname:'/rooms',
          state:{ from: location},
        }}/>
      );
    }}

    const ProtectedRoute = ({children,...rest})=>{
      return(
        <Route{...rest}
        render={({location}) => {
          return!isAuth ?
            (
              <Redirect 
              to={{
                pathname:'/',
                state:{ from: location},
              }}
              />
            ) : isAuth && !user.activated ?(
              
              <Redirect 
              to={{
                pathname:'/activate',
                state:{ from: location},
              }}
              />
              
              ) :(
            <Redirect={{
              pathname:'/rooms',
              state:{ from: location},
            }}
            />
          );(
            children
          ); 
        }}
     

    ></Route>
  );
}

export default App;
