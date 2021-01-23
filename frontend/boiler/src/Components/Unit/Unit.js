import React from 'react';

function Unit(props){

    return <div style={{
        height:`${props.size}rem`,
        width:`${props.size}rem`,
        backgroundColor:props.color
    }}></div>
}

export default Unit;