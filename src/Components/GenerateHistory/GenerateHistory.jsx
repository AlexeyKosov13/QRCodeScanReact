import React from 'react'
import './GenerateHistory.css'
import {QRCodeSVG} from 'qrcode.react';
import { GENERATE_DATA } from '../../constants';

const GenerateHistory = () => {

    const data =JSON.parse(localStorage.getItem(GENERATE_DATA))  || '[]';
  return (
    <div><h2>GenerateHistory</h2>

        {data.map((text) => (
            <div className="item">
                <p key={text}>{text}</p>
                {text !== '' && <QRCodeSVG value={text} size={150} className='qrcode'/>}
            </div>          
        ))}
    </div>
  )
}

export default GenerateHistory