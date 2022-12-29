import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import Card from '../components/card';

const FoodView = () => {
    const params = useParams();
    const food_id = params['*'];

    return (
        <div>
            {/* <h1>Comidas de tipo: {food_id}</h1>
            Dependiendo del food_id, se mostrara una carta distinta */}
            <HamburgerCards />
        </div>


    )
}

const CardsContainer = styled.div`

`

const HamburgerCards = () => {
    return (
        <CardsContainer>
            <Card name={"Mix Burger"} url={"https://assets.unileversolutions.com/recipes-v2/232055.jpg?imwidth=350"} description={"Pan artesanal, Torta de carne artesanal de 200g, Filet de pollo, Chuleta ahumada, Tocineta, Cebolla caramelizada y Salsa BQQ. Acompañada de papas fritas o papas en gajos."} price={"5.950"} />
            <Card name={"Mix Burger"} url={"https://assets.unileversolutions.com/recipes-v2/232055.jpg?imwidth=350"} description={"Pan artesanal, Torta de carne artesanal de 200g, Filet de pollo, Chuleta ahumada, Tocineta, Cebolla caramelizada y Salsa BQQ. Acompañada de papas fritas o papas en gajos."} price={"5.950"} />
        </CardsContainer>
    )
}



export default FoodView