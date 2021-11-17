import {useState,useCallback} from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { AuthContext } from './shared/context/authcontent';
import { Homepage } from './homepage/page/homepage';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(false);
  const [wishListItems, setwishListItems] = useState(0);
  const login = useCallback((userId) => {
    setUserId(userId);
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  
  return (
    <AuthContext.Provider value={{islogged:isLoggedIn,
      wishList:wishListItems,userId:userId}}> 
      <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </main>
      </BrowserRouter>
    

    </AuthContext.Provider>
  );
}

export default App;
