import React from 'react';
//import logo from '../logo192.png';

const style = {
    border: '1px solid white',
    borderRadius: '25px',
    boxShadow: '5px 5px',
    backgroundColor: 'white',
    textAlign: 'center',
    color: 'black',
    margin: '40px',
    width: '300px',
    height: '225px',
    float: 'left',
};

const Size = (props) => {
    return( 
        <div style={style}>
            <h1>{props.name}</h1>
            {/* <img src={logo} alt="uh oh Stinky!!!!"/> */}
            <p>{props.price}</p>
        </div>
    );
    
};

export default Size;