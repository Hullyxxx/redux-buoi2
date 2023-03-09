import React, { Component } from 'react'
import { connect } from 'react-redux'
import { decreaseNumber, indcreaseNumber, removeCart } from '../../redux/action/shoeAction'

class Cart extends Component {
    HandleRenderCart = () => {
        return this.props.cart.map(itemCart => {
            let { id, name, price, image, quantity } = itemCart
            return <tr>
                <th scope="row">{name}</th>
                <td>{price * quantity}</td>
                <td>
                    <button
                        onClick={() => {
                            { this.props.HandleDecreaseNumber(id) }
                        }}
                        className='btn btn-danger'>-</button>
                    <strong

                        className='mx-2'>{quantity}</strong>
                    <button
                        onClick={() => {
                            { this.props.HandleIncreaseNumber(id) }
                        }}
                        className='btn btn-success'>+</button>
                </td>
                <td>
                    <img src={image} alt={name} style={{ width: 60 }} />
                </td>
                <td>
                    <button
                        onClick={() => {
                            { this.props.HandleRemoveCart(id) }
                        }}
                        className='btn btn-danger'>Xóa</button>
                </td>
            </tr>
        })
    }
    render() {
        return (
            <div>
                <table className="table">
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

let mapDispatchToProps = (dispatch) => {
    return {
        HandleRemoveCart: (idShoe) => {
            return dispatch(removeCart(idShoe))
        },
        HandleIncreaseNumber: (idShoe) => {
            return dispatch(indcreaseNumber(idShoe))
        },
        HandleDecreaseNumber: (idShoe) => {
            return dispatch(decreaseNumber(idShoe))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart)
