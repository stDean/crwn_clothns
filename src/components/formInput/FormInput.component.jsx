import { Group, FormValue, FormLabel } from "./forminput.styles";

const FormInput = ({ handleChange, label, ...restProps }) => {
  return (
    <Group>
      <FormValue
        onChange={handleChange}
        {...restProps}
      />

      {
        label ? (
          <FormLabel className={`${restProps.value.length && "shrink"} form-input-label`}>{label}</FormLabel>
        ) : null
      }
    </Group>
  )
}

export default FormInput