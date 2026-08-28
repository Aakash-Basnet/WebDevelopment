import React from 'react'
import visa from "./assets/images/visa.png";
import mastercard from "./assets/images/master-card.svg";

const CreditCard = (props) => {
   let picture = props.type === "Visa" ? visa : mastercard;
   let number=props.number.slice(-4)
   let req=props.expirationYear.toString()
   let ydate=req.slice(-2)
   let mdate=props.expirationMonth<10? `0${props.expirationMonth}`:props.expirationMonth;



  return (
    <div style={{ backgroundColor: props.bgColor, color: props.color, borderRadius: '10px', padding: '20px',border:"1px solid black", width:500  }}>
       <img src={picture} height="50" width="60" alt="Credit Card"/>
       <h2> •••• •••• •••• {number}</h2>
       <p>Expires {mdate}/{ydate}</p> <h4>{props.bank}</h4>
       <p>{props.owner}</p>

    </div>
  )
}

export default CreditCard