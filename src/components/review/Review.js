import React from "react";
import './index.css';
import './style.css';

import carousel1 from "./carousel1.jpg";
import carousel2 from "./carousel2.jpg";
import carousel3 from "./carousel3.jpg";
import avatar from "./avatar.png"



class Review extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row contenedorImgJuego">
          <div className="col-md-12 imgJuego animated zoomIn">{}</div>
        </div>
        <div className="row segundaSeccion">
          <div className="col-md-6 offset-md-1 animated slideInLeft texto">
            <h1>Descripción del juego</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
            <div
              id="carouselExampleIndicators"
              className="carousel slide animated zoomIn"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to={0}
                  className="active"
                />
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to={1}
                />
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to={2}
                />
              </ol>
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                  <img
                    className="d-block img-fluid"
                    src={carousel1}
                    alt="First slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block img-fluid"
                    src={carousel2}
                    alt="Second slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block img-fluid"
                    src={carousel3}
                    alt="Third slide"
                  />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
          <div className="col-md-4 offset-md-1 animated slideInRight seccionComentarios">
            <h1 className="texto center">Comentarios</h1>
            <div className="Comentarios">
              <ul className="listaComentarios">
                <li className="comentario">
                  <div className="col-12">
                    <img src={avatar} className="imgComentario" />
                    <span className="nombreUsuario texto">Gms427</span>
                  </div>
                  <div className="col-12">
                    <span className="texto">
                      Comentario Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit, sed do eiusmod tempor incididunt{" "}
                    </span>
                  </div>
                </li>
                <li className="comentario">
                  <div className="col-12">
                    <img src={avatar} className="imgComentario" />
                    <span className="nombreUsuario texto">Gms427</span>
                  </div>
                  <div className="col-12">
                    <span className="texto">
                      Comentario Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit, sed do eiusmod tempor incididunt{" "}
                    </span>
                  </div>
                </li>
                <li className="comentario">
                  <div className="col-12">
                    <img src={avatar} className="imgComentario" />
                    <span className="nombreUsuario texto">Gms427</span>
                  </div>
                  <div className="col-12">
                    <span className="texto">
                      Comentario Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit, sed do eiusmod tempor incididunt{" "}
                    </span>
                  </div>
                </li>
                <li className="comentario">
                  <div className="col-12">
                    <img src={avatar} className="imgComentario" />
                    <span className="nombreUsuario texto">Gms427</span>
                  </div>
                  <div className="col-12">
                    <span className="texto">
                      Comentario Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit, sed do eiusmod tempor incididunt{" "}
                    </span>
                  </div>
                </li>
                <li className="comentario">
                  <div className="col-12">
                    <img src={avatar} className="imgComentario" />
                    <span className="nombreUsuario texto">Gms427</span>
                  </div>
                  <div className="col-12">
                    <span className="texto">
                      Comentario Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit, sed do eiusmod tempor incididunt{" "}
                    </span>
                  </div>
                </li>
                <li className="comentario">
                  <div className="col-12">
                    <img src={avatar} className="imgComentario" />
                    <span className="nombreUsuario texto">Gms427</span>
                  </div>
                  <div className="col-12">
                    <span className="texto">
                      Comentario Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit, sed do eiusmod tempor incididunt{" "}
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="form-group nuevoComentario">
              <div className="col-12">
                <h4 className="blanco">Dejanos tu calificacion</h4>
                <div className="ec-stars-wrapper">
                  <a
                    className="animate"
                    href="javascript:;"
                    data-value={1}
                    title="Votar con 1 estrellas"
                    onclick="estrella1();"
                    id="star1"
                  >
                    ★
                  </a>
                  <a
                    className="animate"
                    href="javascript:;"
                    data-value={2}
                    title="Votar con 2 estrellas"
                    onclick="estrella2();"
                    id="star2"
                  >
                    ★
                  </a>
                  <a
                    className="animate"
                    href="javascript:;"
                    data-value={3}
                    title="Votar con 3 estrellas"
                    onclick="estrella3();"
                    id="star3"
                  >
                    ★
                  </a>
                  <a
                    className="animate"
                    href="javascript:;"
                    data-value={4}
                    title="Votar con 4 estrellas"
                    onclick="estrella4();"
                    id="star4"
                  >
                    ★
                  </a>
                  <a
                    className="animate"
                    href="javascript:;"
                    data-value={5}
                    title="Votar con 5 estrellas"
                    onclick="estrella5();"
                    id="star5"
                  >
                    ★
                  </a>
                </div>
                <div>
                  <label htmlFor="comment" className="texto">
                    Comentario:
                  </label>
                </div>
                <textarea
                  className="form-control"
                  rows={5}
                  id="comentario"
                  placeholder="Escriba su comentario..."
                  defaultValue={""}
                />
                <p id="necesario" />
                <input
                  className="btn btn-primary"
                  type="submit"
                  defaultValue="Comentar"
                  onclick="comentar()"
                  id="comentar"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Review;
