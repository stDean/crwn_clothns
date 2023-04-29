import CustomButton from "../custombutton/CustomButton.component";
import {
  CollectionFooter, ImgContainer, ItemContainer, NameText, PriceText
} from "./collectionitem.styles";

const CollectionItem = ({ item }) => {

  const { name, imageUrl, price } = item

  return (
    <ItemContainer>
      <ImgContainer imageUrl={imageUrl} className="image" />

      <CollectionFooter>
        <NameText>{name}</NameText>
        <PriceText>${price}</PriceText>
      </CollectionFooter>

      <CustomButton
        inverted
        className="custom-button"
      >
        ADD TO CART
      </CustomButton>
    </ItemContainer>
  )
}

export default CollectionItem