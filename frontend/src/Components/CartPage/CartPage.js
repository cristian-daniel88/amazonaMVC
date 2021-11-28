import React, {} from "react";
import { useDispatch, useSelector } from "react-redux";
import { LabelContainer } from "../Product/ProductStyles";
import { ButtonToCheckOut, ImagenChica, LabelContainer1, LabelContainer2, LabelContainer3, LabelContainer4, LabelContainer5, LabelContainer6, Li, ListContainer, ProceedToCheckOut, UlList } from "./CartPageStyles";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { editCart, removeItem } from "../../redux/cart/cartActions";
import { useHistory } from "react-router-dom";



function CartPage() {
    const ordenes = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();
    const history = useHistory();

    function toShipping () {
      history.push('/shipping')
    }


    function deleteOrder(id) {
   
      dispatch(removeItem(id))
    }

    const changeValueOrder = ( e, id) => {
        e.preventDefault()
        dispatch(editCart(id, e.target.value))
    }

    




  return (
    <ListContainer>
      
      <UlList>
        {ordenes?.map((value, i)=>{

       return   (
            <Li key={i}>
            
            <LabelContainer1 >
            <ImagenChica src={value.img} />
            </LabelContainer1 >

            <LabelContainer2>
              {value.name}
            </LabelContainer2>

            <LabelContainer3>
            <div style={{ width: "100%", display:'flex'}}>
                 <div> Quantity</div>&nbsp;
                  <select value={value.quantity} onChange={(e)=> {changeValueOrder(e, value.id)} } style={{borderRadius:'10px', userSelect: 'none', cursor:'pointer'}}>
                    {[...Array(value.stock).keys()].map((x) => (
                      
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                  </div>
            </LabelContainer3>

            <LabelContainer4   >
                Price: £{value.price}
            </LabelContainer4>


            <LabelContainer5>
                Subtotal: £{value.subtotal}
            </LabelContainer5>

            <LabelContainer6>
              <DeleteOutlineIcon style={{cursor:'pointer'}} onClick={()=> deleteOrder(value.id)}/>
            </LabelContainer6>
          </Li>
          
          )
        })}
      <Li style={{borderTop:"1px solid black", padding:'10px', border:'none'}}>
        <LabelContainer1></LabelContainer1>
        <LabelContainer2></LabelContainer2>
        <LabelContainer3 ></LabelContainer3>
        <LabelContainer4></LabelContainer4>
        <LabelContainer5 style={{color:"green", borderRadius:'10px',background: '#80808066'}}>&nbsp; &nbsp; &nbsp; &nbsp;Total: £{ordenes.reduce((acc, item) => {return acc + item.subtotal},0)}</LabelContainer5>
        <LabelContainer6 ></LabelContainer6>
      </Li>
      </UlList>
      <ProceedToCheckOut>
        <LabelContainer>Total: £{ordenes.reduce((acc, item) => {return acc + item.subtotal},0)}</LabelContainer>
        <ButtonToCheckOut onClick={toShipping}>Proceed to CheckOut</ButtonToCheckOut>
      </ProceedToCheckOut>
      <div style={{height:'3vh'}}></div>
    </ListContainer>
  );
}

export default CartPage;
