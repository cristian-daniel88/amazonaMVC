import React, { useState } from "react";
import {
  ButtonLogIn,
  FormSignIn,
  LabelLogIn,
  Structure,
} from "../FormLogin/FormLoginStyles";
import { Option, Select, TextArea } from "./ReviewStyles";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { addReviewAction } from "../../redux/updateReview/updaReviewActions";
var axios = require("axios");

function Review({ id }) {
  const [rating, setRating] = useState(0);
  const [textReview, setTestReview] = useState("");
  const user1 = useSelector(state => state.user.user);
  const token = useSelector(state => state.token.tokenSave);
  const { user} = useAuth0();
  const dispatch = useDispatch()


  function sendReview(e) {
    e.preventDefault();
    if (Number(rating) === 0) {
      return alert("Select raiting please");
    }

    var data =
      {"message": textReview.trim(),
        "raiting": rating,
        "email": user1.email,
        "name": user.nickname,
        "uid": user1.uid
    
    };

    var config = {
      method: "put",
      url: `${process.env.REACT_APP_PRODUCTOS_URL}/product/${id}`,
      headers: {
        "x-token": token,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

    dispatch(addReviewAction(data))
      




      
  }

 
  return (
    <div style={{ marginBottom: "10px" }}>
      <Structure style={{ margin: "auto" }}>
        <br />
        <FormSignIn action="submit">
          <LabelLogIn>Rating</LabelLogIn>

          <Select onChange={(e) => setRating(e.target.value)}>
            <Option value={0}>Select...</Option>
            <Option value={1}>1- Poor</Option>
            <Option value={2}>2- Fair</Option>
            <Option value={3}>3- Good</Option>
            <Option value={4}>4- Very Goog</Option>
            <Option value={5}>5- Excellent</Option>
          </Select>

          <LabelLogIn>Your Comment</LabelLogIn>
          <TextArea
            rows="4"
            cols="70"
            maxLength="250"
            placeholder="Enter your comment"
            onChange={(e) => setTestReview(e.target.value)}
          ></TextArea>

          <ButtonLogIn onClick={(e) => sendReview(e)}>Submit</ButtonLogIn>
        </FormSignIn>
      </Structure>
    </div>
  );
}

export default Review;
