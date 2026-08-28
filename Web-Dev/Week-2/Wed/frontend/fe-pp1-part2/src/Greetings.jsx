import React from 'react'

const Greetings = (props) => {
    let lang=props.lang
    switch(lang){
        case "de":
            lang="Hallo"
            break;
        case "fr":
            lang="Bonjour"
            break;
    }
  return (
    <div style={{border: "1px solid black", padding: "20px", gap: "20px"}}>{lang} {props.name}</div>
  )
}

export default Greetings