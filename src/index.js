import './style.css';
import { getAllMovies, likeMovie } from './modules/utils.js';
import displayMovies, { displayLikes } from './modules/display.js';
import { getAllLikes } from './modules/API.js';

const displayAllMovies = async () => {
  const movies = await getAllMovies();
  const likesArray = await getAllLikes();
  displayMovies(movies);
  displayLikes(likesArray);
  const icons = document.querySelectorAll('.like-icon');
  icons.forEach((icon) => {
    const itemId = icon.getAttribute('id');
    icon.addEventListener('click', () => likeMovie(itemId));
  });
};

displayAllMovies();