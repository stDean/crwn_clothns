import { useDispatch } from "react-redux";

import {
  ItemContainer, ImageContainer, Image, NameSpan, QuantityContainer,
  Arrow, ValueSpan, PriceSpan, Remove
} from "./checkoutitem.styles";
import { ADD_CART_ITEM, CLEAR_CART_ITEM, REMOVE_CART_ITEM } from "../../redux/cart/cart.slice";

const CheckOutItem = ({ item }) => {

  const { name, imageUrl, quantity, price } = item;
  const dispatch = useDispatch();

  return (
    <ItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt="cart item" />
      </ImageContainer>

      <NameSpan>{name}</NameSpan>

      <QuantityContainer>
        <Arrow
          onClick={() => dispatch(REMOVE_CART_ITEM(item))}
        >
          &#10094;
        </Arrow>
        <ValueSpan>{quantity}</ValueSpan>
        <Arrow
          onClick={() => dispatch(ADD_CART_ITEM(item))}
        >&#10095;
        </Arrow>
      </QuantityContainer>

      <PriceSpan>${price}</PriceSpan>

      <Remove
        onClick={() => dispatch(CLEAR_CART_ITEM(item))}
      >
        &#10008;
      </Remove>
    </ItemContainer>
  )
}

export default CheckOutItem