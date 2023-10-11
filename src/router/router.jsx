import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Main from '../pages/main'
import Secondpage from '../pages/secondpage'
import Thirdpage from '../pages/thirdpage'

export default function router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/page2' element={<Secondpage/>} />
        <Route path='/page3' element={<Thirdpage/>} />
      </Routes>
    </BrowserRouter>
  )
}
