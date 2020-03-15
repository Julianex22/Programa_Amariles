import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tabla from "./pages/Tabla"
import Tabla2 from "./pages/Tabla2"
import Banner from "./pages/Banner"
import Formulario from "./pages/Formulario"
import {Route, Switch} from 'react-router-dom'


const App= ()=>{

return(
<>
<Banner />
<Formulario/>
 
</>
)
};


export default App;
