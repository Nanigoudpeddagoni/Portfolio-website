import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About'
import Tech from './components/Tech';
import Certficate from './components/Certficate';
import Footer from './components/Footer';
function App() {
  
  
  return (
      
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path='/' element={<Home />} ></Route>
          <Route path='/About' element={<About />} ></Route>
          <Route path='/Tech' element={<Tech />} ></Route>
          <Route path='/Certificate' element={<Certficate />} ></Route>
        </Routes>
       
      </BrowserRouter>
    </div>
  );
}

export default App;
