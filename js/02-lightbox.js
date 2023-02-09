import { galleryItems } from './gallery-items.js';
// Change code below this line


console.log(galleryItems);
const galleryEl = document.querySelector('.gallery');

const galleryMarkup = galleryItems.map(({ preview, original, description }) => 
  ` <a class="gallery__item" href="${original}">
 <img class="gallery__image" 
 src="${preview}" 
 alt="${description}" />
  </a>
</div>`).join('');

galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);

    const lightbox = new SimpleLightbox('.gallery a',
        {
            captionDelay: 250,
            captionsData: "alt",
        });



