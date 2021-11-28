import styled from "styled-components";

export const ProductContainer = styled.div`
  width: 90%;
  height: auto;

  margin: auto;
  display: flex;
  flex-wrap: wrap;
  margin-top: 3%;
`;

export const ImgProductContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 200px;
  user-select: none;

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

export const ImgProduct = styled.img`
  margin: auto;
  width: 90%;
`;

export const DetailsContainer = styled.div`
  width: 50%;

  @media screen and (max-width: 700px) {
    width: 100%;
    margin-top: 4%;
  }
`;

export const LabelContainer = styled.div`
  margin-bottom: 2%;
`;

export const Label = styled.label`
  font-family: Helvetica, Arial, sans-serif;
`;

export const AddCartProduct = styled.button`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 500;
  background-color: #494989;
  border-radius: 5%;
  font-weight: 600;
  color: white;
  cursor: pointer;
  border: none;
  transition-duration: 0.4s;
  &:active {
    opacity: 0.5;
  }

  @media screen and (max-width: 700px) {
    margin-right: 5%;
  }
`;

export const ContainerAddCart = styled.div`
  width: 100%;
  height: auto;

`;

export const AddCart = styled.div`
  width: 50%;

  margin: auto;
  border: 0.1rem solid silver;
  background-color: #f8f8f8;
  border-radius: 10px;
  padding: 2%;
  margin-top: 10%;

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

export const NoAuthenticatedReview = styled.div`
    color: #2020a0;
    background-color: #e0e0ff;
    width: 100%;

    padding: 1rem;
    border: 0.1rem solid transparent;
    border-radius: 0.5rem;
    margin-top: 10px;
    margin-bottom: 10px;

`

export const ButtonNoAtuhenticated = styled.div`
display: inline;
cursor: pointer;
color: blueviolet;

&:hover {
  color: #ff8000;
}
`

export const ReviewsContainer =styled.div`


`;

export const SpanReviews = styled.div`
padding: 5px 0;

font-weight: 600;

font-family: Helvetica, Arial, sans-serif;

`

export const ReviewUser = styled.div`

`;

export const CommentUser = styled.div `

`;

export const RatingUser = styled.div`

`;

