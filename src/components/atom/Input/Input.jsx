/* eslint-disable react/prop-types */
import { Input as ReactstrapInput} from "reactstrap"

const Input = ({type, id, name, placeholder, className, value, onChange}) => {
  return (
    <div>
      <ReactstrapInput id={id} name={name} type={type} placeholder={placeholder} className={className} value={value} onChange={onChange}></ReactstrapInput>
    </div>
  )
}

export default Input
