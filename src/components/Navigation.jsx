import React from 'react'
import { Link } from 'react-router-dom'
import AgujeroNegros from './AgujeroNegros'
import Asteroides from './Asteroides'
import Astronautas from './Astronautas'
import Cometas from './Cometas'
import Explosiones from './Explosiones'
import Nebulosas from './Nebulosas'
import PlanetaTierra from './PlanetaTierra'
import Galaxias from './Galaxias'
import SistemaSolar from './SistemaSolar'
import Supernovas from './Supernovas'

const Navigation = () => {
  return (
    <div>
      <Link to="/agujero-negro">
        {/* Etiqueta que contiene para mostrar imagenes */}
        <figure>
          <figcaption>Agujero negro</figcaption>
          <AgujeroNegros/>
        </figure>
      </Link>
      <Link to="/asteroide">
        <figure>
          <figcaption>Asteroide</figcaption>
          <Asteroides/>
        </figure>
      </Link>
      <Link to="/astronauta">
        <figure>
          <figcaption>Astronauta</figcaption>
          <Astronautas/>
        </figure>
      </Link>
      <Link to="/cometa">
        <figure>
          <figcaption>Cometa</figcaption>
          <Cometas/>
        </figure>
      </Link>
      <Link to="/explosion">
        <figure>
          <figcaption>Explosión de estrella</figcaption>
          <Explosiones/>
        </figure>
      </Link>
      <Link to="/galaxia">
        <figure>
          <figcaption>Galaxia</figcaption>
          <Galaxias />
        </figure>
      </Link>
      <Link to="/nebulosa">
        <figure>
          <figcaption>Nebulosa</figcaption>
          <Nebulosas />
        </figure>
      </Link>
      <Link to="/tierra">
        <figure>
          <figcaption>Planeta tierra</figcaption>
          <PlanetaTierra />
        </figure>
      </Link>
      <Link to="/sistema-solar">
        <figure>
          <figcaption>Sistema solar</figcaption>
          <SistemaSolar />
        </figure>
      </Link>
      <Link to="/supernova">
        <figure>
          <figcaption>Supernovas</figcaption>
          <Supernovas />
        </figure>
      </Link>
    </div>
  )
}

export default Navigation