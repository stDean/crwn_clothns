import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.slice";

import {
  CheckOutContainer, CheckOutHeader, HeaderBlock, SpanText, Total, TotalText
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
          checkOutHeader.map(item => (
            <HeaderBlock>
              <SpanText>{item}</SpanText>
            </HeaderBlock>
          ))
        }
      </CheckOutHeader>

      {
        // map through all ele in the cart and render the checkout items
        cartItems.map(cartItem => (
          <CheckOutItem key={cartItem.id} item={cartItem} />
        ))
      }

      <Total>
        <TotalText>Total: ${subTotal}</TotalText>
      </Total>
    </CheckOutContainer>
  )
}

export default Checkout