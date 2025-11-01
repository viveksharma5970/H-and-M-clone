import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Ladies } from './routes/Ladies';
import { Men } from './routes/Men';
import { Kids } from './routes/Kids';
import { Home } from './routes/Home';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Ladies />} />
        <Route path='/men' element={<Men />} />
        <Route path='/kids' element={<Kids />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
