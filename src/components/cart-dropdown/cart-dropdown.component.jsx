import { useContext } from "react";

import { CartContext } from '../../contexts/cart.context';

import CartItem from "../cart-item/cart-item.component";

import './cart-dropdown.styles.scss';

import Button from '../button/button.component';

const CartDropdown = () => {
    const {cartItems } = useContext(CartContext);

    return (
        <div className="cart-dropdown-cotainer">
            <div className="cart-items">
                {cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item} />
                ))}
            </div>
            <Button>Go to checkout</Button>
        </div>
    )
};

export default CartDropdown;