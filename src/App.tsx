import { useState } from 'react';
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import MainView from "./views/MainView";
import Login from "./Components/Login";
import MainApp from './Components/MainApp';
import Detail  from './Components/Detail';
function App() {
  
  return (

    <BrowserRouter>
     <Routes>
      <Route path= "/" >
      <Route index element= {<Navigate to={"./login"}/>}></Route>
      <Route path="/login"element= {<Login/>}/>
      <Route path="/detail" element={<Detail/>} />

      <Route path="/main_app" element={<MainApp/>} />

      </Route>
     </Routes>
    </BrowserRouter>
  );
}

export default App
