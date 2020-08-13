import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
       /*  <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
            <div className="container">
                <Link className="navbar-brand text-white" href="/">Lista de Búsquedas</Link>
            </div>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">

                    <a class="nav-link text-white text-right" href="/"><i class="fas fa-home"></i> Crear Nueva Búsqueda </a>
                </li>
                        
                        <a className="nav-link text-white bg-primary" activeClassName="text-secondary" href="/">Agregar busqueda<span class="sr-only">(current)</span></a>
                    </li> 
                </ul>
            </div>
        </nav> */


<ul className="nav nav-tabs bg-info text-white">
  <li className="nav-item">
    <Link className="nav-link active text-white bg-dark" href="/">Lista de Búsquedas</Link>
  </li>
  <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle text-white" data-toggle="dropdown" href="/" role="button" aria-haspopup="true" aria-expande="false">Opciones de Búsqueda</a>
    <div className="dropdown-menu">
    <a className="nav-link text-white bg-secondary" activeClassName="text-secondary" href="/">Agregar busqueda<span className="sr-only">(current)</span></a>
      <a className="dropdown-item" href="/">Crear Nueva Búsqueda</a>
      <a className="dropdown-item" href="#">Actualizar</a>
      <a className="dropdown-item" href="#">Eliminargit</a>
      <div className="dropdown-divider"></div>
      <a className="dropdown-item" href="#">Info</a>
    </div>
  </li>
  <li className="nav-item">
    <a className="nav-link bg-gradient-danger text-white" href="#">Mapas</a>
  </li>
{/*   < li className="nav-item">
    <a className="nav-link disabled bg-light" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  </li>  */}
</ul>
    ) 

    {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" href="/">Lista de Búsquedas</Link>
    <button className="navbar-toggler" type="button" data-toggle="dropdown" data-target="/" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-item nav-link active" href="/">Crear Nueva Búasqueda <span class="sr-only">(current)</span></a>
        <a className="nav-item nav-link" href="/"></a>
        <a className="nav-item nav-link" href="/"></a>
        <a className="nav-item nav-link" href="/"></a>
      </div>
    </div>
  </nav>

) */}
}

export default Navbar
