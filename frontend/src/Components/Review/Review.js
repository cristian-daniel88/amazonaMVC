import React, { useState } from 'react'
import { ButtonLogIn, FormSignIn, LabelLogIn, Structure } from '../FormLogin/FormLoginStyles'
import { Option, Select, TextArea } from './ReviewStyles'

function Review({id}) {
    const [rating, setRating] = useState(0);
    const [textReview, setTestReview] = useState('');

    function sendReview(e) {
        e.preventDefault()
        if (Number(rating) === 0) {
            return alert('Select raiting please')
        }

    }
    
    return (
        <div style={{marginBottom:"10px"}}>
               <Structure style={{margin:'auto'}}>
               
                <br/>
                <FormSignIn action='submit'>

                    <LabelLogIn>
                    Rating
                    </LabelLogIn>

                    <Select onChange={(e)=> setRating(e.target.value)}>
                        <Option value={0}>Select...</Option>
                        <Option value={1}>1- Poor</Option>
                        <Option value={2}>2- Fair</Option>
                        <Option value={3}>3- Good</Option>
                        <Option value={4}>4- Very Goog</Option>
                        <Option value={5}>5- Excellent</Option>
                    </Select>


                    <LabelLogIn>
                     Your Comment
                    </LabelLogIn>
                    <TextArea  
                    rows="4" 
                    cols="70"
                    maxLength="250"
                    placeholder='Enter your comment'
                    onChange={(e)=> setTestReview(e.target.value)}
                    >

                     </TextArea>

                    <ButtonLogIn  onClick={(e)=> sendReview(e)}>Submit</ButtonLogIn>
                </FormSignIn>
            </Structure>
        </div>
    )
}

export default Review
