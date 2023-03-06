import React, { Component } from 'react'
import { connect } from 'react-redux'

class Cart extends Component {
    HandleRenderCart = () => {
        return this.props.cart.map(itemCart => {
            let {name, price, image} = itemCart
            return <tr>
                <th scope="row">{name}</th>
                <td>{price}</td>
                <td>Otto</td>
                <td>
                    <img src={image} alt={name} style={{width: 60}}/>
                </td>
            </tr>
        })
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Tên</th>
                            <th scope="col">Giá</th>
                            <th scope="col">Số lượng</th>
                            <th scope="col">Hình ảnh</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.HandleRenderCart()}
                    </tbody>
                </table>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        cart: state.shoeReducer.cart
    }
}

export default connect(mapStateToProps)(Cart)
