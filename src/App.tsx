import { useState } from "react";

const App = () => {

  const [count, setCount] = useState(1);


  const likeClick =() => {
    if (count< 10) {
     setCount(count + 1);
    }

  }

    const dislikeClick =() => {
      if (count >1) {
            setCount(count - 1);
      }
  }


  return (
    <>
     
      <button onClick={likeClick}> + </button>
      &nbsp;&nbsp;   <span><strong>{count}</strong></span>  &nbsp;&nbsp; 

      <button onClick={dislikeClick}> - </button>

      &nbsp;&nbsp;
      <button onClick={() => setCount(1)}> reset </button>
    </>
  )
}

export default App