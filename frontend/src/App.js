import {Routes, Router, Route} from 'react-router-dom';
import Navigation from './components/shared/Navigation/Navigation';
import Home from './Pages/Home/Home';
import './App.css';
function App() {
  return (
    <div className="App">
      {/* <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router> */}
      <Navigation />
      <>Boby Chaudhary</>
    </div>
  );
}

export default App;
