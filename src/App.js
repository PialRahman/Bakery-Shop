import { useState } from 'react';
import './App.css';
import Element from './Element';
import Aboutus from './Aboutus';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Home from './Home';
import Trendingitem from './Trendingitem';
import Newitem from './Newitem';
import Inside from './Inside';
import Statedefining from './Statedefining';
import Usestatemain from './Usestatemain';
import {Itemcontextdetails } from './ItemContext';
import CartItems from './CartItems';

function App() {
  return (
  <Itemcontextdetails>
  <Router> 
    <div className="App">
    <Routes>
      
    <Route path='/' element={<Home/>}/>
    
      <Route path='/aboutus' element={<Aboutus/>}/>
      <Route path='/trendingitem' element={<Trendingitem/>}/>
      <Route path='/newitem' element={<Newitem/>}/>
      <Route path='/items' element={<Inside/>}/>
      <Route path='/usestate' element={<Usestatemain/>}/>
      <Route path='/cartitems' element={<CartItems/>}/>
     
     
    </Routes>
    
    
    </div>  
    </Router>
     </Itemcontextdetails>
  );

}

export default App;
