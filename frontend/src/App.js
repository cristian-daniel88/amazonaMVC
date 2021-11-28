
import { useAuth0 } from "@auth0/auth0-react";
import NavBar from './Components/NavBar/NavBar';
import ProfileAuth0 from './Components/ProfileAuth0/ProfileAuth0';
import Categories from './Components/Categories/Categories';
import { useEffect} from 'react';
import { fetchProducts } from './redux/product/productActions';
import { useDispatch, useSelector } from 'react-redux';
import Products from './Components/Products/Products';
import Tope from "./Components/Tope/Tope";
import SearchProduct from "./Components/SearchProducts/SearchProduct";
import { Switch, Route } from "react-router-dom"
import io from "socket.io-client";
import { useState } from "react";
import Product from "./Components/Product/Product";
import { useCallback } from "react";
import CartPage from "./Components/CartPage/CartPage";
import Shipping from "./Components/Shipping/Shipping";

const socket = io.connect(process.env.REACT_APP_SOCKET);







function App() {
  const {isAuthenticated} = useAuth0();
  const email = useSelector(state => state.email.email);
  const [serverMessage, setServerMessage] = useState(null)
  
 
  const dispatch = useDispatch();
  
  // -----------SOCKET CHAT --------------- //
 

   socket.on('disconnect', () => {
    console.log('desconectado'); 
   });




  
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   // start fetch Products
   const fetchProductsJson =useCallback ( async() => {
 
      try {
        const response = await fetch(process.env.REACT_APP_PRODUCTOS_URL);
        const data = await response.json();
        setTimeout(() => {
          dispatch(fetchProducts(data))
          
         }, 1000);
       } catch (error) {
         console.log(error)
       }
     
   },[dispatch]) 
    useEffect(() => {
      fetchProductsJson()
    
    }, [fetchProductsJson])
    
    useEffect(() => {
      socket.on('connect', ()=> {
         console.log('conectado')
       });

       socket.on("message", (message) => {
        setServerMessage(message);
      });


      if(email) {

               socket.emit('joinprivatechat', { email, room: email });
        return socket.emit('joinRoom', { email, room: 'sala' });
      }
    
  }, [email])
  // end fetch Products
  const stateAllProduct = useSelector(state => state.product);
  
  
  
  return (
    <>
    <NavBar/>
    <Categories/>
    {isAuthenticated ? ( <ProfileAuth0/>) : (<Tope/>)}
    
    <Switch>
    
    <Route exact path='/'>
    <Products products={stateAllProduct} socket={socket} username={email} messageServer={serverMessage} ></Products>
    </Route>
   
    <Route exact path='/search'>
    <SearchProduct/>
    </Route>

    <Route exact path='/product/:id'>
      <Product/>
    </Route>

    <Route exact path='/cart'>
      <CartPage/>
    </Route>

    <Route exact path='/shipping'>
      <Shipping/>
    </Route>
    
    
    

    </Switch>
    
    {/* <FormCreateUser/> */}
    {/* <FormLogin/> */}
    


    </>
    
    )
  }
  
export default App;
