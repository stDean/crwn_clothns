import { Items, Image, ItemDetails, NameText, PriceText } from "./cartitem.styles";

const CartItem = ({ item: { imageUrl, name, price, quantity } }) => {
  return (
    <Items>
      <Image src={imageUrl} alt="cart item" />

      <ItemDetails>
        <NameText>{name}</NameText>
        <PriceText>{quantity} x ${price}</PriceText>
      </ItemDetails>
    </Items>
  )
}

export default CartItem