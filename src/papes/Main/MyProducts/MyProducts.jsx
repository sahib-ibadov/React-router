import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MyCard from './Card/MyCard'
import "./MyProducts.css"
import toast from 'react-hot-toast'


const MyProducts = () => {
  const [data, setData] = useState([])
  const [search,setSearch]=useState([])
  const [favorites, setFavorites] = useState([]);
  const [favoritesCount, setFavoritesCount] = useState(favorites.length);

  useEffect(() => {
    axios.get('https://northwind.vercel.app/api/products').then(res => {
      console.log(res.data)
      setData(res.data)
      setSearch(res.data)
    })
  }, [])

  const searchData=(searchValue)=>{
    setSearch([...data.filter((item)=>item.name.toLowerCase().trim().includes(searchValue))])
  }
 

  const addToFavorites = (id) => {
    let item = data.find((item) => item.id === id);
    6

    if (!favorites.find((favItem) => favItem.id === id)) {
      setFavorites([...favorites, item]);
      localStorage.setItem('favorites', JSON.stringify([...favorites, item]));
      setFavoritesCount(favoritesCount + 1);
      toast.success('Əlavə olundu');
    } else {
      Swal.fire({
        icon: 'info',
        title: 'Səbətinizdə mövcuddur',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };



  return (
    <>
    

  <div className="searchInp">
  < input type="text" placeholder='search' onChange={(e)=>searchData(e.target.value)} />

</div>
      <div className='myCardContainer'>

        {
          search.map((item) => {
            return <MyCard key={item.id} item={item} addToFavorites={addToFavorites}  />
          })
        }


      </div>
      </>
  )
}

export default MyProducts

