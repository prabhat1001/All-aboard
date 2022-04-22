import {Routes, Router, Route} from 'react-router-dom';
import Navigation from './components/shared/Navigation/Navigation';
import Home from './Pages/Home/Home';
import './App.css';
function App() {
  return (
    <div className="App">
       <Navigation />
      {/* <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router> */}
      <Home/>
     
      
    </div>
  );
}

export default App;
