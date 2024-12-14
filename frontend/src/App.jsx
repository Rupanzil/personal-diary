import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom'
import Home from './Home'
import DiaryPage from './DiaryPage'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-entry" element={<DiaryPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
