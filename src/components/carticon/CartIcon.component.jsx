import { useDispatch, useSelector } from 'react-redux';

import { IconContainer, ItemCount, ShopIcon } from './carticon.styles';
import { TOGGLE_CART_HIDDEN, selectCartItemsCount } from '../../redux/cart/cart.slice';

const CartIcon = () => {

  const dispatch = useDispatch();
  const itemCount = useSelector(selectCartItemsCount);

  return (
    <IconContainer onClick={() => dispatch(TOGGLE_CART_HIDDEN())}>
      <ShopIcon />
      <ItemCount>{itemCount}</ItemCount>
    </IconContainer>
  )
}

export default CartIcon