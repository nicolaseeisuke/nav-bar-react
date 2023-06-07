import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/pages/Home' 
import Contato from './components/pages/Contato'
import Empresa from './components/pages/Empresa';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
     <Router>
       <Navbar/>
       <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/empresa" element={<Empresa/>}></Route>
         <Route path="/contato" element={<Contato/>}></Route>
       </Routes>
     </Router>
    </div>
  );
}

export default App;
