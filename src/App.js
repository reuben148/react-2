import { BrowserRouter,Link,Routes,Route } from 'react-router-dom';
import Home from './pages/home';
import './App.css';
import Contact from './pages/contact';
import About from './pages/about';
import Phone_number from './pages/phone_number';
import Gallery from './pages/gallery';

function App() {
  return ( 
  <BrowserRouter>
  <nav className='bg-blue-500 flex justify-end text-center gap-10 text-white text-2xl'>
    <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>
    <Link to='/contact'>Contact</Link>
  </nav>
    <div className="App">
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/> 

  </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
