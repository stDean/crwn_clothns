import MenuItem from "../menuitem/MenuItem.component";
import { DirectoryContainer } from "./directory.styles";
import { sections } from "./sectondata";

const Directory = () => {
  return (
    <DirectoryContainer>
      {
        sections.map(({ id, ...otherProps }) => (
          <MenuItem key={id} {...otherProps} />
        ))
      }
    </DirectoryContainer>
  )
}

export default Directory