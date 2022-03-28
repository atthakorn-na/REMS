
import React, { useContext } from 'react';
import {Route,Routes} from 'react-router-dom';
import Regis from './regis';
import Login from './login';
import Home from './components/Home';
import Listpage from './components/listpage';
import Chat from './components/Chat';

import AuthContext, { AuthProvider } from './components/Auth'
import Profile from './components/Profile';
import Rent from './components/rent';


function App () {
  
  return (

      <Routes>
        <Route exact path='/'element={<Login/>}></Route>
        <Route  path='/regis'exact element={<Regis/>}></Route>
        <Route  path='/Home'exact element={<Home/>}></Route>
        <Route path='/listpage' exact element={<Listpage/>}></Route>
        <Route path='/chat' exact element={<Chat/>}></Route>
        <Route path='*' element={<Login/>}></Route>
        <Route path='profile' element={<Profile/>}></Route>
        <Route path='rent' element={<Rent/>}></Route>
      </Routes>

  );
  
}

export default App;
