import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import CartItem from "../cartitem/CartItem.componrnt";
import CustomButton from "../custombutton/CustomButton.component";
import { DropDown, Items, EmptyText } from "./cartdropdown.styles";
import { TOGGLE_CART_HIDDEN } from "../../redux/cart/cart.slice";


const CartDropDown = () => {

  const navigate = useNavigate();
  const cartItems = useSelector(({ cart }) => cart.cartItems);
  const dispatch = useDispatch();

  return (
    <DropDown>
      <Items>
        {
          cartItems.length ? (
            cartItems.map(cartItem => (
              <CartItem key={cartItem.id} item={cartItem} />
            ))
          ) : (
            <EmptyText>Your Cart Is Empty</EmptyText>
          )
        }
      </Items>

      <CustomButton
        onClick={() => {
          navigate("/checkout")
          dispatch(TOGGLE_CART_HIDDEN())
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </DropDown>
  )
}

export default CartDropDown