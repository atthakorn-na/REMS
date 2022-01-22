
import React from 'react';
import {Route,Routes} from 'react-router-dom';
import Regis from './regis';
import Login from './login';
import Home from './Home';
function App () {

  
  return (
    
    <div>
    <Routes>
    <Route exact path='/'element={<Login/>}></Route>
    <Route  path='/regis'exact element={<Regis/>}></Route>
    <Route  path='/Home'exact element={<Home/>}></Route>
    </Routes>
    </div>
 
    
  );
  
}

export default App;
