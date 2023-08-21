/* eslint-disable react/prop-types */
import { Label as ReactstrapLabel } from 'reactstrap';

const Label = ({ children, forHtml }) => {
    // const Label = ({props}) => {
    return (
        // <ReactstrapLabel for="user">{props.children}</ReactstrapLabel>
        <ReactstrapLabel for={forHtml} className='bg-success'>{children}</ReactstrapLabel>
    )
}

export default Label
