import CollectionPreview from "../collectionpreview/CollectionPreview.component";
import { collection } from "./collectiondata";

const CollectionOverview = () => {
  console.log(collection);
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