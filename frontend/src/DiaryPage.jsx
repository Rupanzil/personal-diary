import { useState } from 'react'
import axios from 'axios'
import API_URL from './config'
import { useNavigate } from 'react-router-dom'

const DiaryPage = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async () => {
    // placeholder for API call
    try {
      await axios.post(`${API_URL}/diary-entries`, {
        data: {
          Title: title,
          Content: content,
          Date: new Date().toISOString(),
        },
      })
      setMessage('Your entry has been saved successfully!')
      setTimeout(() => navigate('/'), 2000)
    } catch (error) {
      setMessage('Error saving diary entry')
      console.error(error)
    }
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
        value={content}
        onChange={(e) => {
          setContent(e.target.value)
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
