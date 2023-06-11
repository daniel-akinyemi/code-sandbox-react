import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Navbar from './components/Navbar'

const App = () => {
  return(
    <div className="app max-w-[1200px] mx-auto bg-white">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route
        element={<Homepage/>}
        path='/'
        />
        
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App