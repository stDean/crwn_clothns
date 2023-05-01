import { Spinner } from "../components"

// this is a component that takes a component as a param and returns a modified component 
const withSpinner = WrapperComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? <Spinner /> : <WrapperComponent {...otherProps} />
}

export default withSpinner