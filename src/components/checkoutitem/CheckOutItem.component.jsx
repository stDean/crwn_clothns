import {
  ItemContainer, ImageContainer, Image, NameSpan, QuantityContainer,
  Arrow, ValueSpan, PriceSpan, Remove
} from "./checkoutitem.styles"

const CheckOutItem = ({ item }) => {

  const { name, imageUrl, quantity, price } = item

  return (
    <ItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt="cart item" />
      </ImageContainer>

      <NameSpan>{name}</NameSpan>

      <QuantityContainer>
        <Arrow>&#10094;</Arrow>
        <ValueSpan>{quantity}</ValueSpan>
        <Arrow>&#10095;</Arrow>
      </QuantityContainer>

      <PriceSpan>${price}</PriceSpan>

      <Remove>&#10008;</Remove>
    </ItemContainer>
  )
}

export default CheckOutItem