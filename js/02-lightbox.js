import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const list = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    (img) => 
    `<a class="gallery__item" href="${img.original}">
    <img
      class="gallery__image"
      src="${img.preview}"
      data-source="${img.original}"
      alt="${img.description}"
    />
  </a>`
  )
  .join("");
  
list.insertAdjacentHTML("afterbegin", markup);
let lightbox = new SimpleLightbox('.gallery a', {
    captionsData : "alt",
    captionDelay : 250, 
   // enableKeyboard : true,
  

});

//=============================================================

//<a class="gallery__item" href="large-image.jpg">
 // <img class="gallery__image" src="small-image.jpg" alt="Image description" />
//</a>

//=============================================================

//var lightbox = new SimpleLightbox('.gallery a', { /* options */ });

//=============================================================

//captionsData / title /string / get the caption from given attribute
//captionDelay / 0 / int / adds a delay before the caption shows (in ms)