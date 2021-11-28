
import React, {  } from 'react';
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router';

import Loading from '../Loading/Loading';
import { RatingContainer } from '../Products/ProductsStyles';
import Rating from '../Rating/Rating';
import {  CartGridSearch, CartImageSearch, CartLabelSearch, CartSearch, NotFound, PriceSearch, ResultSearch, SearchProductsContainer, SoldOutSearch, StockSearch } from './SearchProductsStyles'





 function SearchProduct() {
    const state = useSelector(state => state?.product.arrayProductsFind);
    const loadingsearch = useSelector(state => state.product.loadingSearch);
    const result = useSelector(state => state?.product.results);
    const notFound = useSelector(state => state.notFound.notFound);
    const history = useHistory();


    const goProduct = (id, obj) => {
        history.push(`./product/${id}`);
        
      }
    
  

     

    

  
    
      
  

    
 



    return (
       <>
       <SearchProductsContainer>
           <ResultSearch>

            {`Results with "${result}":`}
           </ResultSearch>

        {state[0] ? ( <CartGridSearch>
        

        {state.map((val, i)=> {
            
            return(
                <CartSearch key={i} onClick={()=> {goProduct(val.uid)}}>
                <CartImageSearch src={val.img}></CartImageSearch>
                <CartLabelSearch>{val.name.slice(0,20)}</CartLabelSearch>
                <PriceSearch>Price: £{val.price}</PriceSearch>
                <StockSearch>Stock: {val.stock}</StockSearch>
                <RatingContainer>
                     <Rating rating=
                     { val.review.reduce((acc, item)=> {return acc + Number(item.raiting)}, 0) / val.review.length} 
                     />
                </RatingContainer>
                <SoldOutSearch></SoldOutSearch>
                </CartSearch>
            
            )
        })}
        </CartGridSearch>) : ''}
         {notFound && (<NotFound>Not Found</NotFound>)}
         <div style={{marginTop: '-280px'}}>
          {loadingsearch && (<Loading/>)}
         </div>


        </SearchProductsContainer>

        
       </>
    )
}

export default  SearchProduct

