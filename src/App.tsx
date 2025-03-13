import { useState } from 'react'
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom"
import MainView from "./views/MainView"

function App() {
  
  return (

    <BrowserRouter>
     <Routes>
      <Route path= "/" element= {<MainView/>} >
      </Route>
     </Routes>
    </BrowserRouter>
  );
}

export default App
