import './App.css'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar/Navbar'
import Homescreen from './Screens/Homescreen/Homescreen'
import Cartscreen from './Screens/Cartscreen/Cartscreen'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Loginscreen from './Screens/Loginscreen/Loginscreen'
import Registerscreen from './Screens/Registerscreen/Registerscreen'

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route exact='true' path='/' element={<Homescreen />} />
          <Route exact='true' path='/cart' element={<Cartscreen />} />
          <Route exact='true' path='/login' element={<Loginscreen />} />
          <Route exact='true' path='/register' element={<Registerscreen />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
