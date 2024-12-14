import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')

  return (
    <>
      <h1>My Personal Diary</h1>
      <div className="card1">
        {/* Enter calendar component here */}
        {/* Text input component here */}
        <textarea
          value={text}
          onChange={(e) => {
            setText(e.target.value)
            setCount(e.target.value.split(' ').length)
          }}
        ></textarea>
        {/* Button component here */}
        <button>Submit</button>
        <p>You have written {count} words</p>
      </div>
    </>
  )
}

export default App
