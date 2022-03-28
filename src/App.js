
import React from 'react';
import {Route,Routes} from 'react-router-dom';
import Regis from './containers/Regis';
import Login from './containers/Landing';
import Home from './containers/Home';
import ListPage from './containers/ListPage';
import Chat from './containers/Chat';
import Profile from './containers/Profile';
import Rent from './containers/rent';


function App () {
  
  return (

      <Routes>
        <Route exact path='/'element={<Login/>}></Route>
        <Route  path='/regis'exact element={<Regis/>}></Route>
        <Route  path='/Home'exact element={<Home/>}></Route>
        <Route path='/listpage' exact element={<ListPage/>}></Route>
        <Route path='/chat' exact element={<Chat/>}></Route>
        <Route path='*' element={<Login/>}></Route>
        <Route path='profile' element={<Profile/>}></Route>
        <Route path='rent' element={<Rent/>}></Route>
      </Routes>

  );
  
}

export default App;
