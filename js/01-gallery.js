import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
galleryContainer.addEventListener("click", selectGalleryItem);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
    </a>
</div>
    `;
    })
    .join("");
}
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

function selectGalleryItem(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const imageOriginal = event.target.dataset.source;
  const imageAlt = event.target.description;

  const instance = basicLightbox.create(
    `<img src="${imageOriginal}" alt="${imageAlt}" width="800" height="600">`
  );

  instance.show();
}
