import { useState } from "react";

const App = () => {

  /*
    Complex State: use single state for both count and history
    state = {
              count : 6 ;
              history : ['I', 'D', 'R']
            }
  */

  let [state, setState] = useState({
    count: 1,
    history: []
  });

  const likeClick =() => {
    if (state.count< 10) {
      setState({count: state.count +1, history: [...state.history, 'I']});
    }
  }

    const dislikeClick =() => {
      if (state.count >1) {
        setState({count: state.count -1, history: [...state.history, 'D']});
      }
  }

  console.log(state.history)
  return (
    <>
     
      <button onClick={dislikeClick}> - </button>
      &nbsp;&nbsp;   <span><strong>{state.count}</strong></span>  &nbsp;&nbsp; 
      <button onClick={likeClick}> + </button>

      &nbsp;&nbsp;
      <button onClick={() => {setState({count: 1, history: [...state.history,'R']})}}> reset </button>
    </>
  )
}

export default App