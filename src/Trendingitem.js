import React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import './App.css';

function Trendingitem() {
  const [number4,setNumber4]=useState(0);
  const [number6,setNumber6]=useState(0);
  const addsamount4=()=>{
    setNumber4(number4 + 1)
  }
  const removesamount4=()=>{
    setNumber4(number4-1)
    if(number4==0){
      setNumber4(0)
    }
  }
  const addsamount6=()=>{
    setNumber6(number6 + 1)
  }
  const removesamount6=()=>{
    setNumber6(number6-1)
    if(number6==0){
      setNumber6(0)
    }
  }
    return (
        <div>
        <h1>Bakery Shop</h1>
<div className="navbardsns">
<ul>   
<Link to='/'> <li>Home</li></Link>
  <Link to='aboutus'><li>About</li></Link>
  <Link to="/items"><li>Item</li></Link>
  <div className="srchbrdsns">
     <form action="/action_page.php">
      <input type="text" placeholder="Search.." name="search"></input>
      <button type="submit"><i class="fa fa-search"></i></button>
    </form>
    </div>
</ul>
</div>
<h2>Trending Items</h2>
<table><thead>
<tr>
<th></th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td><div className="sdbrdsns"><ul>
  <Link to="/items"><li>All Products</li></Link>
  <Link to="/trendingitem"><li>Trending Items</li></Link>
  <Link to="/newitem"><li>New Items</li></Link>
</ul></div></td>
<td><div className="w3-container">
<div className="crtdsn w3-card-4">
<img src="./images/birthdaycakvanila.jpg" alt="" height="150" width="230"></img>
<h2>Birthday Cake(vanila)</h2>
<h2>Price:1200tk</h2>
</div>
</div></td>
<td><div className="w3-container">
<div className="crtdsn w3-card-4">
<img src="./images/cookiesbakery.jpg" alt="" height="150" width="230"></img>
<h2>Cookies</h2>
<h3>Price:300 tk</h3>
</div>
</div></td>
</tr>
</tbody>
</table>

    </div>
    )
}

export default Trendingitem
