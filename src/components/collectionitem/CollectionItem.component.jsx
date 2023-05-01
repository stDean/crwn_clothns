import { useDispatch } from "react-redux";

import CustomButton from "../custombutton/CustomButton.component";
import {
  CollectionFooter, ImgContainer, ItemContainer, NameText, PriceText
} from "./collectionitem.styles";
import { ADD_CART_ITEM } from "../../redux/cart/cart.slice";

const CollectionItem = ({ item }) => {

  const { name, imageUrl, price } = item;
  const dispatch = useDispatch();

  return (
    <ItemContainer className='collection-item'>
      <ImgContainer imageUrl={imageUrl} className="image" />

      <CollectionFooter>
        <NameText>{name}</NameText>
        <PriceText>${price}</PriceText>
      </CollectionFooter>

      <CustomButton
        inverted
        className="custom-button"
        onClick={() => dispatch(ADD_CART_ITEM(item))}
      >
        ADD TO CART
      </CustomButton>
    </ItemContainer>
  )
}

export default CollectionItem