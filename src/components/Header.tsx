const Header = ({name, age}: Props) =>{
  console.log(name)
  console.log (age)
  return(
    <> 
      <h1> Hello {name.slice(0,1).toUpperCase() + name.slice(1,)}!, You are {age} years old!</h1>
    </>
  )
}

export default Header