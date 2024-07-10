import React, { useState } from 'react'
import './QRCodeScanner.css'
import { Scanner } from '@yudiel/react-qr-scanner'
import { SCAN_DATA } from '../../constants'

const QRCodeScanner = () => {

    const [scan, setScan] = useState('');

    const scanHandler = (result) => {
        setScan(result[0].rawValue);

        const prevData =JSON.parse(localStorage.getItem(SCAN_DATA))  || '[]';

        localStorage.setItem(
          SCAN_DATA,
          JSON.stringify([...prevData, result[0].rawValue ]));
    }

  return (
    <div className='scanner'>
        <div className="wrapperScan">
            <Scanner 
            onScan={scanHandler}
            components={{audio: false}} 
            styles={{container:{width: 350}}}/>
        </div>
      

        <p className="result">{scan}12342142</p>
    </div>
  )
}

export default QRCodeScanner