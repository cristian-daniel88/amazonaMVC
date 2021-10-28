
import { useAuth0 } from "@auth0/auth0-react";
import NavBar from './Components/NavBar/NavBar';
import ProfileAuth0 from './Components/ProfileAuth0/ProfileAuth0';
import Categories from './Components/Categories/Categories';
import { useEffect } from 'react';
import { fetchProducts } from './redux/product/productActions';
import { useDispatch, useSelector } from 'react-redux';
import Products from './Components/Products/Products';
import Tope from "./Components/Tope/Tope";



function App() {
  const {isAuthenticated} = useAuth0();
  const dispatch = useDispatch();
  const stateProducts = useSelector(state => state.product);
 

  // start fetch Products
  const fetchProductsJson = async () => {
    try {
    const response = await fetch(process.env.REACT_APP_PRODUCTOS_URL);
    const data = await response.json();
    setTimeout(() => {
      dispatch(fetchProducts(data))
      
    }, 1000);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
   
    fetchProductsJson()
      
  }, [])
  // end fetch Products

  return (
    <>
    
    <NavBar/>
    <Categories/>


    {isAuthenticated ? ( <ProfileAuth0/>) : (<Tope/>)}


    <Products products={stateProducts}></Products>
   
    

    {/* <FormLogin/> */}
    
    
    {/* <FormCreateUser/> */}

   


    </>
    
    )
  }
  
export default App;
