import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import './Card.css'
 


const MyCard = ({item ,addToFavorites}) => {

  return (

    <Card  sx={{ maxWidth: 350}} className='myProductCard'>
    <CardActionArea>
      <CardMedia
        component="img"
      
        className='cardImage'
        image="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=400"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Product Title:
         {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: 
         {item.unitPrice} AZN
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Link className='button' to={`/MyProducts/${item.id}`}>Detail</Link>
      <Link  onClick={(e)=>{
      addToFavorites(item.id)
    }} className="btn btn-primary link" style={{ backgroundColor: 'navy' }}>  
      Go Favorites
    </Link>
    </CardActions>
  </Card>
  )
}

export default MyCard
