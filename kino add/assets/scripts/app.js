const addMovieModal = document.getElementById("add-modal");
const startAddMovieButton = document.querySelector("header button");
const backdrop = document.querySelector("#backdrop");
const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input");
const entryTerxtSection = document.getElementById("entry-text");
const deleteMovieModal = document.getElementById("delete-modal");
const movies = [];
const toggleBackdrop = () => {
    backdrop.classList.toggle("visible");
  };
const updateUi = () => {
  movies.length === 0
    ? (entryTerxtSection.style.display = "block")
    : (entryTerxtSection.style.display = "none");
};
const deleteMovie = (movieId) => {
  let MovieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    } else {
      MovieIndex++;
    }
  }

  movies.splice(MovieIndex, 1);
  const ListRoot = document.getElementById("movie-list");
  ListRoot.children[MovieIndex].remove();
  closeMovieDeletionModal()
};
const closeMovieDeletionModal = () => {
  toggleBackdrop();
  deleteMovieModal.classList.remove("visible");
};

const StartDeletMovieHandler = (movieId) => {
  deleteMovieModal.classList.add("visible");
  const cancelDeletionButton=deleteMovieModal.querySelector(".btn--passive")
  const ConfirmDeletionButton= deleteMovieModal.querySelector(".btn--danger")
  ConfirmDeletionButton.removeEventListener("click",deleteMovie.bind(null,movieId))
  ConfirmDeletionButton.addEventListener("click",deleteMovie.bind(null,movieId))
  cancelAddMovieButton.removeEventListener("click",closeMovieDeletionModal)
  cancelDeletionButton.addEventListener("click",closeMovieDeletionModal)
  toggleBackdrop();
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
  const newMovieElement = document.createElement("li");
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
    <img src="${imageUrl}" alt="${title}"/>
    </div>
    <div class="movie-element__info">
    <h2>${title}</h2>
     <p>${rating}/5 stars</p>
    </div>
    `;
  newMovieElement.addEventListener("click", StartDeletMovieHandler.bind(null, id));
  const ListRoot = document.getElementById("movie-list");
  ListRoot.appendChild(newMovieElement);
};

const clearMovieInputs = () => {
  for (const userInput of userInputs) {
    userInput.value = "";
  }
};

const cancelAddMovie = () => {
  closeMovieModal();
  clearMovieInputs();
};
const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imgUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;
  if (
    titleValue.trim() === "" ||
    imgUrlValue.trim() === "" ||
    ratingValue.trim() === "" ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert("Pelase enter valid values(Rating values between from 1 to 5");
    return;
  }
  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: imgUrlValue,
    rating: ratingValue,
  };
  movies.push(newMovie);
  console.log(movies);

  closeMovieModal();
  toggleBackdrop()
  clearMovieInputs();
  updateUi();
  renderNewMovieElement(
    newMovie.id,
    newMovie.title,
    newMovie.image,
    newMovie.rating
  );
};

const closeMovieModal = () => {
  addMovieModal.classList.remove("visible");
};
const showMovieModal = () => {
  addMovieModal.classList.add("visible");
  toggleBackdrop();
};
const backdropClickHandler = () => {
  closeMovieModal();
  closeMovieDeletionModal();
  clearMovieInputs()

};
startAddMovieButton.addEventListener("click", showMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovie);
confirmAddMovieButton.addEventListener("click", addMovieHandler);
