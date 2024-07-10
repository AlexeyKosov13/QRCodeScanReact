import React, { useState } from 'react'
import './QRCodeGenerator.css'
import {QRCodeSVG} from 'qrcode.react';
import { GENERATE_DATA } from '../../constants';

const QRCodeGenerator = () => {

    const [value, setValue] = useState('');
    const [result, setResult] = useState('');

    const onChangeHandler = (event) => {
        setValue(event.target.value);
         setResult('');
    }
    const generateQR = () => {
        setResult('value');

        const prevData =JSON.parse(localStorage.getItem(GENERATE_DATA))  || '[]';

        localStorage.setItem(
          GENERATE_DATA,
          JSON.stringify([...prevData, value ]));
        setValue('');
    }

  return (
    <div className='qrcodegenerator'>
      <div className="wrapper">
        {result !== '' && <QRCodeSVG value={result} size={150}/>}
      </div>
       
        <input type="text" value={value} placeholder='Enter your text' onChange={onChangeHandler} />
        <button type='button' onClick={generateQR}>Generate QR code</button>

    </div>
    
  )
}

export default QRCodeGenerator