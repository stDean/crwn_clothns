import { useSelector } from "react-redux";

import CollectionPreview from "../collectionpreview/CollectionPreview.component";
// import { collection } from "../../collectiondata";
import { selectCollectionsForPreview } from "../../redux/shop/shop.slice";

const CollectionOverview = () => {

  // getting the collections from the state
  const collections = useSelector(selectCollectionsForPreview);

  return (
    <div>
      {
        collections.map(({ id, ...restProps }) => (
          <CollectionPreview key={id} {...restProps} />
        ))
      }
    </div>
  )
}

export default CollectionOverview