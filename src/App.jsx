import ChecklistBody from "./Components/ChecklistBody"
import ChecklistInput from "./Components/ChecklistInput"
import ShoppingList from "./Components/ShoppingList"
import { ItemProvider } from "./Context"


function App() {



  return (
    <>
      <ChecklistBody>
        <ItemProvider>
          <ChecklistInput />
          <ShoppingList/>
        </ItemProvider>
      </ChecklistBody>
    </>
  )
}

export default App
