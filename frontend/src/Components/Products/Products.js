import React from 'react';




import Loading from '../Loading/Loading';

import {AddCart, Cart, CartGrid, CartImage, CartLabel, Price, ProductsContainer, SoldOut, Stock, SubtitleStyled} from './ProductsStyles';



function Products({products}) {
    const loading = products.loading;
 
    
 
    // order to category
    let obj = null
    const typesclothe = products.products.products?.reduce((res, pok) => {
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
            {loading ? (<Loading/>) : (<>{obj.map((value, key) => {
              let valor1 = value[0];
              let valor2 = value[1]
              return(<div key={key}>
                <div style={{display:'flex', justifyContent: 'center'}}>

               <SubtitleStyled>{valor1.toUpperCase()}</SubtitleStyled> 

                </div>

               <CartGrid> {valor2.map((val, i) => {
                return (
                  <Cart key={i}>
                  <CartImage src={val.img}></CartImage>
                  <CartLabel>{val.name.slice(0,20)}</CartLabel>
                  <Price>Price: £{val.price}</Price>
                  <Stock>Stock: {val.stock}</Stock>
                  <SoldOut></SoldOut>
                  <AddCart>Add Cart</AddCart>
                  </Cart>
                )
              })} </CartGrid>

              </div>)
            })}</>)}
            
        
        </ProductsContainer>
        </>
    )
}

export default Products
