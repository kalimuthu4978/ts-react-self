import { useState } from "react";

const App = () => {

  /*
    history = record the increase and decrease click as array along with reset log
  */

  let  [count, setCount] = useState(1);
  let  [history, setHistory] = useState([]);


  const likeClick =() => {
    if (count< 10) {
     setCount(count + 1);
     setHistory([...history, 'I']);
    }

  }

    const dislikeClick =() => {
      if (count >1) {
            setCount(count - 1);
            setHistory([...history, 'D']);
      }
  }

  console.log(history)
  return (
    <>
     
      <button onClick={likeClick}> + </button>
      &nbsp;&nbsp;   <span><strong>{count}</strong></span>  &nbsp;&nbsp; 

      <button onClick={dislikeClick}> - </button>

      &nbsp;&nbsp;
      <button onClick={() => {setCount(1); setHistory([...history,'R'])}}> reset </button>
    </>
  )
}

export default App