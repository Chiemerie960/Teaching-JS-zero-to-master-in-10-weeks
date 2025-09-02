const accessKey = "uIWwoMFbmjaaSXGJZlndS275Rq7JpxKpoSif8n5Wh7o";

const btn = document.getElementById("btn");
const gallery = document.getElementById("gallery");
const searchInput = document.getElementById("search");
const loadMoreBtn = document.getElementById("loadMore");

let currentPage = 1;
let currentQuery = null;

function displayImages(photos, append = false) {
  const html = photos
    .map(
      (img) => `
    <div class="card">
      <img src="${img.urls.small}" alt="${
        img.alt_description || "Unsplash Image"
      }" />
    </div>
  `
    )
    .join("");

  if (append) {
    gallery.innerHTML += html;
  } else {
    gallery.innerHTML = html;
  }
}

function loadInitialPhotos(page = 1) {
  fetch(`https://api.unsplash.com/photos?per_page=12&page=${page}`, {
    headers: { Authorization: `Client-ID ${accessKey}` },
  })
    .then((res) => res.json())
    .then((data) => displayImages(data, page > 1))
    .catch((err) => console.error(err));
}

function searchPhotos(query, page = 1) {
  fetch(
    `https://api.unsplash.com/search/photos?query=${query}&per_page=12&page=${page}`,
    {
      headers: { Authorization: `Client-ID ${accessKey}` },
    }
  )
    .then((res) => res.json())
    .then((data) => displayImages(data.results, page > 1))
    .catch((err) => console.error(err));
}

btn.addEventListener("click", () => {
  currentQuery = searchInput.value.trim();
  currentPage = 1;
  if (currentQuery) {
    searchPhotos(currentQuery, currentPage);
  } else {
    loadInitialPhotos(currentPage);
  }
});

loadMoreBtn.addEventListener("click", () => {
  currentPage++;
  if (currentQuery) {
    searchPhotos(currentQuery, currentPage);
  } else {
    loadInitialPhotos(currentPage);
  }
});

loadInitialPhotos();
