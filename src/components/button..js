import styled from "styled-components";
import { Link } from 'react-router-dom'

const Btn = styled.button` 
    display: block ;
    margin: 0px auto;
    margin-top: 10px ;
`

const Button = ({ children }) => {
    return (
        <Link to={'/foodView/' + children}>
            <Btn>{children}</Btn>
        </Link>
    )
}

export default Button