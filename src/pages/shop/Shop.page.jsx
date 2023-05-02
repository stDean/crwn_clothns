import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onSnapshot, collection } from "firebase/firestore";

import { CollectionOverview } from "../../components"
import { convertCollectionSnapshotToMap, db } from "../../services/firebase";
import { UPDATE_COLLECTIONS, selectCollections } from "../../redux/shop/shop.slice";
import withSpinner from "../../HOC/withSpinner";
import Collection from "../collection/Collection.page";

const CollectionOverviewWithSpinner = withSpinner(CollectionOverview);
const CollectionWithSpinner = withSpinner(Collection);

const Shop = () => {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const collectionData = useSelector(selectCollections);
  console.log(collectionData);

  useEffect(() => {
    // get a reference to the collection in the db called collections
    const collectionRef = collection(db, 'collections');
    onSnapshot(collectionRef, async snapShot => {
      const collectionMap = convertCollectionSnapshotToMap(snapShot);
      dispatch(UPDATE_COLLECTIONS(collectionMap));
      setLoading(false);
    });
  }, [dispatch])

  return (
    <>
      <Routes>
        <Route path="/" element={<CollectionOverviewWithSpinner isLoading={loading} />} />
        <Route path="/:collectionId" element={<CollectionWithSpinner isLoading={loading} />} />
      </Routes>
    </>
  )
}

export default Shop