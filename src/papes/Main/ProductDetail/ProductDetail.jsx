import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import './detail.css'
const ProductDetail = () => {
  const {id}=useParams()
  console.log(id)
  const [detail,setDetail]= useState([])
  useEffect(() => {
    axios.get(`https://northwind.vercel.app/api/products/${id}`).then(res => {
    console.log(res.data)
    setDetail(res.data)
      
    })
  }, [])

  return (
    <div className='ProductDetail'>
     <div><img src= "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" /></div>

     <div>
        <p>{detail.id}</p>
        <p>{detail.name}</p>
        <p>{detail.unitPrice}</p>
     </div>
    
      
    </div>
  )
}

export default ProductDetail
