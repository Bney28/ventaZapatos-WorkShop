import { useEffect, useState } from "react";
import Axios from "axios";
import * as apis from "./api";
import "../sass/_modal-cart.scss"
import "../sass/_modal-navbar.scss"
import "../sass/_variables.scss"
import "../sass/_mixins.scss"
import IconCart from '../img/icon-cart.svg'
import IconClose from '../img/icon-close.svg'
import IconNext from '../img/icon-next.svg'
import IconPrevious from '../img/icon-previous.svg'



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
const localStorageAlmacenamiento = (_img,_precio,_nombre) => {

  const cantidad = acomulador

  let newCarrito={
    nombre:_nombre,
    img:_img,
    precio:_precio,
    cantidad:cantidad,
  }

  carrito.push(newCarrito)

  localStorage.setItem('carrito', JSON.stringify(carrito));
}

const deployModal = (imagenUno, imagenDos, imagenTres, imagenCuatro) => {

  const imagesModal = document.createElement("div");
  imagesModal.style.display = 'grid';
  imagesModal.className = "modal-gallery__background'";
  const articleModal = document.createElement("article");
  articleModal.className = "modal-gallery";
  imagesModal.appendChild(articleModal);


  const container1 = document.createElement('div');
  container1.className = 'modal-gallery__close-container';
  const closeModalBtn = document.createElement('img')
  closeModalBtn.className = 'modal-gallery__close';
  closeModalBtn.src = IconClose;
  container1.appendChild(closeModalBtn);
  articleModal.appendChild(container1);


  const container2 = document.createElement('div');
  container2.className = 'modal-gallery__image-container';
  const nextModalBtn = document.createElement('img')
  const previousModalBtn = document.createElement('img')
  nextModalBtn.className = 'modal-gallery__next';
  previousModalBtn.className = 'modal-gallery__previus';
  nextModalBtn.src = IconNext;
  previousModalBtn.src = IconPrevious;
  container2.setAttribute("style", `background-image: url(${imagenUno})`)
  container2.appendChild(nextModalBtn);
  container2.appendChild(previousModalBtn);
  articleModal.appendChild(container2);

  const container3 = document.createElement('div');
  container3.className = 'modal-gallery__thumnails';
  const img1 = document.createElement('img');
  const img2 = document.createElement('img');
  const img3 = document.createElement('img');
  const img4 = document.createElement('img');
  img1.className = "modal-gallery__thumnail";
  img1.src = imagenUno;
  img2.className = "modal-gallery__thumnail";
  img2.src = imagenDos;
  img3.className = "modal-gallery__thumnail";
  img3.src = imagenTres;
  img4.className = "modal-gallery__thumnail";
  img4.src = imagenCuatro;
  container3.appendChild(img1);
  container3.appendChild(img2);
  container3.appendChild(img3);
  container3.appendChild(img4);
  articleModal.appendChild(container3)


  imagesModal.setAttribute("style", "background-color: #00000080; position: fixed; top: 0; left: 0; width: 100%; height: 100%;z-index: 1;")
  articleModal.style.margin = "0 auto";

  document.body.appendChild(imagesModal);



  closeModalBtn.addEventListener('click', () => {
    imagesModal.style.display = 'none';
  })

  //Cambiar las imagenes principales desde los thumbnails en el MODAL
 
  let modalthumbnails = [img1, img2, img3, img4]
  console.log(modalthumbnails);
  const modalImageContainer = container2;
  // modalthumbnails = [...modalthumbnails]


  modalthumbnails.forEach(modalthumbnail => {
    modalthumbnail.addEventListener('click', (event) => {
      // console.log(modalthumbnail);
      modalImageContainer.setAttribute("style", `background-image: url(${event.target.src})`)
    });
  });

  nextModalBtn.addEventListener('click', () => {
    changeNextImage(modalImageContainer);
  });

  previousModalBtn.addEventListener('click', () => {
    changePreviousImage(modalImageContainer);
  });

  let imgIndex = 0;
  const imagenes = [imagenUno, imagenDos, imagenTres, imagenCuatro];

  function changeNextImage(imgContainer) {
    if (imgIndex === 3) {
      imgIndex = 0;
    } else {
      imgIndex++;
    }
    imgContainer.setAttribute("style", `background-image: url(${imagenes[imgIndex]})`)
  }

  function changePreviousImage(imgContainer) {
    if (imgIndex === 0) {
      imgIndex = 3;
    } else {
      imgIndex--;
    }
    console.log(imagenes[imgIndex]);
    imgContainer.setAttribute("style", `background-image: url(${imagenes[imgIndex]})`)
  }

};

const AppiCard = () => {
  const [articulo, SetArticulo] = useState([])
  useEffect(() => {
    Axios.get(apis.apiAll())
      .then(response => {
        SetArticulo(response.data)
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
                <div className="div1__imgPpal" onClick={() => deployModal(imagenUno, imagenDos, imagenTres, imagenCuatro)}>
                  <img src={imagenUno} />
                </div>

                <div className="div1__imgSec">
                  <img src={imagenDos} />
                  <img src={imagenTres} />
                  <img src={imagenCuatro} />
                </div>
              </div>

              <div className="div2">
                <h6>{nombre}</h6>
                <h1>Fall limited <br></br>Sneakers</h1>
                <p>{descripcion}</p>
                <h4> ${precio}</h4>
                <span>50% Off</span>

                <div className="div2__buttonDiv">
                  <button onClick={() => suma(id)}>+</button>
                  <span id={id} className="contador">0</span>
                  <button onClick={() => resta(id)}>-</button>
                  <button onClick={() => localStorageAlmacenamiento(imagenUno,precio,nombre)} className="btnAdd"> <img className="container__img" src={IconCart} /> Add to cart</button>
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

