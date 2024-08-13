import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Projects from './components/Projects'
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path = "/" element = {<Header/>}/>
        <Route path = "/projects" element = {<Projects/>}/>
        <Route path = "/about" element = {<About/>}/>
        <Route path = "/contact" element = {<Contact/>}/>
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;