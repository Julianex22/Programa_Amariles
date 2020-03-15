import React from 'react'
import PropTypes from 'prop-types'


const Tabla = ({gonorreamama , gonorreapapa , gonorreitas})=>(//esto es un componente presentacional o tonto se crean con una funcion

<table class="table">
    <thead>
        <tr>
        <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
        </tr>
    </thead>
    <tbody>
    <tr>
      <th scope="row">1</th>
<td>{gonorreamama}</td>
<td>{gonorreapapa}</td>
<td>{gonorreitas}</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
        </tbody> 
</table>

)


Tabla.propTypes={
  gonorreamama:String,
  gonorreapapa:String,
  gonorreitas:String
}
Tabla.defaultProps={
  gonorreamama:'Piroba',
  gonorreapapa:'Pirobo',
  gonorreitas:'Pirobitos'

}
export default Tabla