
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
} from "./ProductStyles";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/cartActions";

var axios = require("axios");

function Product() {
  const dispatch = useDispatch()
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);


  const history = useHistory();


  async function AddCartPage() {
    let order = {
      name: product.name,
      price: product.price,
      quantity: qty,
      img: product.img,
      stock: product.stock,
      id:id
    };
    dispatch(addItem(order))


    history.push('/cart');
    console.log(order)
    
  }
  
  const axiosProduct = useCallback(() => {
    var data = "";
    
    var config = {
      method: "get",
      url: `http://localhost:8080/api/products/product/${id}`,
      headers: {},
      data: data,
    };
    
    axios(config)
    .then(function (response) {
      //   console.log(response.data.product);
      setProduct(response.data.product);
    })
    .catch(function (error) {
      console.log(error);
    });
  }, [id]);
  
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
              <Label>Price: &nbsp; £{product.price}</Label>
            </LabelContainer>
            <LabelContainer>
              <Label>Stock: &nbsp; {product.stock}</Label>
            </LabelContainer>
            <LabelContainer>
              <Rating />
            </LabelContainer>

         

            <ContainerAddCart>
              <AddCart>
                <LabelContainer>{product.name}</LabelContainer>
                <LabelContainer style={{ display: "flex" }}>
                  <Rating />
                  <div style={{ width: "100%", textAlign: "right" }}>
                    {25} Reviews
                  </div>
                </LabelContainer>
                <LabelContainer style={{ display: "flex" }}>
                  Price:{" "}
                  <div style={{ width: "100%", textAlign: "right" }}>
                    £{product.price}
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
                <LabelContainer >
                  <div style={{ width: "100%", display:'flex', justifyContent:'space-between' }}>
                 <div> Quantity</div>
                  <select value={qty} onChange={(e) => setQty(e.target.value)} style={{borderRadius:'10px', userSelect: 'none'}}>
                    {[...Array(product.stock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                  </div>
                </LabelContainer >
                <LabelContainer style={{width:'100%', display:'flex', justifyContent:'center'}}>
                <AddCartProduct onClick={()=> {AddCartPage()}}>Add Product</AddCartProduct>

                </LabelContainer>
              </AddCart>
            </ContainerAddCart>
          </DetailsContainer>
        </>
      ) : (
        <Loading />
      )}
    </ProductContainer>
  );
}

export default Product;
