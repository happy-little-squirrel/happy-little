import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Franchise from './pages/Franchise';
import Contacts from './pages/Contacts';
import Footer from './components/Footer';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Drink from './pages/Drink';
import ScrollToTop from './utils/scrollToTop';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Franchise" element={<Franchise />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/drink/:idMenu/:id" element={<Drink />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
