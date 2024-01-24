const accessKey = "yatmYfJkdbM9yR9r8Icqdx7Gp_Xn3jlv1uzU5tMH8Ig";
const galleryContainer = document.getElementById("gallery-container");
const mainImage = document.getElementById("main-image");
const thumbnailsContainer = document.getElementById("thumbnails-container");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

let currentPage = 1;

function fetchImages(query) {
  const url = `https://api.unsplash.com/search/photos?page=${currentPage}&query=${query}&client_id=${accessKey}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      displayImages(data.results);
    })
    .catch((error) => console.error("Error fetching images:", error));
}

function displayImages(images) {
  mainImage.src = images[0].urls.regular;
  mainImage.alt = images[0].alt_description;

  thumbnailsContainer.innerHTML = "";
  images.forEach((image, index) => {
    const thumbnail = document.createElement("img");
    thumbnail.src = image.urls.thumb;
    thumbnail.alt = image.alt_description;
    thumbnail.classList.add("thumbnail");
    thumbnail.addEventListener("click", () => showImage(index, images));
    thumbnailsContainer.appendChild(thumbnail);
  });
}

function showImage(index, images) {
  mainImage.src = images[index].urls.regular;
  mainImage.alt = images[index].alt_description;
}

function handleSearch() {
  const searchTerm = searchInput.value;
  currentPage = 1;
  fetchImages(searchTerm);
}

searchButton.addEventListener("click", handleSearch);

// Initial load
fetchImages("nature");
