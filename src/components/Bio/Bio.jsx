import React from 'react';
import keeper from '../../keeper.jpg';
import './Bio.css';

const Bio = () => {
    return(
        <div className='Bio' >
            <img src={keeper} alt="uh oh!"/>
            <p className='Paragraph' >This is a bio about how I got started in the honey business 
                and how great my honey is compared to that crap on the shelves at stores!
                My stuff is really fantastic! It's the sweetest, best honey you'll ever have! You should really buy a whole 
                lot of this stuff because it will make everything you put it in taste so amazing!
            </p>
        </div>
    );
};
 
export default Bio;