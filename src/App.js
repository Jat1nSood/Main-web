import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './screens/Home';
import About from './screens/About';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
      <Footer />
    </Router>
    
    </>
  );
}

export default App;
