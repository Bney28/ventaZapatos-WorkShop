import IconClose from '../img/icon-close.svg'
import IconNext from '../img/icon-next.svg'
import IconPrevious from '../img/icon-previous.svg'

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
  
export default deployModal