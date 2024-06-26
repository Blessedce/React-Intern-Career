import React, { useContext } from "react";
import './CartItem.css';
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from '../Assets/cart_cross_icon.png';
import all_product from "../Assets/all_product";

const CartItem = () => {
    const { getTotalCartAmount, cartItems, removeFromCart } = useContext(ShopContext);

    return (
        <div className="cartitem">
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {Object.keys(cartItems).map((key) => {
                if (cartItems[key] > 0) {
                    const product = all_product.find((p) => p.id === parseInt(key));
                    return (
                        <div key={key}>
                            <div className="cartitems-format cartitems-format-main">
                                <img className='carticon-product-icon' src={product.image} alt="" />
                                <p>{product.name}</p>
                                <p>${product.price}</p>
                                <button className="cartitems-quantity">{cartItems[key]}</button>
                                <p>${product.price * cartItems[key]}</p>
                                <img className='cartitem-remove-icon' src={remove_icon} onClick={() => removeFromCart(parseInt(key))} alt="" />
                            </div>
                            <hr />
                        </div>
                    );
                }
            
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>cart total</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>

                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitem-promocode">
                    <p>If you have a promocode, enter it here!</p>
                    <div className="cartitem-promo-box">
                        <input type="text" placeholder="Promo code" />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;