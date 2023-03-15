import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const list = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    (img) => `<div class="gallery__item">
  <a class="gallery__link" href="${img.original}">
    <img
      class="gallery__image"
      src="${img.preview}"
      data-source="${img.original}"
      alt="${img.description}"
    />
  </a>
</div>`
  )
  .join("");
  
list.insertAdjacentHTML("afterbegin", markup);


list.addEventListener("click", modal);

function modal(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`
  );

  instance.show();

  const Esc = (e) => {
    
    if (e.which == 27) {
      instance.close();
    }
    
  };

  window.addEventListener("keydown", Esc);
};

//==========================================================

// const markup = images
//   .map((img) => `<img src=${img.url} alt=${img.alt} width="500">`)
//   .join("");
// list.insertAdjacentHTML("afterbegin", markup);

//==========================================================

// { <div class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>
// </div>; }

//==========================================================

// This is where delegation «magic» happens
// function selectColor(event) {
//   if (event.target.nodeName !== "BUTTON") {
//     return;
//   }
//const selectedColor = event.target.dataset.color;

//===========================================================

// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `)

// instance.show()

//===========================================================

// $('body').keypress(function(e){
//   alert(e.which);
//   if(e.which == 27){
//       // Close my modal window
//   }
// }); 