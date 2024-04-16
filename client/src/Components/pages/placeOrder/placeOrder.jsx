import React from 'react';
import './placeOrder.css'
import { StoreContext } from '../../context/StoreContext';

const placeOrder = () => { 

    const { getTotalCartAmount } = useContext(StoreContext)
    return (
      <>
        <form className='place-order'>
            <div className='place-order-left'>
                <p className='title'>Delivery Information</p>
                <div className='multi-fields'>

                    <input type="text" placeholder='FirstName' />
                    <input type="text" placeholder='LastName' />

                </div>
                <input type="text" placeholder='Email address' />
                <input type="text" placeholder='Sreet' />

                <div className='multi-fields'>
                    <input type="text" placeholder='City' />
                    <input type="text" placeholder='Province' />
                </div>
                <div className='multi-fields'>
                    <input type="text" placeholder='Postal code' />
                    <input type="text" placeholder='Country' />
                </div>

            </div>
            <div className='place-order-right'>
                <div className="cart-total">
                    <h1>Cart Total</h1>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>R{getTotalCartAmount()}</p>
                        </div>

                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>R{getTotalCartAmount() === 0 ? 0 : 2}</p>
                        </div>
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>R{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 20}</b>
                        </div>
                    </div>
                    <button >PROCEED TO PAYMENT</button>
                </div>


            </div>

        </form>
     </>
    );
}
export default placeOrder;