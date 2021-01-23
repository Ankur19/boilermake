import React from 'react';
import Unit from '../Unit/Unit';

function Grids(props){
    return <div style={{display:"flex", flexDirection:"column"}}>
        <div style={{display:"flex", flexDirection:"row"}}>
            <Unit size='1' color='black'/>
            <Unit size='1' color='black'/>
        </div>
    </div>
    
}

export default Grids;