import React, {  } from 'react';
import Chat from '../Chat/Chat';
import { useHistory } from "react-router-dom";





import Loading from '../Loading/Loading';

import { Cart, CartGrid, CartImage, CartLabel, Price, ProductsContainer, RatingContainer, SoldOut, Stock, SubtitleStyled} from './ProductsStyles';
import Rating from '../Rating/Rating';



function Products({products, socket, username, room ,messageServer}) {
  const loading = products.loading;
  const history = useHistory();


  const goProduct = (id, obj) => {
   
    history.push(`./product/${id}`);
    
  }
 
    // order to category
    let obj = null
     products.products.products?.reduce((res, pok) => {
        if (!res[pok.category]) {
          res[pok.category] = [];
        }
      
        res[pok.category] = [...res[pok.category], pok];
        
        obj = Object.entries(res)
        return res
        
      }, {});
    //


  
    
    return (
       <>
       
        <ProductsContainer>
              {messageServer && (  <Chat socket={socket} username={username} room={room} messageServer={messageServer} />)}
            
          
            {loading ? (<Loading/>) : (<>{obj?.map((value, key) => {
              let valor1 = value[0];
              let valor2 = value[1]
              return(<div key={key}>
                <div style={{display:'flex', justifyContent: 'center'}}>

               <SubtitleStyled>{valor1.toUpperCase()}</SubtitleStyled> 

                </div>

               <CartGrid> {valor2.map((val, i) => {
                return (
                  
                  <Cart key={i} onClick={()=> goProduct(val.uid, val)}>
                  <CartImage src={val.img}></CartImage>
                  <CartLabel>{val.name.slice(0,20)}</CartLabel>
                  <Price>Price: £{val.price}</Price>
                  <Stock>Stock: {val.stock}</Stock>
                   <RatingContainer>
                     <Rating rating=
                     { val.review.reduce((acc, item)=> {return acc + Number(item.raiting)}, 0) / val.review.length} 
                     />
                    </RatingContainer>
                  <SoldOut></SoldOut>
                 
                  
                  </Cart>
                  
                )
              })} </CartGrid>

              </div>)
            })}</>)}


           
            
        
        </ProductsContainer>
        </>
    )
}

export default  Products
