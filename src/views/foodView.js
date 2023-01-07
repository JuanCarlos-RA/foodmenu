import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import Card from '../components/card';
import TopBar from '../components/topBar';

const FoodView = () => {
    const params = useParams();
    const food_id = params['*'];

    // Esta hecho de esta forma por que no tenemos base de datos
    // pero la forma correcta seria, tener un cards container y hacer un llamado dinamico de lo que se debe listar
    switch (food_id) {
        case 'HAMBURGUESAS':
            return (
                <div>
                    <TopBar />
                    <HamburgerCards />
                </div>
            );
        case 'QUESADILLAS':
            return (
                <div>
                    <TopBar />
                    <QuesadillaCards />
                </div>
            );
        case 'NACHOS':
            return (
                <div>
                    <TopBar />
                    <NachoCards />
                </div>
            );
        case 'SANDWICH':
            return (
                <div>
                    <TopBar />
                    <SandwichCards />
                </div>
            );
        case 'PATACONES':
            return (
                <div>
                    <TopBar />
                    <PataconCards />
                </div>
            );

        case 'ALITAS':
            return (
                <div>
                    <TopBar />
                    <wingCards />
                </div>
            );
        case 'CARNES':
            return (
                <div>
                    <TopBar />
                    <MeatCards />
                </div>
            );
        case 'TACOS':
            return (
                <div>
                    <TopBar />
                    <TacoCards />
                </div>
            );
        case 'PLATOS MIXTOS':
            return (
                <div>
                    <TopBar />
                    <MixedDisheCards />
                </div>
            );
        case 'EXTRAS':
            return (
                <div>
                    <TopBar />
                    <ExtraCards />
                </div>
            );


        default:
            <h1>Error 404</h1>;
    }
}

const CardsContainer = styled.div`

`

// Esta hecho de esta forma por que no tenemos base de datos
// pero la forma correcta seria, tener un cards container y hacer un llamado dinamico de lo que se debe listar

const HamburgerCards = () => {
    return (
        <CardsContainer>
            <Card name={"Hamburguesa Sencilla"}
                url={"/sinImagen.jpg"}
                description={"Pan artesanal, Torta de carne artesanal de 200 o filet de pollo, Lechuga, Tomate, Queso blanco, Queso amarillo, Tocineta y Salsas. Acompañada de papas fritas o papas en gajos"}
                price={"3.750"}
            />
            <Card name={"Hamburguesa de Lomo"}
                url={"/sinImagen.jpg"}
                description={"Pan artesanal, Fajitas de lomo salteadas, Lechuga, Tomate, Queso blanco, Queso amarillo, Tocineta y Salsas. Acompañada de papas fritas o papas en gajos."}
                price={"5,250"}
            />
            <Card name={"BBQ Burger"}
                url={"/sinImagen.jpg"}
                description={"Pan artesanal, torta de carne artesanal de 2008, Tocineta, Pepinillos, Cebolla caramelizada, Queso amarillo, Queso blanco, Salsa B8Q. Acompañada de papas fritas o papas en gajos."}
                price={"4.850"}
            />
            <Card name={"Hot Cuqui"}
                url={"/sinImagen.jpg"}
                description={"Pan artesanal, Torta de carne artesanal de 2008, Chile jalapeño, Cebolla caramelizada, Hongos salteados, Tocineta, Pepinillos, Queso amarillo, Queso blanco, Salsa picante Mamen y Salsas. Acompañada de papas fritas o papas en gajos."}
                price={"4.640"}
            />
            <Card name={"Pata Cuqui"}
                url={"/sinImagen.jpg"}
                description={"Dos patacones, Torta de carne artesanal de 2008, Lechuga, Tomate, Tocineta, Queso amarillo, Queso blanco y Salsas. Acompañada de papas fritas o papas en gajos."}
                price={"4.550"}
            />
            <Card name={"Cuqui Monster"}
                url={"/sinImagen.jpg"}
                description={"Pan artesanal, 2 tortas de carne artesanal de 2008 c/u, Pepinillos, Tocineta, Cebolla caramelizada, Queso blanco, Queso amarillo, Guacamole y Salsas. Acompañada de papas fritas o papas en gajos."}
                price={"5.950"}
            />
            <Card name={"Chicken Cuqui"}
                url={"/sinImagen.jpg"}
                description={"Pan artesanal, 2 filet de pollo, Pepinillos, Tocineta, Cebolla caramelizada, Queso blanco, Queso amarillo, Guacamole y Salsas. Acompañada de papas fritas o papas en gajos."}
                price={"5.950"}
            />
            <Card name={"Birria Burger"}
                url={"/sinImagen.jpg"}
                description={"Pan artesanal, Carne birria, Tocineta, Torta de carne artesanal de 200g, Cebolla, Culantro, Queso amarillo, Queso blanco y Salsa BBQ. Acompañada de papas fritas o papas en gajos. "}
                price={"6.100"}
            />
            <Card name={"Yellow Chess Burger"}
                url={"/sinImagen.jpg"}
                description={"Pan artesanal, 2 tortas de carne artesanal de 200g c/u, Tocineta, Lechuga, Tomate, Guacamole, Salsas, Bañada en queso Cheddar. Acompañada de papas fritas o papas en gajos."}
                price={"6.250"}
            />
            <Card name={"White Chess Burger"}
                url={"/sinImagen.jpg"}
                description={"Pan artesanal, 2 tortas de carne artesanal de 2008 c/u, Tocineta, Lechuga, Tomate, Guacamole, Salsas, Bañada en queso fundido. Acompañada de papas fritas o papas en gajos."}
                price={"6.250"}
            />
            <Card name={"4x4 OFF ROAD"}
                url={"/sinImagen.jpg"}
                description={"Pan artesanal, 4 tortas de carne artesanal de 2008 c/u, Tocineta, Cebolla caramelizada, Hongos salteados, Guacamole, Pepinillos, Queso amarillo, Queso blanco, Bañada en queso fundido. Acompañada de papas fritas o papas en gajos."}
                price={"7.850"}
            />
            <Card name={"Mini Hamburguesa"}
                url={"/sinImagen.jpg"}
                description={"Mini hamburguesas, pan artesanal, torta de carne artesanal 120g, Lechuga, Tomate, Queso blanco, Queso amarillo y Salsas. Acompañadas de papas fritas o papas en gajos."}
                price={"3.150"}
            />
            <Card name={"Mini Hamburguesas"}
                url={"/sinImagen.jpg"}
                description={"2 mini hamburguesas, pan artesanal, torta de carne artesanal de 1208, Lechuga, Tomate, Queso blanco, Queso amarillo y Salsas, Acompañadas de papas fritas o papas en gajos."}
                price={"3.950"}
            />
            <Card name={"Mix Burger"}
                url={"/sinImagen.jpg"}
                description={"Pan artesanal, Torta de carne artesanal de 200g, Filet de pollo, Chuleta ahumada, Tocineta, Cebolla caramelizada y Salsa BBQ. Acompañada de papas fritas o papas en gajos."}
                price={"5.950"}
            />
        </CardsContainer>
    )
}

