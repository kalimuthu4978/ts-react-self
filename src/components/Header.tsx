type Props = {
/*   name : string,
  age : number */
  message : string
}

const Header = ({message}: Props) =>{

  return(
    <> 
 {/*      // <h1> Hello {name.slice(0,1).toUpperCase() + name.slice(1,)}!, You are {age} years old!</h1> */}
    <h1> Message from parent : {message} </h1>
    </>
  )
}

export default Header