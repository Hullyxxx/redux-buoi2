import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../../redux/action/shoeAction'

class ListShoe extends Component {
    HadnleRenderShoe = () => {
        return this.props.shoe.map(item => {
            let { name, image, price } = item
            return <div className="card col-4 " style={{ width: '18rem' }}>
                <img className="card-img-top" src={image} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{price}</p>
                    <a href="#"
                    onClick={() => {
                        {this.props.HandleAddToCart(item)}
                    }} className="btn btn-success">THÊM VÀO GIỎ</a>
                </div>
            </div>
        })
    }
    render() {
        return (
            <div className='row'>
                {this.HadnleRenderShoe()}
            </div>
        )
    }
}

let mapStateToProps = (state, props) => {
    return {
        shoe: state.shoeReducer.shoe,
        cart: state.shoeReducer.cart
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        HandleAddToCart: (item) => {
            return dispatch(addToCart(item))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListShoe)