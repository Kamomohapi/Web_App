import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';
import {food_list} from '../../../assets/assets';


const Cart = () => {

    const {cartItems, food_list, removeFromCart, getCartTotalAmount} = useContext(StoreContext);
    const navigate = useNavigate();
    
    return (
        <div className='cart'>
            <div className="cart-items">
                <div className="cart-item-title">

                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {food_list.map((item, index) => {
                    if (cartItems[item._id] > 0) {
                        return (
                            <div>
                                <div className='cart-items-title cart-items-item'>
                                    <img src={item.image} alt="" />
                                    <p>{item.name}</p>
                                    <p>R{item.price}</p>
                                    <p>{cartItems[item._id]}</p>
                                    <p>R{item.price * cartItems[item._id]}</p>
                                    <p onClick={() => removeFromCart(item._id)} className='cross'>X</p>
                                </div>
                                <hr />
                            </div>
                        )

                    }
                })}
            </div>
            <div className="cart-bottom">
                <div className="cart-total">
                    <h1>Cart Total</h1>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>R{getCartTotalAmount()}</p>
                        </div>

                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>R{getCartTotalAmount()===0?0:2}</p>
                        </div>
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>R{getCartTotalAmount()===0?0:getTotalCartAmount() + 20}</b>
                        </div>
                    </div>
                    <button onClick = {()=>navigate('/order')} >PROCEED TO CHECKOUT</button>
                </div>

            </div>
        </div>
    )
}
export default Cart