import React from 'react';
import {Link} from 'react-router-dom';

function Home() {
    return (
        <div>
<h1>Bakery Shop</h1>
    <div className="navbardsns">
    <ul>   
    <Link to='/'> <li>Home</li></Link>
      <Link to='/aboutus'><li>About</li></Link>
      <Link to="/items"><li>Item</li></Link>
      <div className="srchbrdsns">
     <form action="/action_page.php">
      <input type="text" placeholder="Search.." name="search"></input>
      <button type="submit"><i className="fa fa-search"></i></button>
    </form>
    </div>
    </ul>
    </div>
            <div className="webbnrdsns">
  <img src="./images/bakeryshopwebbannerspics.jpg" alt="Bakery Shop web banner" width="1400px" height="500px"></img>
  </div>
  <div className="mdltxtdsns"><h4>If you want to find get the best cookies and cakes and other items</h4>
  <h4>please visit our site.You can purchase your favourite item</h4></div>
  <Link to="/items"><button className="hmbtnsdsnss">Click Here</button></Link>

  <div className="middlsddsns">
  <table><thead>
  <tr>
    <th></th>
    <th></th>
    <th></th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td><div className="w3-container">
    <div className="crtmdldsnss w3-card-4">
    <img src="./images/birthdaycakvanila.jpg" alt="" height="200" width="320"></img>
    <h2>Cakes</h2>
    <p>If you want to find out the best cakes you can go for it. You can find out the tasty and beautiful cakes here</p><Link to="/items"><button className="btnmdldsnss">View Details</button></Link> 
    </div>
    </div></td>
    <td><div className="w3-container">
    <div className="crtmdldsnss w3-card-4">
    <img src="./images/cookiesbakery.jpg" alt="" height="200" width="320"></img>
    <h2>Trending Items</h2>
    <p>You can find out whats the trending items.You can purchase the items with special discounts.Join us to know the items</p><Link to="/trendingitem"><button className="btnmdldsnss">View Details</button></Link> 
    </div>
    </div></td>
    <td> <div className="w3-container">
    <div className="crtmdldsnss w3-card-4">
    <img src="./images/birthdaycakchocolate.jpg" alt="" height="200" width="320"></img>
    <h2>Special Items</h2>
    <p>All the special items are presented to you. Stay with us for the best deal</p><Link to="/newitem"><button className="btnmdldsnss">View Details</button></Link> 
    </div>
    </div></td>
  </tr>
 
  </tbody>
</table>
</div><br></br>
<footer>&copy;All rights reserved bakery shop</footer>
        </div>
    )
}

export default Home
