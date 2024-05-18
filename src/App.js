import './App.css';
// Sincroniza las urls, rutas dentro de la app
// Route es para cada una de las rutas
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AgujeroNegros from './components/AgujeroNegros';
import Asteroides from './components/Asteroides';
import Astronautas from './components/Astronautas';
import Cometas from './components/Cometas';
import Explosiones from './components/Explosiones';
import Galaxias from './components/Galaxias';
import SistemaSolar from './components/SistemaSolar';
import Supernovas from './components/Supernovas';
import Nebulosas from './components/Nebulosas';
import Navigation from './components/Navigation';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/agujero-negro' Component={AgujeroNegros}/>
        <Route path='/asteroide' Component={Asteroides}/>
        <Route path='/astronauta' Component={Astronautas}/>
        <Route path='/cometa' Component={Cometas}/>
        <Route path='/explosion' Component={Explosiones}/>
        <Route path='/galaxia' Component={Galaxias}/>
        <Route path='/nebulosa' Component={Nebulosas}/>
        <Route path='/sistema-solar' Component={SistemaSolar}/>
        <Route path='/supernova' Component={Supernovas}/>
      </Routes>
      <Navigation></Navigation>
    </Router>
  );
}

export default App;
