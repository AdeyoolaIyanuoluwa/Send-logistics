import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './routes/Navbar';
import Header from './routes/Header';
import Thirdpart from './routes/Thirdpart';
import Fourthpart from './routes/Fourthpart';
import Foot from './routes/Foot';
import Fifthhpart from './routes/Fifthhpart';


function App() {
  return (
    <div>
        <Router>
          <Navbar/>
            <Header/>
            <Thirdpart/>
            <Fourthpart/>
            <Fifthhpart/>
            <Foot/>
        </Router>
    </div>
  );
}

export default App;
