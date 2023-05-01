import { useDispatch } from 'react-redux';

import { IconContainer, ItemCount, ShopIcon } from './carticon.styles';
import { TOGGLE_CART_HIDDEN } from '../../redux/cart/cart.slice';

const CartIcon = () => {

  const dispatch = useDispatch();

  return (
    <IconContainer onClick={() => dispatch(TOGGLE_CART_HIDDEN())}>
      <ShopIcon />
      <ItemCount>0</ItemCount>
    </IconContainer>
  )
}

export default CartIcon