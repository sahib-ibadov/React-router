

import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import './AddProduct.css'


const AddProduct = () => {
  const formik=useFormik({
    initialValues:{
      name:'',
      unitPrice:''
    },
    onSubmit:values=>{
      axios.post("https://northwind.vercel.app/api/products",{...values}).then(res=>{
        console.log(res)
      })
    }
  })

  return (
    <div className='sahib'  >
     <form onSubmit={formik.handleSubmit}>
       <label htmlFor="name">name</label>
       <input
         id="name"
         name="name"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.name}
       />
 
       <label htmlFor="uniPrice">uniPrice</label>
       <input
         id="unitPrice"
         name="unitPrice"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.unitPrice}
       />
 
      
       <button type="submit">Submit</button>
     </form> 

  
      
    </div>
  )
}

export default AddProduct




