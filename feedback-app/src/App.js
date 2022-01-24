import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackFrom'
import AboutPage from './pages/AboutPage'
import { FeedbackProvider } from './context/FeedbackContext'
import AboutIconLink from './components/AboutIconLink'

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route exact path='/' element={
              <>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
              </>
            }>
            </Route>

            <Route path='/about' element={<AboutPage />} />
            
          </Routes>
          {/* <Card>
            <NavLink to='/' activeClassName='active'>Home</NavLink>
            <NavLink to='/about' activeClassName='active'>About</NavLink>
          </Card> */}
          
        </div>
        <AboutIconLink />
      </Router>
    </FeedbackProvider>
  )
}

export default App
