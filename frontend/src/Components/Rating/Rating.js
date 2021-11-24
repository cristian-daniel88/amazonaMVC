import React from 'react'
import { StarEmpty,StarHalf,StarColor } from './RatingStyles'


function Rating() {
    let rating = 4;
  

    return (
        <>
        <i>
         {
             rating >= 1
             ? (<StarColor/>)
             : rating >= 0.5
             ? (<StarHalf/>)
             : (<StarEmpty/>)
            }   
        </i>

        <i>
         {
             rating >= 2
             ? (<StarColor/>)
             : rating >= 1.5
             ? (<StarHalf/>)
             : (<StarEmpty/>)
            }   
        </i>

        <i>
         {
             rating >= 3
             ? (<StarColor/>)
             : rating >= 2.5
             ? (<StarHalf/>)
             : (<StarEmpty/>)
            }   
        </i>

        <i>
         {
             rating >= 4
             ? (<StarColor/>)
             : rating >= 3.5
             ? (<StarHalf/>)
             : (<StarEmpty/>)
            }   
        </i>

        <i>
         {
             rating >= 5
             ? (<StarColor/>)
             : rating >= 4.5
             ? (<StarHalf/>)
             : (<StarEmpty/>)
            }   
        </i>
        </>
    )
}

export default Rating
