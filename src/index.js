import './style.css';
import { getAllMovies, likeMovie } from './modules/utils.js';
import displayMovies from './modules/display.js';

const displayAllMovies = async () => {
  const movies = await getAllMovies();
  displayMovies(movies);
  const icons = document.querySelectorAll('.like-icon');
  icons.forEach((icon) => {
    const itemId = icon.getAttribute('id');
    icon.addEventListener('click', () => likeMovie(itemId));
  });
};

displayAllMovies();
