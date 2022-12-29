import { Routes, Route } from 'react-router-dom'

import TopBar from "./components/topBar";
import styled from "styled-components";
import MainView from "./views/mainView";
import FoodView from './views/foodView';


const Content = styled.div` 
  /* margin:0%;
  padding:0% ; */
`

function App() {
  return (
    <div>
      <TopBar />
      <Content>
        <Routes>
          <Route path='/' element={<MainView />} />
          <Route path='/foodView/*' element={<FoodView />} />
        </Routes>

      </Content>
    </div>


  );
}

export default App;
