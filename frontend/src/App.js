
import { useAuth0 } from "@auth0/auth0-react";
import NavBar from './Components/NavBar/NavBar';
import ProfileAuth0 from './Components/ProfileAuth0/ProfileAuth0';
import Categories from './Components/Categories/Categories';
import { useEffect } from 'react';
import { fetchProducts } from './redux/product/productActions';
import { useDispatch, useSelector } from 'react-redux';
import Products from './Components/Products/Products';
import Tope from "./Components/Tope/Tope";
import SearchProduct from "./Components/SearchProducts/SearchProduct";
import { Switch, Route } from "react-router-dom";




function App() {
  const {isAuthenticated} = useAuth0();
  const dispatch = useDispatch();
  
  
  
  
  
  
  
  
  
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
  const stateAllProduct = useSelector(state => state.product);
  
  
  
  return (
    <>
    <NavBar/>
    <Categories/>
    {isAuthenticated ? ( <ProfileAuth0/>) : (<Tope/>)}
    
    <Switch>
    
    <Route exact path='/'>
    <Products products={stateAllProduct} ></Products>
    </Route>
   
    <Route exact path='/search'>
    <SearchProduct/>
    </Route>
    
    

    </Switch>
    
    {/* <FormCreateUser/> */}
    {/* <FormLogin/> */}


    </>
    
    )
  }
  
export default App;
