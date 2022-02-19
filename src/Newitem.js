import React from 'react';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import './App.css';


function Newitem() {
   const [number,setNumber]=useState(0);
  const [number2,setNumber2]=useState(0); 
  const addsamount=()=>{
    setNumber(number + 1)
  }
  const removesamount=()=>{
    setNumber(number-1)
    if(number==0){
      setNumber(0)
    }
  }
  const addsamount2=()=>{
    setNumber2(number2 + 1)
  }
  const removesamount2=()=>{
    setNumber2(number2-1)
    if(number2==0){
      setNumber2(0)
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
<h2>New Items</h2>
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
<img src="./images/breadbakery.jpg" alt="" height="150" width="230"></img>
<h2>Bread</h2>
<h2>Price:300tk</h2>
</div>
</div></td>
<td> <div className="w3-container">
<div className="crtdsn w3-card-4">
<img src="./images/birthdaycakchocolate.jpg" alt="" height="150" width="230"></img>
<h2>Birthday Cake(chocolate)</h2>
<h2>Price:1400tk</h2> 
</div>
</div></td>
</tr>
</tbody>
</table>

    </div>
    )
}

export default Newitem
