import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const DiaryPage = () => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  const handleSubmit = () => {
    // placeholder for API call
    setMessage('Your entry has been saved successfully!')
    setTimeout(() => navigate('/'), 2000)
  }

  return (
    <div>
      <h1>Write a something today.... </h1>
      <input
        type="text"
        placeholder="Enter title here..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Write your thoughts here..."
        value={text}
        onChange={(e) => {
          setText(e.target.value)
          setCount(e.target.value.split(' ').length)
        }}
      ></textarea>
      <button onClick={handleSubmit}>Submit</button>
      <p>{count} words</p>
      {message && <p>{message}</p>}
    </div>
  )
}

export default DiaryPage
