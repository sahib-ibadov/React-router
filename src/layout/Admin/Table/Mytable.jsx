import React from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Mytable.css'
import { useFormik } from 'formik'


const Mytable = ({sahib,handleDelete,handleSorting,}) => {
  
  


    return ( 
  <>
  

    <table class="table">     
  <thead>
    <tr>
      <th scope="col" style={{width:"80px"}}>Id</th>
      <th scope="col"style={{width:"300px"}} >Name</th>
      <th scope="col" style={{width:"200px"}}>uniPrice</th>
      <th scope="col">unitsInStock</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
     <th  scope="col">Sort</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{sahib.id}</th>
      <td>{sahib.name}</td>
      <td>{sahib.unitPrice}</td>
      <td>{sahib.unitsInStock}</td>
      <td><button className='edit__button'>edit</button></td>
      <td><button className='delete__button' onClick={() => handleDelete(sahib.id)}>Delete</button></td>
      <td>  <button  onClick={handleSorting}  className='Sort__button' >Sort</button></td>
    </tr>
  </tbody>
</table>
  </>


  )
}

export default Mytable
