import Header from "./components/Header"

type Props = {
  name : string,
  age : number
}


const App = () => {
  // define the data nd js fucntions before return
  let name  = "Jeevitha"
  let age = 25
  return (
    <> 
        <Header name = {name} age = {age}/>
    </>
  )
}
export default App;
