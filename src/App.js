
import './App.css';
import {Route, Routes, Navigate} from 'react-router-dom'
import Registration from './pages/registration';
import Login from './pages/login';
import Main from './pages/Main';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App;
