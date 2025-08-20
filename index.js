const dogBtn = document.getElementById("dog-btn");
const catBtn = document.getElementById("cat-btn");
const multiBtn = document.getElementById("multi-btn");

const dogDisplay = document.getElementById("dog-display");
const catDisplay = document.getElementById("cat-display");
const multiDisplay = document.getElementById("multi-display");

// Arrays to store fetched results (avoid duplicates)
let dogHistory = [];
let catHistory = [];

// Loader helper
function showLoader(container) {
  container.innerHTML = `<div class="loader"></div>`;
}
function hideLoader(container, content) {
  container.innerHTML = content;
}

// Fetch Random Dog
dogBtn.addEventListener("click", async () => {
  showLoader(dogDisplay);
  console.log(dogHistory)
  try {
    let newDog;
    do {
      const res = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await res.json();
      newDog = data.message;
    } while (dogHistory.includes(newDog)); // Avoid duplicates

    dogHistory.push(newDog);
    hideLoader(dogDisplay, `<img src="${newDog}" alt="Dog" />`);
  } catch {
    hideLoader(dogDisplay, `<p>Oops! Something went wrong 🐶</p>`);
  }
});

// Fetch Random Cat Fact
catBtn.addEventListener("click", async () => {
  showLoader(catDisplay);
  try {
    let newFact;
    do {
      const res = await fetch("https://catfact.ninja/fact");
      const data = await res.json();
      newFact = data.fact;
    } while (catHistory.includes(newFact)); // Avoid duplicates

    catHistory.push(newFact);
    hideLoader(catDisplay, `<p>${newFact}</p>`);
  } catch {
    hideLoader(catDisplay, `<p>Oops! Something went wrong 🐱</p>`);
  }
});

// Fetch 3 Dogs in Parallel
multiBtn.addEventListener("click", async () => {
  showLoader(multiDisplay);
  try {
    const res = await Promise.all([
      fetch("https://dog.ceo/api/breeds/image/random").then(r => r.json()),
      fetch("https://dog.ceo/api/breeds/image/random").then(r => r.json()),
      fetch("https://dog.ceo/api/breeds/image/random").then(r => r.json())
    ]);

    const dogs = res.map(d => d.message);
    dogHistory.push(...dogs);

    hideLoader(
      multiDisplay,
      dogs.map(src => `<img src="${src}" alt="Dog" />`).join("")
    );
  } catch {
    hideLoader(multiDisplay, `<p>Oops! Something went wrong</p>`);
  }
});
