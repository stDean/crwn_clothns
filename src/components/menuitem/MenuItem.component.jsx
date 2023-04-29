import {
  MenuContainer, ImageContainer, ContentContainer, HeadText, Subtitle
} from "./menuitem.styles";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  return (
    <MenuContainer size={size}>
      <ImageContainer imageUrl={imageUrl} className="background-image" />

      <ContentContainer className="content">
        <HeadText>{title.toUpperCase()}</HeadText>
        <Subtitle>Shop Now</Subtitle>
      </ContentContainer>
    </MenuContainer>
  )
}

export default MenuItem