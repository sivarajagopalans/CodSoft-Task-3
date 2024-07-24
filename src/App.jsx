import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BlogForm } from './components/BlogForm'
import { NavbarComponent } from './components/NavbarComponent';
import { Route, Routes } from 'react-router-dom';
import { Posts } from './components/Posts';

function App() {

  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route index path='/' element={<BlogForm />} />
        <Route path='/all-posts' element={<Posts />} />
      </Routes>
    </>
  )
}

export default App
