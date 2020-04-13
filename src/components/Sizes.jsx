import React from 'react';


const style = {
    border: '1px solid white',
    backgroundColor: 'white',
    color: 'black',
};

const Size = () => {
    const sizes = [
        {name: "8 kljlkfj;lksjdf;lsd", price: "$10"},
        {name: "16 oz", price: "$18"},
        {name: "30 oz", price: "$30"},
    ];

    return( 
        <div style={style}>
            <h1>{sizes[0].name}</h1>
            <p>{sizes[0].price}</p>
        </div>
    );
    
};

export default Size;