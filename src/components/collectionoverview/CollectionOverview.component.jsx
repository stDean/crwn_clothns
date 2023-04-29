import CollectionPreview from "../collectionpreview/CollectionPreview.component";
import { collection } from "../../collectiondata";

const CollectionOverview = () => {
  return (
    <div>
      {
        collection.map(({ id, ...restProps }) => (
          <CollectionPreview key={id} {...restProps} />
        ))
      }
    </div>
  )
}

export default CollectionOverview