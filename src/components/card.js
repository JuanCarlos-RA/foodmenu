import styled from "styled-components"
import * as palette from '../utils/colorVariables'

const Cardboard = styled.div` 
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    box-shadow: ${palette.fifthColor} 0px 2px 4px, ${palette.sixthColor} 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    border-radius: 5% 5% 2% 2%;
    border: 2px solid ${palette.secondColor};
    background-color: ${palette.seventhColor} ;
    margin-bottom: 20px;
    width: 320px;
    height: 250px;
    
`

const Img = styled.img`
    
    width:150px ;
    height:150px ;
    border: 2px solid ${palette.secondColor};
    border-radius: 8% 5% 0 0;
    margin-bottom: 20% ;
    margin-top: 0.6%;
    margin-left: 0.6% ;
    
`

const Container = styled.div` 
    /* Este margin-top esta cubriendo un bug de una pequeña franja que 
    queda entre la imagen y el container (Me parece que es una mala practica)*/
    margin-top: -5px ;
    display: flex;
    background-color: ${palette.secondColor} ;
    justify-content: space-between;
    
`

const Title = styled.h4`
    color: ${palette.thirdColor};
    margin-left: 10px ;
    /* box-shadow: rgb(255, 131, 3) 0px 2px 4px 0px, rgb(255, 131, 3) 0px 2px 1px 0px; */
`
const P = styled.p`
    display: flex;
    align-items: center;
    color: ${palette.fourthColor};
    text-decoration: underline ;
    font-size:120% ;
    margin-right: 10px;
    /* agrega bordes a las letras  */
    /* -webkit-text-stroke: 1px black; */
    color: white; 

`

//La primera idea que tengo en que solo se muestre una imagen con su nombre y precio, y al hacer cilck se extiende y da más detalles
const Card = ({ name, description, price, url }) => {// Pordria tener otro campo para saber si cuenta con algun acompañamiento (Actualmente esto se maneja en la descripcion)
    return (
        <Cardboard>
            <Img src={url} alt="food" />
            <Container>
                <Title><b>{name}</b></Title>
                <P>{price} ₡</P>
            </Container>
        </Cardboard>
    )
}

export default Card