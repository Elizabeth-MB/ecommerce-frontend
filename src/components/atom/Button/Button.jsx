/* eslint-disable react/prop-types */
import { Button as ReactstrapButton } from 'reactstrap';

const Button = ({ children, forHtml, size }) => {
    return (
        <ReactstrapButton className={size} for={forHtml}>{children}</ReactstrapButton>
    )
}

export default Button
