import React from 'react'
import { StarEmpty,StarHalf,StarColor } from './RatingStyles'


function Rating(rating) {
  
    let ratingG = Number(rating.rating)
  

    return (
        <>
        <i>
         {
             ratingG >= 1
             ? (<StarColor/>)
             : ratingG >= 0.5
             ? (<StarHalf/>)
             : (<StarEmpty/>)
            }   
        </i>

        <i>
         {
             ratingG >= 2
             ? (<StarColor/>)
             : ratingG >= 1.5
             ? (<StarHalf/>)
             : (<StarEmpty/>)
            }   
        </i>

        <i>
         {
             ratingG >= 3
             ? (<StarColor/>)
             : ratingG >= 2.5
             ? (<StarHalf/>)
             : (<StarEmpty/>)
            }   
        </i>

        <i>
         {
             ratingG >= 4
             ? (<StarColor/>)
             : ratingG >= 3.5
             ? (<StarHalf/>)
             : (<StarEmpty/>)
            }   
        </i>

        <i>
         {
             ratingG >= 5
             ? (<StarColor/>)
             : ratingG >= 4.5
             ? (<StarHalf/>)
             : (<StarEmpty/>)
            }   
        </i>
        </>
    )
}

export default Rating
