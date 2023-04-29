import MenuItem from "../menuitem/MenuItem.component";
import { DirectoryContainer } from "./directory.styles";
import { sections } from "./sectondata";

const Directory = () => {
  console.log(sections);
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