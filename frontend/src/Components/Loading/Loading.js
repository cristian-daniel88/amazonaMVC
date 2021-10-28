import React from "react";
import './loading.css'
import { LoadingContainer } from "./LoadingStyles";

function Loading() {
  return (
      <LoadingContainer>

    <div className="lds-spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
      </LoadingContainer>
  );
}

export default Loading;
