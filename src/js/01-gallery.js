// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// console.log(galleryItems);
const myGalery = document.querySelector(".gallery");

const markup = galleryItems
.map(({ preview, original, description }) => `<div class = "gallery__item">
  <a class="gallery__link" href="${original}" >
  <img class = "gallery__image" src="${preview}" data-source = "${original}" alt="${description}"/></a></div>`)
.join("");

myGalery.insertAdjacentHTML("afterbegin", markup); 

const galleryItem = document.querySelector(".gallery__image");

const lightbox = new SimpleLightbox('.gallery a', { captionSelector: 'img', sourceAttrsrc: 'href', 
 captionsData: 'alt', captionDelay: 250 });

