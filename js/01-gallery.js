import { galleryItems } from './gallery-items.js';
// Change code below this line
// const basicLightbox = require('basiclightbox');
// import * as basicLightbox from 'basiclightbox';



const galleryEl = document.querySelector('.gallery');
const galleryMarkup = galleryItems.map(({ preview, original, description }) => 
  `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt='${description}'
    />
  </a>
</div>`).join('');

galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);

 galleryEl.addEventListener('click', showOriginalImgOnClick);

function showOriginalImgOnClick(event) {
 event.preventDefault();
  
  if (event.target.NodeName === "img") {
    return;
  };

  const onClickEscapeCloseModal = (e) => {
    const ESC_KEY = 'Escape';
    if (e.code === ESC_KEY) {
      instance.close()
    }
  };

  const instance = basicLightbox.create(`<div class="modal">
    <img src='${event.target.dataset.source}' </div>`, {
  
    onShow: (instance) => {
      window.addEventListener('keydown', onClickEscapeCloseModal)
    },
    onClose: (instance) => {
         window.removeEventListener('keydown', onClickEscapeCloseModal)
    },
	})
  instance.show();
}


  

 

