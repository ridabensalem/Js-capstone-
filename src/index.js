import './style.css';
import { getAllMovies } from './modules/utils.js';
import displayMovies from './modules/display.js';

const displayAllMovies = async () => {
  const movies = await getAllMovies();
  displayMovies(movies);
};

displayAllMovies();
