import { useState } from "react"


function App() {

  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter + 1)
    console.log(counter)
  }

  const removeValue = () =>
  {
    setCounter(counter - 1)

  }
  return (
    <div>
      <h1>Current value:</h1>

      <h2>Updated Value: {counter} </h2>

      <button onClick={addValue}>Add</button><br/>

      <button onClick={removeValue}>Remove</button>
    </div>
  )
}

export default App