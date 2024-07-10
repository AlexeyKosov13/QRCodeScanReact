import React from 'react'
import QRCodeGenerator from '../QRCodeGenerator/QRCodeGenerator'
import QRCodeScanner from '../QRCodeScanner/QRCodeScanner'
import Navigation from '../Navigation/Navigation'
import { Route, Routes } from 'react-router-dom'
import GenerateHistory from '../GenerateHistory/GenerateHistory'
import ScanHistory from '../ScanHistory/ScanHistory'

export const Layout = () => {
  return (
    <div className='layout'>
        <Navigation />
        <Routes>
          <Route path='/generate' element={<QRCodeGenerator />}/>
          <Route path='/scan' element={<QRCodeScanner />}/>
          <Route path='/generateHistory' element={<GenerateHistory />}/>
          <Route path='/scanHistory' element={<ScanHistory/>}/>
        </Routes>
       
    </div>
  )
}
