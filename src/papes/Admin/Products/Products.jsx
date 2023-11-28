import axios from 'axios'
import Mytable from '../../../layout/Admin/Table/Mytable'
import { useState,useEffect } from 'react'
import React from 'react'
import toast from 'react-hot-toast'

const Products = () => {
  const [data,setData]=useState([])
  useEffect(()=>{
    axios.get('https://northwind.vercel.app/api/products').then(res=>{
      console.log(res.data)
      setData(res.data)
     
      
    })
  },[])




  const handleDelete = (id) => {
    axios.delete(`https://northwind.vercel.app/api/products/${id}`)
    const sahib1 = data.filter(data => data.id !== id);
    console.log(sahib1)
    toast.success("delete edildi")
    setData(sahib1);
   

    
  }
  const  handleSorting = () => {
    const sorting1 =[...data].sort((a,b)=> a.unitPrice - b.unitPrice)
    console.log(sorting1)
    setData(sorting1)
    toast.success("sort edildi")

  }
  return (
  
    <div className='Navbar__map'>
   
    {
      data.map((sahib) => {
        return <Mytable key={sahib.id} sahib={sahib} handleDelete={handleDelete} handleSorting={handleSorting} />
      })
    }


    </div>
  )
}

export default Products
