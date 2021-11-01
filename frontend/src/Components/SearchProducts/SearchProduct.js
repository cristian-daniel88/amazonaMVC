import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { notFoundAction } from '../../redux/notFound/notFoundActions';

import Loading from '../Loading/Loading';
import { AddCartSearch, CartGridSearch, CartImageSearch, CartLabelSearch, CartSearch, NotFound, PriceSearch, ResultSearch, SearchProductsContainer, SoldOutSearch, StockSearch } from './SearchProductsStyles'





export default function SearchProduct() {
    const state = useSelector(state => state?.product.arrayProductsFind);
    const loadingsearch = useSelector(state => state.product.loadingSearch);
    const result = useSelector(state => state?.product.results);
    const notFound = useSelector(state => state.notFound.notFound);
    
  

     

    

  
    
      
  

    
 



    return (
       <>
       <SearchProductsContainer>
           <ResultSearch>

            {`Results with "${result}":`}
           </ResultSearch>

        {state[0] ? ( <CartGridSearch>
        

        {state.map((val, i)=> {
            
            return(
                <CartSearch key={i}>
                <CartImageSearch src={val.img}></CartImageSearch>
                <CartLabelSearch>{val.name.slice(0,20)}</CartLabelSearch>
                <PriceSearch>Price: £{val.price}</PriceSearch>
                <StockSearch>Stock: {val.stock}</StockSearch>
                <SoldOutSearch></SoldOutSearch>
                <AddCartSearch>Add Cart</AddCartSearch>
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
