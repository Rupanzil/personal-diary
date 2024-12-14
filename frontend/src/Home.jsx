import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import API_URL from './config'

const Home = () => {
  const navigate = useNavigate()
  const [entries, setEntries] = useState([])

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await axios.get(`${API_URL}/diary-entries`)
        setEntries(response.data.data)
      } catch (error) {
        console.error('Error fetching diary entries: ', error)
      }
    }

    fetchEntries()
  }, [])

  // Dummy data for existing journal entries
  const dummyEntries = [
    {
      id: 1,
      title: 'My First Entry',
      date: '2024-12-10',
      content: 'Today was a great day!',
    },
    {
      id: 2,
      title: 'Learning React',
      date: '2024-12-12',
      content: 'I learned about React Router today!',
    },
  ]

  return (
    <div>
      <h1>My Journal Entries </h1>
      <button onClick={() => navigate('/new-entry')}>New Entry</button>
      <div>
        {entries.map((entry) => (
          <div
            key={entry.id}
            style={{
              border: '1px solid black',
              margin: '10px',
              padding: '10px',
            }}
          >
            <h2>{entry.Title}</h2>
            <p>
              <strong>Date: </strong>
              {entry.Date}
            </p>
            <p>{entry.Content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
