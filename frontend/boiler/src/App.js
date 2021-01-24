import './App.css';
import Grids from './Components/Grids/Grids';
import Settings from './Components/Settings/Settings';
import Container from 'react-bootstrap/Container';
import React, {useReducer, useState} from 'react';

const initialParams = {
  area: 10000,
  length:300,
  implWidth:1,
  speed:1, 
  completion:0
}

function reducerFunction(state, action){
  switch(action.type){
    case 'area':
      return {...state, area: action.value};
    case 'length':
      return {...state, length: action.value};
    case 'implWidth':
      return {...state, implWidth: action.value};
    case 'speed':
      return {...state, speed: action.value};
    case 'completion':
        return {...state, completion: state.completion+1};
    default:
      throw new Error();
  }
}

const traverse = (rows, cols, reducer) => {

  let time = 1;

  for(let i = 0; i< cols; i++){
    for(let j = 0; j< rows; j++){
      const element = document.getElementById(`${i}-${j}`);
    
      if(element && element.classList.contains('obstacle')){
        setTimeout(() => {
          console.log("obstacle");
        }, [1000 * time++]);
      }
      else{
        setTimeout(() => {
          if(element){
            element.classList.add('visited');
            reducer({type:'completion'})
          }
        }, [1000* time++]);
      }
    }
  }
}




function App() {

  const [state, dispatch] = useReducer(reducerFunction, initialParams);
  const [gridSize, setGridSize] = useState([1,1]);
  const [obstacles, setObstacles] = useState(0);

  return (
    <div className="App">
      <Container fluid id="main-container">
          <Grids obstacles = {obstacles} setObstacles={setObstacles} gridSize={gridSize} setGridSize={setGridSize} state={state} />
          <Settings gridSize={gridSize} traverse={() => traverse(gridSize[0], gridSize[1], dispatch)} state={state} dispatch={dispatch} total={(gridSize[0]*gridSize[1]) - obstacles} completion={state.completion}/>
      </Container>
    </div>
  );
}

export default App;
