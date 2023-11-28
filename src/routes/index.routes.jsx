







import AddProduct from "../papes/Admin/AddProduct/AddProduct";
import Favorites from "../papes/Main/Favorites/Favorites";
import ProductDetail from "../papes/Main/ProductDetail/ProductDetail";
import Home from "../papes/Main/Home/Home";
import Products from "../papes/Admin/Products/Products";
import MyProducts from "../papes/Main/MyProducts/MyProducts";
import EditProduct from "../papes/Admin/EditProduct/EditProduct";
import MainRoot from "../papes/Main/MainRoot";
import AdminRoot from "../papes/Admin/AdminRoot";




const ROUTES=[
    {
        
            path:"/",
            element:<MainRoot/>,
            children:[
            {
           path:"",
           element:<Home/>
        },
        {
           path:"Favorites",
           element:<Favorites/>

        },  
        {  
            path:"MyProducts/:id",
            element:<ProductDetail/>
        
        },
        {
            path:"MyProducts",
            element:<MyProducts/>
        }
    ]
    },




    {
         path:"/Admin",
         element:<AdminRoot/>,
         children:[

            {
                path:"",
                element:<Products/>
               
        },
        {
          path:"AddProduct",
          element:<AddProduct/>
        
    }
        
    ,
    {   
        path:"EditProduct",
        element:<EditProduct/>  
}
    ]
    }
]
export default ROUTES
