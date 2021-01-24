import React, {useEffect } from 'react';
import Unit from '../Unit/Unit';

const getGridSize = (state) => {
    
    const initTime = 60;
    const breadth = parseInt(state.area/state.length);

    const sizeOfUnit = ((state.speed/60)*initTime)*state.implWidth;

    const numRowUnits = parseInt((1/sizeOfUnit)*state.length);
    const numColUnits = parseInt((1/sizeOfUnit)*breadth);

    return [numRowUnits, numColUnits, sizeOfUnit];
}

const toggleRed = (i, j, obstacles, setObstacles) => {
    const element = document.getElementById(`${i}-${j}`);
    if(element.classList.contains('obstacle')){
        element.classList.remove('obstacle');
        setObstacles(obstacles-1);
    }
    else{
        element.classList.add('obstacle');
        setObstacles(obstacles+1);
    }
}

const createGrid = (row, col, obstacles, setObstacles) => {
    let data = [];
    for(let i = 0; i<col; i++){
        let eachRow = [];
        for(let j = 0; j<row; j++){
            eachRow.push( <Unit size='1' color='white' id={`${i}-${j}`} key={`${i}-${j}`} onClick={() => toggleRed(i, j, obstacles, setObstacles)}/>)
        }
        data.push(<div key={`row-${i}`} id={`row-${i}`} style={{display:"flex", flexDirection:"row"}}>{eachRow}</div>)
    }
    return data;
}

function Grids(props){

    
    useEffect(() => {
        props.setGridSize(getGridSize(props.state));
    }, [props.state])


/*<div style={{display:"flex", flexDirection:"row"}}>
            <Unit size='1' color='black'/>
            <Unit size='1' color='black'/>
        </div>*/
    return <div style={{display:"flex", flexDirection:"column", width:'100%', minHeight:'200px'}}>
        {createGrid(props.gridSize[0], props.gridSize[1], props.obstacles, props.setObstacles)}
    </div>
}

export default Grids;