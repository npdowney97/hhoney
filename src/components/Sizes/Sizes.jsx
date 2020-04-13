import React from 'react';
import './Sizes.css';

const Size = (props) => {
    return( 
        <div className='Sizes'>
            <div style={{margin: 'auto'}}>
                <h1>{props.name}</h1>
                {/* <img src={logo} alt="uh oh Stinky!!!!"/> */}
                <p>{props.price}</p>
            </div>
        </div>
    );
    
};

export default Size;