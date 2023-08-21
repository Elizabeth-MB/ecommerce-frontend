/* eslint-disable react/prop-types */
import { Button as ReactstrapButton } from 'reactstrap';

const Button = ({ children, forHtml, color, size, onClick }) => {
    return (
        <ReactstrapButton color={color} className={size} for={forHtml} onClick={onClick}>{children}</ReactstrapButton>
    )
}

export default Button
