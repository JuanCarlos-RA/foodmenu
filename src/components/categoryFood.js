import styled from "styled-components";
import { Link } from 'react-router-dom'
import * as palette from '../utils/colorVariables'

const Categoryboard = styled.div`
    /* box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);  */
    box-shadow: ${palette.fifthColor} 0px 2px 4px, ${palette.sixthColor} 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    margin:4px 4px 20px 4px;
    
    padding-bottom: 1px;
    border-radius: 5% 5% 2% 2%;
    border: 2px solid ${palette.secondColor};
    height: 140px ;
    width: 160px ;
    background-color: ${palette.secondColor} ;
    text-align: center;
`
const FoodImg = styled.img`
    width:160px ;
    height:105px ;
    border-radius: 5% 5% 0 0;
    margin: 0px 0px -15px 0px;
`

const Title = styled.h4`
    color: ${palette.thirdColor};
    
`

const BtnLink = styled(Link)`
    text-decoration-line: none ;
`
const CategoryFood = ({ category, url }) => {
    return (
        <BtnLink to={'/foodView/' + category}>
            <Categoryboard>
                <FoodImg src={url} alt="food" />
                <Title>{category}</Title>
            </Categoryboard>
        </BtnLink>
    )
}


export default CategoryFood