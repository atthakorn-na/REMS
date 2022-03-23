
import React from 'react';
import {Route,Routes} from 'react-router-dom';
import Regis from './regis';
import Login from './login';
import Home from './components/Home';
import Listpage from './components/listpage';
import Chat from './components/Chat';
import Profile from './components/Profile';
function App () {

  
  return (
    
    <div>
    <Routes>
    <Route exact path='/'element={<Login/>}></Route>
    <Route  path='/regis'exact element={<Regis/>}></Route>
    <Route  path='/Home'exact element={<Home/>}></Route>
    <Route path='/listpage' exact element={<Listpage/>}></Route>
    <Route path='/chat' exact element={<Chat/>}></Route>
    <Route path='/Profile' exact element={<Profile/>}></Route>
    </Routes>
    </div>
 
    
  );
  
}

export default App;
