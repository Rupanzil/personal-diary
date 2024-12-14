import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

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
        {dummyEntries.map((entry) => (
          <div
            key={entry.id}
            style={{
              border: '1px solid black',
              margin: '10px',
              padding: '10px',
            }}
          >
            <h2>{entry.title}</h2>
            <p>
              <strong>Date: </strong>
              {entry.date}
            </p>
            <p>{entry.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
