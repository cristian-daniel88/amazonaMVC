import React from "react";
// import { useSelector } from "react-redux";
import { LabelContainer } from "../Product/ProductStyles";
import { ImagenChica, Li, ListContainer, UlList } from "./CartPageStyles";

function CartPage() {
//   const ordenes = useSelector((state) => state.cart.cartItems);

  return (
    <ListContainer>
      <UlList>
        <Li key={1}>
          <ImagenChica src="https://res.cloudinary.com/dcqv3t3uu/image/upload/v1634396320/04c6445578_tosb78.jpg" />
          <LabelContainer>{"name"}</LabelContainer>
          <LabelContainer>
            {" "}
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div> Quantity &nbsp;</div>
              <select
                onChange={()=>{}}
                value={1}
                style={{ borderRadius: "10px", userSelect: "none" }}
              >
                <option key={1} value={1}>
                  {1}
                </option>
              </select>
            </div>
          </LabelContainer>
          <LabelContainer>
              {'price'}
          </LabelContainer>
        </Li>
      </UlList>
    </ListContainer>
  );
}

export default CartPage;
