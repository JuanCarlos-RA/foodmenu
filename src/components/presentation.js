import styled from "styled-components";

const Content = styled.div` 
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: grey ;
    margin:4px;
    
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    
    
`

const Presentation = () => {
    return (
        <Content>
            <h1>**Logo**</h1>
        </Content>
    )

}

export default Presentation