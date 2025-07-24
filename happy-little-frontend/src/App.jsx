import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Franchise from './pages/Franchise';
import Contacts from './pages/Contacts';
import Footer from './components/Footer';
import { Routes, Route, BrowserRouter, useLocation } from 'react-router-dom';
import Drink from './pages/Drink';
import Authorization from './pages/Authorization';
import Registration from './pages/Registration'
import DropDownMenu from './pages/DropDownMenu'
import Profile from './pages/Profille'
import HeaderMenu from './components/HeaderMenu'
import FooterMenu from './components/FooterMenu'
import { useParams } from 'react-router-dom';


function App() {
  const location = useLocation()
  const { parentPath } = useParams();
  const isDropDownMenuPage = location.pathname.includes('/DropDownMenu');
  const isFooterPage = !location.pathname.includes('/DropDownMenu');

  return (
    <div className="App">
      {isDropDownMenuPage ? <HeaderMenu /> : <Header />}
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/:idMenu" element={<Menu />} />
          <Route path="/:idMenu/:id" element={<Drink />} />
          <Route path="/Franchise" element={<Franchise />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/:parentPath/DropDownMenu" element={<DropDownMenu/>} />
          <Route path=":idMenu/:id">
            <Route path="DropDownMenu" element={<DropDownMenu />} />
          </Route>
          <Route path="/:parentPath/DropDownMenu/Registration" element={<Registration />} />
          <Route path="/:parentPath/DropDownMenu/Authorization" element={<Authorization />} />
          <Route path="/:parentPath/DropDownMenu/Profile" element={<Profile />} />
        </Routes>
        {isFooterPage ? <Footer /> : <FooterMenu/>}
    </div>
  );
}
export default App;