import { Routes, Route } from 'react-router-dom'
import styled from "styled-components";
import MainView from "./views/mainView";
import FoodView from './views/foodView';


const Content = styled.div` 
`
const Father = styled.div`
  width:100%;
  height:100%;
  position:absolute;
  top:0;
  bottom:0;
`

function App() {
  return (
    <Father>
      <Content>
        <Routes>
          <Route path='/' element={<MainView />} />
          <Route path='/foodView/*' element={<FoodView />} />
        </Routes>
      </Content>
    </Father>
  );
}

export default App;
