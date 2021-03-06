import React from "react";
import {Link} from "react-router-dom";
import Foto_1 from "../captura1.jpg";
const Misproyectos = () => {
  return (
    <div>
    <div className={'container'}>
      <title>Ivan Barcia</title>
        <br></br>
        <nav class="navbar navbar-expand-lg  navbar-dark bg-dark">
          <div class="container-fluid">
              <Link class="navbar-brand"  to={'/'}>Ivan Barcia</Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                <Link class="nav-link active"  to={'/about'}>Sobre mi</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link active"  to={'/Misproyectos'}>Mis proyectos</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link active"  to={'/contactame'}>Contactame</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <br></br>

<h1>Proyectos personales</h1>
Realicé un sitio web que permite administrar los pacientes de una veterinaria, abajo podés observar el link al sitio y una captura de pantalla:
<br></br>
<img src={'https://stackblitz.com/files/react-ucczjx/github/Ivan-Barcia2021/react-ucczjx/master/captura1.jpg'}/>
<br></br>
Link: stackblitz.com/edit/react-vvrmbz
<br></br>
Además, desarrollé otro sitio, el cual tiene como objetivo traer información sobre distintas personas, desde una api. 
<br></br>
<img src={'https://cdn.jsdelivr.net/gh/Ivan-Barcia2021/react-v9blxf@master/TP9.PNG'}/>
<p></p>



    </div>
        <footer>
          <div class="container">
            <center>
            <div class="row">
              <div class="col">
                <a href="#">
                  <img src= {"https://cdn-icons-png.flaticon.com/512/1384/1384005.png"} width= {30} height= {30}/>
                </a>
                <a href="#">
               
                </a>
                <a href="#">
                <img src= {"https://cdn-icons-png.flaticon.com/512/1384/1384023.png"} width= {30} height= {30}/>
                </a>
              </div>
            </div>
            <p class="textoblanco">Ivan Nahuel Barcia Golato</p>
            </center>
          </div>
        </footer>
</div>
  );
};

export default Misproyectos;