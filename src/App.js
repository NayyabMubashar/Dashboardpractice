import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Property from './Components/Property';
import Blog from './Components/Blog';
import Pages from './Components/Pages';
import Blogsingal from './Components/Blogsingal';
import Agentsingal from './Components/Agentsingal';
import Agentgrid from './Components/Agentgrid';



function App() {
  return (<>
  
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/property' element={<Property/>}/>
    <Route path='/blog' element={<Blog/>}/>
    <Route path='/pages' element={<Pages/>}/>
    <Route path='/blogsingal' element={<Blogsingal/>}/>
    <Route path='/agentsingal' element={<Agentsingal/>}/>
    <Route path='/agentgrid' element={<Agentgrid/>}/>
   
    
    
  

    </Routes>
    </BrowserRouter>
    
  

  </>
   
  );
}

export default App;
