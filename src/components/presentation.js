import styled from "styled-components";

const Content = styled.div` 
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: violet ;
`

const Presentation = () => {
    return (
        <Content>
            <h1>**Logo**</h1>
        </Content>
    )

}

export default Presentation