const QuesadillaCards = () => {
    return (
        <CardsContainer>
            <Card name={"Mix Burger"} url={"https://assets.unileversolutions.com/recipes-v2/232055.jpg?imwidth=350"} description={"Pan artesanal, Torta de carne artesanal de 200g, Filet de pollo, Chuleta ahumada, Tocineta, Cebolla caramelizada y Salsa BQQ. Acompañada de papas fritas o papas en gajos."} price={"5.950"} />
        </CardsContainer>
    )
}

const NachoCards = () => {
    return (
        <CardsContainer>
            <Card name={"Mix Burger"} url={"https://assets.unileversolutions.com/recipes-v2/232055.jpg?imwidth=350"} description={"Pan artesanal, Torta de carne artesanal de 200g, Filet de pollo, Chuleta ahumada, Tocineta, Cebolla caramelizada y Salsa BQQ. Acompañada de papas fritas o papas en gajos."} price={"5.950"} />
            <Card name={"Mix Burger"} url={"https://assets.unileversolutions.com/recipes-v2/232055.jpg?imwidth=350"} description={"Pan artesanal, Torta de carne artesanal de 200g, Filet de pollo, Chuleta ahumada, Tocineta, Cebolla caramelizada y Salsa BQQ. Acompañada de papas fritas o papas en gajos."} price={"5.950"} />
        </CardsContainer>
    )
}

const SandwichCards = () => {
    return (
        <CardsContainer>
            <Card name={"Mix Burger"} url={"https://assets.unileversolutions.com/recipes-v2/232055.jpg?imwidth=350"} description={"Pan artesanal, Torta de carne artesanal de 200g, Filet de pollo, Chuleta ahumada, Tocineta, Cebolla caramelizada y Salsa BQQ. Acompañada de papas fritas o papas en gajos."} price={"5.950"} />
            <Card name={"Mix Burger"} url={"https://assets.unileversolutions.com/recipes-v2/232055.jpg?imwidth=350"} description={"Pan artesanal, Torta de carne artesanal de 200g, Filet de pollo, Chuleta ahumada, Tocineta, Cebolla caramelizada y Salsa BQQ. Acompañada de papas fritas o papas en gajos."} price={"5.950"} />
        </CardsContainer>
    )
}

