
import Presentation from "../components/presentation"
import Button from "../components/button."
import styled from "styled-components"

const ContentButtons = styled.div` 
    margin-top: 5%;
    text-align:center;
    align-items: center;
    justify-content: center;
`
const MainView = () => {
    return (
        <div>
            <Presentation />
            <ContentButtons>
                {/* Quizas deba enviar una ruta por cada boton, por que utilizar el children quizas no sea la mejor practica */}
                <Button>HAMBURGESAS</Button>
                <Button>QUESADILLAS</Button>
                <Button>NACHOS</Button>
                <Button>SANDWICH</Button>
                <Button>PATACONES</Button>
                <Button>ALITAS</Button>
                <Button>CARNES</Button>
                <Button>TACOS</Button>
                <Button>PLATOS MIXTOS</Button>
                <Button>EXTRAS</Button>
            </ContentButtons>
        </div>
    )
}

export default MainView