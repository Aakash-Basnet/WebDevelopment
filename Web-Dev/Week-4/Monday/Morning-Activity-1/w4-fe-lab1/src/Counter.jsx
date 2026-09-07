import "./Counter.css";
import {useState} from "react";

const Counter=()=>{
    const [theme, setTheme] = useState("light");
    const [count, setCount] = useState(0);

    const handleClick=()=>{
        console.log("Button Clicked");
    }

    const setDarkTheme=()=>{
        setTheme("dark");
    }

    const setLightTheme=()=>{
        setTheme("light");
        console.log(theme);
    }


   const toggleHandler=()=>{
    setTheme(theme==="light"?"dark":"light");
   }

   const incrementHandler=()=>{
    setCount(prevCount=>prevCount+1);
   }
   const decrementHandler=()=>{
    setCount(prevCount=>prevCount-1);
   }


    return (
        <div className={`content ${theme}`}>
      <h1>UseState Component</h1>
      <button onClick={setDarkTheme}>Dark</button>
      <button onClick={setLightTheme}>Light</button>
      <button onClick={toggleHandler}>Toggle</button>
      <h2 onClick={incrementHandler}> + </h2><h2>{count}</h2><h2 onClick={decrementHandler}> - </h2>
   </div>
);
}
export default Counter;