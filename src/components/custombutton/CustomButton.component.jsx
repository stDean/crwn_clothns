import { Button } from "./custombutton.styles"

const CustomButton = ({ children, isGoogleButton, inverted, ...restProps }) => {
  return (
    <Button
      inverted={inverted}
      isGoogleButton={isGoogleButton}
      {...restProps}
    >
      {children}
    </Button>
  )
}

export default CustomButton