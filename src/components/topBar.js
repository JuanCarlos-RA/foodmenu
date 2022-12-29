import styled from "styled-components";

const Bar = styled.div` 
  background-color: black;
  text-align: center ;
  margin: 4px;
  padding: 1%;

  border-top-left-radius: 10px ;
  border-top-right-radius: 10px ;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`

const Title = styled.h1`
    margin: 0%;
    color: white;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`

const TopBar = () => {
    return (
        <Bar>
            <Title>CUQUI'S FOOD</Title>
        </Bar>
    )
}


export default TopBar