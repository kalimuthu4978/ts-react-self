
const Header = ({name, age}: {name: string, age: number}) =>{
  console.log(name)
  console.log (age)
  return(
    <> 
      <h1> Hello {name.slice(0,1).toUpperCase() + name.slice(1,)}!, You are {age} years old!</h1>
    </>
  )
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
