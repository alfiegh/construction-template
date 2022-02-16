import './App.css';
import { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import ServicesPage from './pages/ServicesPage';
import MainPage from './pages/MainPage';
import AboutTeam from './pages/AboutTeam';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HashRouter basename='/'>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <ScrollToTop>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/services' element={<ServicesPage />} />
          <Route path='/about' element={<AboutTeam />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </ScrollToTop>
      <Footer />
    </HashRouter>
  );
}

export default App;
