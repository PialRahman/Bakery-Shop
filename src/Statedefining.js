import React, { Component } from 'react';

export class Statedefining extends Component {
    state ={
        foods:[
            {name:'icecream',price:'300tk'},
            {name:'Chips',price:'100tk'},
            {name:'juice',price:'200tk'},
            {name:'bread',price:'40tk'},
        ]
    }
  render() {
    return <div>
    <h2>Item is:{this.state.foods[0].name}</h2> <h2>Price is:{this.state.foods[0].price}</h2>
    <h2>Item is:{this.state.foods[1].name}</h2> <h2>Price is:{this.state.foods[1].price}</h2>
    <h2>Item is:{this.state.foods[2].name}</h2> <h2>Price is:{this.state.foods[2].price}</h2>
    <h2>Item is:{this.state.foods[3].name}</h2> <h2>Price is:{this.state.foods[3].price}</h2>
    </div>;
  }
}

export default Statedefining;
