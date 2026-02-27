import ParentComponent from "./components/ParentComponent"
type Props = {
  name :string
}
const App = () => {
  const name :string = "Kali";
  return (
    <>
      <ParentComponent name = {name}/>
    </>
  )
}

export default App