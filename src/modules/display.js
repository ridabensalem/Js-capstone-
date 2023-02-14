import events from './selectors.js';
import apiHandler from './fetch.js';
import BASE_URL from './utils.js';




const displayMovies = (movies) => {
  movies.forEach((movie) => {
  const { image } = movie.show;
  const list = document.createElement('li');
  const movieName = document.createElement('h3');
  movieName.textContent = movie.show.name
  const img = document.createElement('img');
  const btnContainer = document.createElement('div')
  const commentBtn = document.createElement('button')
  const reserveBtn = document.createElement('button')
  commentBtn.setAttribute('class', 'comment-btn')
  reserveBtn.setAttribute('class', 'reserve-btn')
  btnContainer.setAttribute('class', 'movie-actions')
  commentBtn.textContent = "Comments"
  reserveBtn.textContent = "Reservations"
  img.setAttribute('src', image.medium);
  list.setAttribute('class', 'movie-list');
  btnContainer.appendChild(reserveBtn)
  btnContainer.appendChild(commentBtn)
  list.appendChild(img);
  list.appendChild(movieName);
  list.appendChild(btnContainer)
  events.appendChild(list);
});
};

const getAllEvents = async () => {
  const response = await apiHandler('GET', BASE_URL);
  displayMovies(response);
};

getAllEvents();