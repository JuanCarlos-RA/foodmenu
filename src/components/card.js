import styled from "styled-components"
import * as palette from '../utils/colorVariables'

const Cardboard = styled.div` 
   
    box-shadow: rgb(163, 87, 9) 0px 5px 5px 0px, rgb(163, 87, 9) 0px 1px 3px 1px;
    border-radius: 5% 5% 2% 2%;
    border: 2px solid ${palette.secondColor};
    background-color: ${palette.fourthColor} ;
    width: 345px;
    height: auto;

    margin: 0px auto;
    margin-bottom: 25%;
    display: flex;
    flex-flow: column ;
    justify-content: space-between ;


    transition: width 2s, height 4s;
    
`

const Img = styled.img`
    width:240px ;
    height:200px ;
    border-radius: 15% 15% 10% 10%;
    box-shadow: rgba(14, 30, 37, 0.80) 0px 2px 4px 0px, rgba(14, 30, 37, 1) 0px 2px 16px 0px;

    margin: 0px auto ;
    margin-top: -20%;
`

const ContainerDetails = styled.div` 
    
    background-color: ${palette.secondColor} ;

    display: flex;
    flex-flow: row ;
    justify-content: space-between;
    padding-left: 2% ;
    padding-right: 2% ;
`

const Title = styled.h4`
    
    color: ${palette.firstColor};
    text-shadow: -1px 0 ${palette.thirdColor}, 0 1px ${palette.thirdColor}, 
    1px 0 ${palette.thirdColor}, 0 -1px ${palette.thirdColor};
    letter-spacing: 2px ;

`
const Price = styled.p`
    color: ${palette.fourthColor}; 
    font-size:120% ;
    text-shadow: -1px 0 white, 0 1px white,
	  1px 0 white, 0 -1px white;
    color: black; 

`
const TextDescription = styled.p`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-variant: small-caps ;

    font-weight: bold ;

`
const ContainerDescription = styled.div`
    padding: 2% ;
    border-left: 2px solid ${palette.fifthColor};
    border-right: 2px solid ${palette.fifthColor};
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px 0px, rgba(0, 0, 0, 0.1) 0px 0px 10px 0px;
    
    width: 90%;
    margin: 0px auto;
    margin-top: 5%;
    margin-bottom: 5% ;
`




//La primera idea que tengo en que solo se muestre una imagen con su nombre y precio, y al hacer cilck se extiende y da más detalles
const Card = ({ name, description, price, url }) => {// Pordria tener otro campo para saber si cuenta con algun acompañamiento (Actualmente esto se maneja en la descripcion)
    return (
        <Cardboard>
            <Img src={url} alt="food" />
            <ContainerDescription>
                <TextDescription>{description}</TextDescription>
            </ContainerDescription>
            <ContainerDetails>
                <Title><b>{name}</b></Title>
                <Price>{price} ₡</Price>
            </ContainerDetails>
        </Cardboard>
    )
}

export default Card