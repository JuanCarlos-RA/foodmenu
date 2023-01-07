import styled from "styled-components"


const Cardboard = styled.div` 
    display: inline-block ;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    margin: 5% ;
    border-radius: 5% 5% 0 0;
`
const Img = styled.img`
    width:220px ;
    height:210px ;
    border-radius: 5% 5% 0 0;
`

const Container = styled.div` 
    /* Este margin-top esta cubriendo un bug de una pequeña franja que 
    queda entre la imagen y el container (Me parece que es una mala practica)*/
    margin-top: -5px ;
    display: flex;
    padding: 2px 16px;
    background-color: white ;
    justify-content: space-between;
`

const Title = styled.h4`

`
const P = styled.p`
    display: flex;
    align-items: center;

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