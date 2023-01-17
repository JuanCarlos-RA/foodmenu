import styled from "styled-components"
import * as palette from '../utils/colorVariables'

const Cardboard = styled.div` 
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    /* box-shadow: ${palette.fifthColor} 0px 4px 6px, ${palette.sixthColor} 0px 9px 15px -1px, rgba(0, 0, 0, 0.2) 1px -1px 1px inset; */
    box-shadow: rgb(163, 87, 9) 0px 5px 5px 0px, rgb(163, 87, 9) 0px 1px 3px 1px;
    border-radius: 5% 5% 2% 2%;
    border: 2px solid ${palette.secondColor};
    background-color: ${palette.seventhColor} ;
    margin-bottom: 26px;
    margin-top: 80px ;
    width: 320px;
    height: 400px;
    
`

const Img = styled.img`
    left: 100px;
    width:240px ;
    height:200px ;
    /* border: 2px solid ${palette.secondColor}; */
    border-radius: 15% 15% 10% 10%;
    margin-bottom: 20% ;
    margin-top: -25%;
    margin-left: 12% ;
    box-shadow: rgba(14, 30, 37, 0.80) 0px 2px 4px 0px, rgba(14, 30, 37, 1) 0px 2px 16px 0px;
`

const Container = styled.div` 
    /* Este margin-top esta cubriendo un bug de una pequeña franja que 
    queda entre la imagen y el container (Me parece que es una mala practica)*/
    margin-top: -4px ;
    display: flex;
    flex-flow: wrap ;
    background-color: ${palette.secondColor} ;
    justify-content: space-between;

    /* dassda */
`

const Title = styled.h4`
    
    color: ${palette.firstColor};
    margin-left: 10px ;
    text-shadow: -1px 0 ${palette.thirdColor}, 0 1px ${palette.thirdColor}, 
    1px 0 ${palette.thirdColor}, 0 -1px ${palette.thirdColor};
    letter-spacing: 2px ;

    /* box-shadow: rgb(255, 131, 3) 0px 2px 4px 0px, rgb(255, 131, 3) 0px 2px 1px 0px; */
`
const P = styled.p`
    display: flex;
    align-items: center;
    color: ${palette.fourthColor}; 
    font-size:120% ;
    margin-right: 10px;
    text-shadow: -1px 0 white, 0 1px white,
	  1px 0 white, 0 -1px white;
    /* agrega bordes a las letras  */
    /* -webkit-text-stroke: 1px black; */
    color: black; 

`
const TextDescription = styled.p`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif ;
    font-style: normal ;
    font-variant: small-caps ;

`
const ContainerDescription = styled.div`
    padding: 2% ;
    width: 280px;
    border: 2px solid ${palette.fifthColor};
    margin-bottom: -10% ;
    margin-top: -30%;
    margin-left: 4.3% ;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px 0px, rgba(0, 0, 0, 0.1) 0px 0px 10px 0px;
`




//La primera idea que tengo en que solo se muestre una imagen con su nombre y precio, y al hacer cilck se extiende y da más detalles
const Card = ({ name, description, price, url }) => {// Pordria tener otro campo para saber si cuenta con algun acompañamiento (Actualmente esto se maneja en la descripcion)
    return (
        <Cardboard>
            <Img src={url} alt="food" />
            <ContainerDescription>
                <TextDescription>{description}</TextDescription>
            </ContainerDescription>
            <Container>
                <Title><b>{name}</b></Title>
                <P>{price} ₡</P>
            </Container>
        </Cardboard>
    )
}

export default Card