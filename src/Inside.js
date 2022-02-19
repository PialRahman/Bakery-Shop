import React, { useContext } from 'react';
import { useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import './App.css';
import { ItemContext } from './ItemContext';

function Inside() {
  const [item,setItem]= useContext(ItemContext);
  const [price,totalprice]= useState();
  const [normalprice,TotalBill]=useState([]);
  const [chckoutmsg,setChckoutmsg]=useState([]);
  const {id}=useParams();
  const [number,setNumber]=useState(0);
  const [number2,setNumber2]=useState(0);
  const [number4,setNumber4]=useState(0);
  const [number6,setNumber6]=useState(0);
  const showmessege=(cartitem)=>{
    if(cartitem.length!==0)
    setChckoutmsg("Order has been placed")
  };
  
  const removesamount=()=>{
    setNumber(number-1)
    if(number==0){
      setNumber(0)
    }
  };
  
  const removesamount2=()=>{
    setNumber2(number2-1)
    if(number2==0){
      setNumber2(0)
    }
  };
  const addsamount4=()=>{
    setNumber4(number4 + 1)
  };
  const removesamount4=()=>{
    setNumber4(number4-1)
    if(number4==0){
      setNumber4(0)
    }
  };
  const addsamount6=()=>{
    setNumber6(number6 + 1)
  };
  const removesamount6=()=>{
    setNumber6(number6-1)
    if(number6==0){
      setNumber6(0)
    }
  };
  
 const removeitem=(itemtoremove)=>{
   setCartitem(cartitem.filter(itemlists=>itemlists!==itemtoremove));

 }
 
  const [cartitem,setCartitem]= useState([]);
 
  const addCart=(e,itemlists)=>{
      e.preventDefault();
      setCartitem([...cartitem,itemlists]);
      console.log("It works");
  };
  
  
  const totalbill= cartitem.reduce((price,itemlists)=> price+itemlists.price
  ,0);
  

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
   
   <td>
      <div>
        { item.map(itemlists=>(
      <td><div className="w3-container">
    <div className="crtdsn w3-card-4">
     
    <img  src={itemlists.image} width="240px" height="164px"></img>
    <h2>{itemlists.name}</h2>
    <h2>{itemlists.price} tk</h2> 
      <form onSubmit={(e)=>addCart(e,itemlists)}>
    <input type="hidden"  value={itemlists.name} ></input>
    <input type="hidden"  value={itemlists.price} ></input>
    
    <button  className="btndsns">Add to Cart</button></form>
    </div>
    </div></td>))}</div></td> </tr> 
    
    </tbody>
</table>
   <h2><button className="btndsns">Cart({cartitem.length})</button></h2>
 
   {cartitem.length===0 && <h2>Cart is Empty</h2>}
  
  
  {cartitem.length!==0 && <table border="0">
    <tr>
      <th><h2>Name</h2></th>
      <th><h2>Price</h2></th>
      </tr><thead></thead>
      <tbody>  <tr>
      </tr>
  </tbody>
      </table>}
   
  
   { 
       
        cartitem.map(itemlists=>(<>
    <td><h2>{itemlists.name}</h2> </td>
    <td><h2>{itemlists.price} tk</h2></td>
    <br></br><br></br>
    <td><button onClick={()=>removeitem(itemlists)} className="btndsns">Remove</button></td><br></br>
  
  </>
   
    ))

    
    }
    {totalbill!==0 && <h2>Total Price:{totalbill} tk </h2>}
 <h4>{chckoutmsg}</h4>
 <h2>{cartitem.length!==0 && <button onClick={()=>showmessege(cartitem)} className="btndsns">Checkout</button>}</h2> 
 
        </div>
    )
}

export default Inside
