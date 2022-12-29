import styled from "styled-components";

const Bar = styled.div` 
  background-color: black ;
  text-align: center ;
  padding: 1%;
`

const Title = styled.h1`
    margin: 0%;
    color: red ;
`

const TopBar = () => {
    return (
        <Bar>
            <Title>Cuquis Food</Title>
        </Bar>
    )
}

export default TopBar