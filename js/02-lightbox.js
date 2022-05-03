import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createImageCardMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function createImageCardMarkup(items) {
	return items.map(({ preview, original, description }) => {
		return `
		<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
		`
	}).join('');
};

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  close: false,
});