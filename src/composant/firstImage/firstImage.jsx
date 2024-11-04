import React, { useState } from 'react';
import './firstImage.css'

function FirstImage ({image, text}) {
    

    if (text) {
        
        return (
        <>
        <div className='firstImage' style={{backgroundImage: `url(${image})`}}>
            <div className='firstTexte'><h2 className='textImage'>{text}</h2></div>
            
        </div>
        </>
    ) } else {

        return(<>
            <div className='firstImage' style={{backgroundImage: `url(${image})`}}>            
            </div>
            </>)
    
        }
}

export default FirstImage