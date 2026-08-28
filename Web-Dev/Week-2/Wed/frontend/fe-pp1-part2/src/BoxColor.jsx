import React from 'react'
function toHex(color) {
  const hex = color.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}
const BoxColor = (props) => {

  return (

    <div className="box" style={{ backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`, border: "1px solid black", padding: "20px", margin: "20px", borderRadius: "10px" }}>
        <h1>rgb ({props.r}, {props.g}, {props.b})</h1>
        <h2> #{toHex(props.r)}{toHex(props.g)}{toHex(props.b)}</h2>
    </div>
  )
}

export default BoxColor