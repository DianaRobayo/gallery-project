import './App.css';
// Sincroniza las urls, rutas dentro de la app
// Route es para cada una de las rutas
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AgujeroNegros from './components/AgujeroNegros';
import Asteroides from './components/Asteroides';
import Astronautas from './components/Astronautas';
import Explosiones from './components/Explosiones';
import Galaxias from './components/Galaxias';
import Nebulosas from './components/Nebulosas';
import PlanetaTierra from './components/PlanetaTierra';
import SistemaSolar from './components/SistemaSolar';
import Supernovas from './components/Supernovas';
import Cometas from './components/Cometas';
import cometa from "./images/cometa.jpg"


import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navigation from './components/Navigation';


function App() {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home" >Galería del espacio</Navbar.Brand>
          <NavDropdown title="Lista opcional" variant="secondary" menuVariant="dark">
            <NavDropdown.Item href={cometa}>Cometa</NavDropdown.Item>
          </NavDropdown>
        </Container>
      </Navbar>

      <Carousel>
        <Carousel.Item>
          <AgujeroNegros text="Agujero negro" />
          <Carousel.Caption>
            <h3>Agujero negro</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Asteroides text="Asteroide" />
          <Carousel.Caption>
            <h3>Asteroide</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Astronautas text="Astronauta" />
          <Carousel.Caption>
            <h3>Astronauta</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Explosiones text="Explosión de estrellas" />
          <Carousel.Caption>
            <h3>Explosión de estrellas</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Galaxias text="Galaxia" />
          <Carousel.Caption>
            <h3>Galaxia</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Nebulosas text="Nebulosa" />
          <Carousel.Caption>
            <h3>Nebulosa</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <PlanetaTierra text="Planeta Tierra" />
          <Carousel.Caption>
            <h3>Planeta Tierra</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <SistemaSolar text="Sistema solar" />
          <Carousel.Caption>
            <h3>Sistema solar</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Supernovas text="Supernova" />
          <Carousel.Caption>
            <h3>Supernova</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* <Router>
        <Routes>
          <Route path='/agujero-negro' Component={AgujeroNegros} />
          <Route path='/asteroide' Component={Asteroides} />
          <Route path='/astronauta' Component={Astronautas} />
          <Route path='/cometa' Component={Cometas} />
          <Route path='/explosion' Component={Explosiones} />
          <Route path='/galaxia' Component={Galaxias} />
          <Route path='/nebulosa' Component={Nebulosas} />
          <Route path='/sistema-solar' Component={SistemaSolar} />
          <Route path='/supernova' Component={Supernovas} />
        </Routes>
        <Navigation></Navigation>
      </Router> */}
    </>
  );
}


export default App;
