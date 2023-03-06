import React, { Component } from 'react'
import Cart from './Cart/Cart'
import ListShoe from './ListShoe/ListShoe'

export default class ShoeShop extends Component {
  render() {
    return (
      <div>
        <Cart/>
        <ListShoe />
      </div>
    )
  }
}
