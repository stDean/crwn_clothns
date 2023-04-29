import { useNavigate, useLocation } from "react-router-dom";

import { CollectionContainer, PreviewContainer, TitleText } from "./collectionpreview.styles";
import CollectionItem from "../collectionitem/CollectionItem.component";

const CollectionPreview = ({ title, items, routeName }) => {

  const navigate = useNavigate();
  const location = useLocation()

  return (
    <CollectionContainer>
      <TitleText
        onClick={() => navigate(`${location.pathname}/${routeName}`)}
      >{title}</TitleText>

      <PreviewContainer>
        {
          items.filter((_, idx) => idx < 4).map(item => (
            <CollectionItem key={item.id} item={item} />
          ))
        }
      </PreviewContainer>
    </CollectionContainer>
  )
}

export default CollectionPreview