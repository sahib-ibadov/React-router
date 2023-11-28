
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Favorites.css'
import toast from 'react-hot-toast';
const Favotites = () => {
  
  const [favorites, setFavorites] = useState(
    localStorage.getItem("favorites")
      ? JSON.parse(localStorage.getItem("favorites"))
      : []
  );
  const deleteFavorites =(id)=>{
    let item = favorites.find(item=>item.id==id)
    favorites.splice(favorites.indexOf(item),1)
    setFavorites([...favorites])
    localStorage.setItem("favorites",JSON.stringify([...favorites]))
    toast.success("Card Delete edildi")

  }
  const handleDelete = () => {
    setFavorites([]);
    localStorage.removeItem("favorites");

  };

  return (
   
    <><br />
            <button style={{ marginBottom: '5px' , marginLeft:'90%', fontWeight:'700',}} className='btn btn-danger' onClick={handleDelete}>Clear All</button>
       <div className='favour'>
     
        {
          favorites.map((item,index)=>{
            return (
              <div key={index} className="card" style={{ width: '18rem' }}>
              <img
                className="card-img-top"
                src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Card cap"
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.unitPrice}</p>
                  <button onClick={()=>{
                    deleteFavorites(item.id)
                  }} className='btn btn-danger'>Delete</button>
              </div>
          
              
            </div>
    
            )
            
          })
        }
      </div>
    </>
  )
}

export default Favotites