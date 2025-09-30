import {Offcanvas, Stack} from "react-bootstrap";
import {useShoppingCart} from "../context/ShoppingCartContext.tsx";
import {CartItem} from "./CartItem";

type CartProps = {
    showCart: boolean;
}

export function Cart({showCart} : CartProps) {

    const {isCartClosed, cartItems} = useShoppingCart();

    return (
        <>
            <Offcanvas show={showCart} onHide={isCartClosed} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>My Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>

                    {cartItems.map(item => (
                        <CartItem
                        key={item.id}
                        {...item}
                        />
                    ))}

                    <div>

                        Total: {cartItems.reduce((total, cartItem) => {
                         return total + cartItem.price * cartItem.quantity
                    }, 0)}
                    </div>


                </Offcanvas.Body>
            </Offcanvas>
        </>

    )
}
