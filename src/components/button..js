import styled from "styled-components";
import { Link } from 'react-router-dom'


const BtnLink = styled(Link)`
    text-decoration-line:none ;
`

const Btn = styled.button` 
    display: block ;
    margin: 0px auto;
    margin-top: 10px ;
`

const Button = ({ children }) => {
    return (
        <BtnLink to={'/foodView/' + children}>
            <Btn>{children}</Btn>
        </BtnLink>
    )
}

export default Button