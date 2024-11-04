import './info.css'
import React, { useState } from 'react';
import whitearrow from '../../asset/whitearrow.png'

function Info ({type, text, entete}) {

    const [info, updateInfo] = useState(false)

    if (type === 'text'){

    return !info ? (
        <>
        <div className='div1Info'>
            <p> {entete} </p>
            <img src={whitearrow} alt='white arrow click for open' onClick={() => updateInfo(true)} style={{transform: 'rotate(0deg)'}}></img>
        </div>
        <div className='div2Info' ><p> {text}
            
            </p></div>
            </>
    ) : (
        <>
        <div className='div1Info'>
            <p> {entete} </p>
            <img src={whitearrow} alt='white arrow click for open' onClick={() => updateInfo(false)} style={{transform: 'rotate(-180deg)'}}></img>
        </div>
        <div className='div2Info' style={{maxHeight: '380px'}}> <p> {text}</p></div>
        </>
    )} if (type === 'liste') {
        return !info ? (
            <>
            <div className='div1Info'>
                <p> {entete} </p>
                <img src={whitearrow} alt='white arrow click for open' onClick={() => updateInfo(true)} style={{transform: 'rotate(0deg)'}}></img>
            </div>
            <div className='div2Info'>
            <ul>
                {text.map((item, index) => (
                <li key={index}>{item}</li>
      ))}
    </ul>
            </div>
                </>
        ) : (
            <>
            <div className='div1Info'>
                <p> {entete} </p>
                <img src={whitearrow} alt='white arrow click for open' onClick={() => updateInfo(false)} style={{transform: 'rotate(180deg)'}}></img>
            </div>
            <div className='div2Info' style={{maxHeight: '380px'}}> <ul>
                {text.map((item, index) => (
                <li key={index}>{item}</li>
      ))}
    </ul></div>
            </>
            
        )
    }

}

export default Info