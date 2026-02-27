type Props = {
  getDataFromChild : (message : string) => void,
}

const Header = ({getDataFromChild}: Props) =>{
    let message = "Hi, How are you?"
    getDataFromChild(message);
  return(
    <> 
    <h1> Message from parent </h1>
    </>
  )
}

export default Header