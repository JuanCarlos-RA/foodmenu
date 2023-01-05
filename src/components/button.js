import styled from "styled-components";
import { Link } from 'react-router-dom'


const BtnLink = styled(Link)`
    text-decoration-line:none ;
`

const Btn = styled.button` 
    float: left;
    font-size: x-small;
    margin-top: 10px ;
    margin-bottom:10px;
    margin-left: 10px ;
    margin-right:5px;
    height: 120px;
    width: 170px;
    align-items: left ;
    border-radius: 10% ;
    border-color: #FF8303;
    border-spacing: 10px  ;
    
`

const Button = ({ children }) => {
    return (
        <BtnLink to={'/foodView/' + children}>
            <Btn>{children}</Btn>
        </BtnLink>
    )
}

export default Button