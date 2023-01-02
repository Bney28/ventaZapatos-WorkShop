import { useEffect, useState } from "react";
import Axios from "axios";
import * as apis from "./api";
import IconCart from '../img/icon-cart.svg'
import deployModal from "./modal.jsx";

let acomulador = 0

const suma = (_id) => {
  acomulador >= 0 ? acomulador++ : console.log();
  document.getElementById(`${_id}`).innerHTML = acomulador
}

const resta = (_id) => {
  acomulador > 0 ? acomulador-- : alert("No puede llevar una cantidad inferior a uno")
  document.getElementById(`${_id}`).innerHTML = acomulador
}

const carrito=[]
const localStorageAlmacenamiento = (_id,_img,_precio,_nombre) => {

  const cantidad = acomulador

  let newCarrito={
    nombre:_nombre,
    img:_img,
    precio:_precio,
    cantidad:cantidad,
  }
  carrito.push(newCarrito)
  localStorage.setItem('carrito', JSON.stringify(carrito));
  document.getElementById(`${_id}`).innerHTML = 0
  acomulador=0

}

const AppiCard = () => {
  const [articulo, SetArticulo] = useState([])
  useEffect(() => {
    Axios.get(apis.api)
      .then(response => {
        SetArticulo(response.data.record.allArticle)
      })
  }, [])

 
  return (
    <>
      {
        articulo.map(e => {
          const { id, nombre, precio, imagenUno, imagenDos, imagenTres, imagenCuatro, descripcion } = e.product
          return (
            <div className="container">
              <div className="div1">
                <div className="div1__imgPpal" >
                  <img src={imagenUno} onClick={() => deployModal(imagenUno, imagenDos, imagenTres, imagenCuatro)}/>
                </div>

                <div className="div1__imgSec">
                  <img src={imagenDos} onClick={() => deployModal(imagenUno, imagenDos, imagenTres, imagenCuatro)}/>
                  <img src={imagenTres} onClick={() => deployModal(imagenUno, imagenDos, imagenTres, imagenCuatro)}/>
                  <img src={imagenCuatro} onClick={() => deployModal(imagenUno, imagenDos, imagenTres, imagenCuatro)}/>
                </div>
              </div>

              <div className="div2">
                <h6>{nombre}</h6>
                <h1>Fall limited <br></br>Sneakers</h1>
                <p>{descripcion}</p>
                <h4> ${precio}</h4>
                <span>50% Off</span>

                <div className="div2__buttonDiv">
                  <button onClick={() => resta(id)}>-</button>
                  <span id={id} className="contador">0</span>
                  <button onClick={() => suma(id)}>+</button>
                  <button onClick={() => localStorageAlmacenamiento(id,imagenUno,precio,nombre)} className="btnAdd"> <img className="container__img" src={IconCart} /> Add to cart</button>
                </div>
              </div>
              <hr />
            </div>
          )
        })
      }
    </>

  );
 
}

export default AppiCard

