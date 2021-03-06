import React from "react";
import { useEffect } from "react";
import { useCallback } from "react";

import { useState } from "react";

import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import { useHistory } from "react-router-dom";
import Rating from "../Rating/Rating";

import {
  ProductContainer,
  ImgProduct,
  ImgProductContainer,
  DetailsContainer,
  Label,
  LabelContainer,
  AddCartProduct,
  ContainerAddCart,
  AddCart,
  NoAuthenticatedReview,
  ButtonNoAtuhenticated,
  ReviewsContainer,
 
  CommentUser,
  RatingUser,
  SpanReviews,
  ReviewUser,
} from "./ProductStyles";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/cart/cartActions";
import { useAuth0 } from "@auth0/auth0-react";
import Review from "../Review/Review";
import { updateReviewAction } from "../../redux/updateReview/updaReviewActions";


var axios = require("axios");

function Product() {
  const dispatch = useDispatch();
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);
  const {loginWithRedirect, isAuthenticated} = useAuth0();
  const reviews = useSelector(state => state.reviews.reviews);


  const history = useHistory();

  async function signWithReviews(uid) {
    await loginWithRedirect();

  }

  function AddCartPage() {
    if (isAuthenticated) {
  
      let order = {
        name: product.name,
        price: product.price,
        quantity: Number(qty),
        img: product.img,
        stock: product.stock,
        id: id,
        subtotal: product.price * qty,
      };
      dispatch(addItem(order));
  
      history.push("/cart");
    } else {
      return loginWithRedirect();
      
    }

  }

  const axiosProduct = useCallback(() => {
    var data = "";

    var config = {
      method: "get",
      url: `${process.env.REACT_APP_PRODUCTOS_URL}/product/${id}`,
      headers: {},
      data: data,
    };

    axios(config)
      .then(function (response) {
        
        dispatch(updateReviewAction(response.data.product.review))
        setProduct(response.data.product);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [id, dispatch]);

  useEffect(() => {
    axiosProduct();
  }, [axiosProduct]);

  return (

    <ProductContainer>
      {product ? (
        <>
          {" "}
          <ImgProductContainer>
            <ImgProduct src={product.img} />
          </ImgProductContainer>
          <DetailsContainer>
            <LabelContainer>
              <Label>Name:&nbsp; {product.name}</Label>
            </LabelContainer>
            <LabelContainer>
              <Label>Description: &nbsp; {product.description}</Label>
            </LabelContainer>
            <LabelContainer>
              <Label>Price: &nbsp; ??{product.price}</Label>
            </LabelContainer>
            <LabelContainer>
              <Label>Stock: &nbsp; {product.stock}</Label>
            </LabelContainer>
            <LabelContainer>
              
            </LabelContainer>

            <ContainerAddCart>
              <AddCart>
                <LabelContainer>{product.name}</LabelContainer>
                <LabelContainer style={{ display: "flex" }}>
                  <Rating rating={ product.review.reduce((acc, item)=> {return acc + Number(item.raiting)}, 0) / product.review.length} />
                  <div style={{ width: "100%", textAlign: "right" }}>
                    {product.review.length} Reviews
                  </div>
                </LabelContainer>
                <LabelContainer style={{ display: "flex" }}>
                  Price:{" "}
                  <div style={{ width: "100%", textAlign: "right" }}>
                    ??{product.price}
                  </div>
                </LabelContainer>
                <LabelContainer style={{ display: "flex" }}>
                  Status:{" "}
                  <div style={{ width: "100%", textAlign: "right" }}>
                    {product.stock > 0 ? (
                      <div style={{ color: "green" }}>In Stock</div>
                    ) : (
                      <div style={{ color: "red" }}>Sold Out</div>
                    )}
                  </div>
                </LabelContainer>
                <LabelContainer>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div> Quantity</div>
                    <select
                      value={qty}
                      onChange={(e) => setQty(e.target.value)}
                      style={{ borderRadius: "10px", userSelect: "none" }}
                    >
                      {[...Array(product.stock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                </LabelContainer>
                <LabelContainer
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <AddCartProduct
                    onClick={() => {
                      AddCartPage();
                    }}
                  >
                    Add Product
                  </AddCartProduct>
                </LabelContainer>
              </AddCart>
            </ContainerAddCart>
          </DetailsContainer>

          <ReviewsContainer>
            <SpanReviews>Reviews:</SpanReviews>

          {reviews.map((value, index) => {
         
           return  (
              <ReviewUser key={index}>
              <CommentUser>{value.name}: {value.message}</CommentUser>
              <RatingUser><Rating rating={value.raiting}/></RatingUser>
            </ReviewUser>
            )
          })}
           

          </ReviewsContainer>
  
          {!isAuthenticated ?
          (
            <NoAuthenticatedReview>
            Please&nbsp;
            <ButtonNoAtuhenticated  onClick={()=> signWithReviews()}>
            Sign In 
            </ButtonNoAtuhenticated>
            &nbsp;to write a review
          </NoAuthenticatedReview>
          )
          :
          (
            <div style={{width:'100%'}}>
              <Review id={id} axiosProduct={axiosProduct}/>
            </div>
          )
          }
         
        



        </>
      ) : (
        <Loading />
      )}
    </ProductContainer>
  );
}

export default Product;
