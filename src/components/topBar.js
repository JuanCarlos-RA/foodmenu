import styled from "styled-components";
import * as palette from '../utils/colorVariables'

const Bar = styled.div` 
    background-color: transparent;
    text-align: center ;
    padding: 1%;
    box-shadow: rgba(0, 0, 0, 0.80) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
   
    background-color: rgba(255, 255, 255, .15);  
    backdrop-filter: blur(5px);
    border-bottom-color: transparent ;

    position:fixed;
    top:0px; 
    width:97.9%;
    
`

const Title = styled.h1`

    margin: 0%;
    color: ${palette.fourthColor};
    text-decoration: underline;

`

// const Design = styled.div`
//     display: flex;
//     background-color: burlywood ;
//     height: 2px;
//     width: 100px;
//     position:absolute;  
// `

const TopBar = () => {
    return (
        <Bar>
            <Title>
                CUQUI'S FOOD
            </Title>
        </Bar>
    )
}


export default TopBar