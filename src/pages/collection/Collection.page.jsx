import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { HeadText, CollectionContainer, Items } from "./collection.styles";
import { selectCollection } from "../../redux/shop/shop.slice";
import { CollectionItem } from "../../components";

const Collection = () => {

  const { collectionId } = useParams();
  const collections = useSelector(selectCollection(collectionId))
  const { title, items } = collections

  return (
    <CollectionContainer>
      <HeadText>{title}</HeadText>

      <Items>
        {
          items.map(item => (
            <CollectionItem
              item={item}
              key={item.id}
            />
          ))
        }
      </Items>
    </CollectionContainer>
  )
}

export default Collection