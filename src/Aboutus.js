import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';

function Aboutus(props) {
    return (
        <div >
              <h1>Bakery Shop</h1>
    <div className="navbardsns">
    <ul>   
    <Link to='/'> <li>Home</li></Link>
      <Link to='/aboutus'><li>About</li></Link>
      <Link to="/items"><li>Item</li></Link>
      <div className="srchbrdsns">
     <form action="/action_page.php">
      <input type="text" placeholder="Search.." name="search"></input>
      <button type="submit"><i class="fa fa-search"></i></button>
    </form>
    </div>
    </ul>
    </div>
    <div className='abtdsns'>
              <h4>This is an online site to  sell bakery items like cake,bread,cookies etc. We ensure the best services for you.To get the best cakes you can  visit our website.You can order us.To get the finest cakes you can also visit us. You can order us with</h4></div>
        </div>
    )
}

export default Aboutus
