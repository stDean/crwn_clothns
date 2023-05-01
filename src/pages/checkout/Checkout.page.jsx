import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.slice";

import {
  CheckOutContainer, CheckOutHeader, HeaderBlock, SpanText, Total, TotalText, EmptyText
} from "./checkout.styles";
import { CheckOutItem } from "../../components";

const Checkout = () => {

  const cartItems = useSelector(selectCartItems);
  const subTotal = useSelector(selectCartTotal);
  const checkOutHeader = ["Products", "Descriptions", "Quantity", "Price", "Remove"]

  return (
    <CheckOutContainer>
      <CheckOutHeader>
        {
          checkOutHeader.map((item, idx) => (
            <HeaderBlock key={idx}>
              <SpanText>{item}</SpanText>
            </HeaderBlock>
          ))
        }
      </CheckOutHeader>

      {
        // map through all ele in the cart and render the checkout items
        cartItems.length ? (
          cartItems.map(cartItem => (
            <CheckOutItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyText>Your Cart is Empty <a href="/shop">SHOP NOW</a></EmptyText>
        )
      }

      <Total>
        <TotalText>Total: ${subTotal}</TotalText>
      </Total>
    </CheckOutContainer>
  )
}

export default Checkout