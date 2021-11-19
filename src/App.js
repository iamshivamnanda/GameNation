/* eslint-disable no-unused-vars */
import {useState,useCallback} from 'react';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import { AuthContext } from './shared/context/authcontent';
import { Homepage } from './homepage/page/homepage';
import { Footer } from './shared/Footer/Footer';
import { GamePage } from './gamePage/gamePage';
import SideNavigation from './shared/SideNavigation/SideNavigation';
import Navigation from './shared/Navigation/Navigation';
import Logo from './assets/logo-dark.png';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(false);
  const [show, setSHow] = useState(false);
  const [wishListItems, setwishListItems] = useState(0);
  
 const sideNavigationHandler = ()=>{
    setSHow(!show);
}
  
  return (
    <AuthContext.Provider value={{islogged:isLoggedIn,
      wishList:wishListItems,userId:userId}}> 
      <BrowserRouter>
      <main>
      <SideNavigation show={show} sidebarhandler={sideNavigationHandler} />
               <Navigation sidebarhandler={sideNavigationHandler} /> 
      <div className='logo'>
            <Link to="/">
            <img src={Logo} className='logoImage' alt='logo' />

            </Link>
        </div>
        <Routes>
          <Route path="/game/:id" element={<GamePage />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
      <Footer />
      </main>
      </BrowserRouter>

    </AuthContext.Provider>
  );
}

export default App;
