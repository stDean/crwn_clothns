import { IconContainer, ItemCount, ShopIcon } from './carticon.styles';

const CartIcon = () => {
  return (
    <IconContainer>
      <ShopIcon />
      <ItemCount>0</ItemCount>
    </IconContainer>
  )
}

export default CartIcon