const PataconCards = () => {
    return (
        <CardsContainer>
            <Card name={"Mix Burger"} url={"https://assets.unileversolutions.com/recipes-v2/232055.jpg?imwidth=350"} description={"Pan artesanal, Torta de carne artesanal de 200g, Filet de pollo, Chuleta ahumada, Tocineta, Cebolla caramelizada y Salsa BQQ. Acompañada de papas fritas o papas en gajos."} price={"5.950"} />
            <Card name={"Mix Burger"} url={"https://assets.unileversolutions.com/recipes-v2/232055.jpg?imwidth=350"} description={"Pan artesanal, Torta de carne artesanal de 200g, Filet de pollo, Chuleta ahumada, Tocineta, Cebolla caramelizada y Salsa BQQ. Acompañada de papas fritas o papas en gajos."} price={"5.950"} />
        </CardsContainer>
    )
}
const wingCards = () => {
    return (
        <CardsContainer>
            <Card name={"Mix Burger"} url={"https://assets.unileversolutions.com/recipes-v2/232055.jpg?imwidth=350"} description={"Pan artesanal, Torta de carne artesanal de 200g, Filet de pollo, Chuleta ahumada, Tocineta, Cebolla caramelizada y Salsa BQQ. Acompañada de papas fritas o papas en gajos."} price={"5.950"} />
            <Card name={"Mix Burger"} url={"https://assets.unileversolutions.com/recipes-v2/232055.jpg?imwidth=350"} description={"Pan artesanal, Torta de carne artesanal de 200g, Filet de pollo, Chuleta ahumada, Tocineta, Cebolla caramelizada y Salsa BQQ. Acompañada de papas fritas o papas en gajos."} price={"5.950"} />
        </CardsContainer>
    )
}


const MeatCards = () => {
    return (
        <CardsContainer>
            <Card name={"Mix Burger"} url={"https://assets.unileversolutions.com/recipes-v2/232055.jpg?imwidth=350"} description={"Pan artesanal, Torta de carne artesanal de 200g, Filet de pollo, Chuleta ahumada, Tocineta, Cebolla caramelizada y Salsa BQQ. Acompañada de papas fritas o papas en gajos."} price={"5.950"} />
            <Card name={"Mix Burger"} url={"https://assets.unileversolutions.com/recipes-v2/232055.jpg?imwidth=350"} description={"Pan artesanal, Torta de carne artesanal de 200g, Filet de pollo, Chuleta ahumada, Tocineta, Cebolla caramelizada y Salsa BQQ. Acompañada de papas fritas o papas en gajos."} price={"5.950"} />
        </CardsContainer>
    )
}

const TacoCards = () => {
    return (
        <CardsContainer>
            <Card name={"Mix Burger"} url={"https://assets.unileversolutions.com/recipes-v2/232055.jpg?imwidth=350"} description={"Pan artesanal, Torta de carne artesanal de 200g, Filet de pollo, Chuleta ahumada, Tocineta, Cebolla caramelizada y Salsa BQQ. Acompañada de papas fritas o papas en gajos."} price={"5.950"} />
            <Card name={"Mix Burger"} url={"https://assets.unileversolutions.com/recipes-v2/232055.jpg?imwidth=350"} description={"Pan artesanal, Torta de carne artesanal de 200g, Filet de pollo, Chuleta ahumada, Tocineta, Cebolla caramelizada y Salsa BQQ. Acompañada de papas fritas o papas en gajos."} price={"5.950"} />
        </CardsContainer>
    )
}


const MixedDisheCards = () => {
    return (
        <CardsContainer>
            <Card name={"Mix Burger"} url={"https://assets.unileversolutions.com/recipes-v2/232055.jpg?imwidth=350"} description={"Pan artesanal, Torta de carne artesanal de 200g, Filet de pollo, Chuleta ahumada, Tocineta, Cebolla caramelizada y Salsa BQQ. Acompañada de papas fritas o papas en gajos."} price={"5.950"} />
            <Card name={"Mix Burger"} url={"https://assets.unileversolutions.com/recipes-v2/232055.jpg?imwidth=350"} description={"Pan artesanal, Torta de carne artesanal de 200g, Filet de pollo, Chuleta ahumada, Tocineta, Cebolla caramelizada y Salsa BQQ. Acompañada de papas fritas o papas en gajos."} price={"5.950"} />
        </CardsContainer>
    )
}




const AdditionalCards = () => {
    return (
        <CardsContainer>
            <Card name={"Mix Burger"} url={"https://assets.unileversolutions.com/recipes-v2/232055.jpg?imwidth=350"} description={"Pan artesanal, Torta de carne artesanal de 200g, Filet de pollo, Chuleta ahumada, Tocineta, Cebolla caramelizada y Salsa BQQ. Acompañada de papas fritas o papas en gajos."} price={"5.950"} />
            <Card name={"Mix Burger"} url={"https://assets.unileversolutions.com/recipes-v2/232055.jpg?imwidth=350"} description={"Pan artesanal, Torta de carne artesanal de 200g, Filet de pollo, Chuleta ahumada, Tocineta, Cebolla caramelizada y Salsa BQQ. Acompañada de papas fritas o papas en gajos."} price={"5.950"} />
        </CardsContainer>
    )
}




const ExtraCards = () => {
    return (
        <CardsContainer>

        </CardsContainer>
    )
}










export default FoodView