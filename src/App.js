import { BrowserRouter,Link,Routes,Route } from 'react-router-dom';
import Home from './pages/home';
import './App.css';
import Contact from './pages/contact';
import About from './pages/about';
//import Phone_number from './pages/phone_number';
//import Gallery from './pages/gallery';

function App() {
  return ( 
  <BrowserRouter>
  <nav className='font-serif bg-slate-700 text-white flex gap-10 text-red text-2xl justify-center'>
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
