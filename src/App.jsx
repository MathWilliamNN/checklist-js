import ChecklistBody from "./Components/ChecklistBody"
import ChecklistInput from "./Components/ChecklistInput"
import ShoppingList from "./Components/ShoppingList"


function App() {

  return (
    <>
      <ChecklistBody>
        <ChecklistInput />
        <ShoppingList title = "Shopping List"/>
        <ShoppingList title = "Purchased"/>
      </ChecklistBody>
    </>
  )
}

export default App
