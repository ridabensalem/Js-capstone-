import { BASE_URL, getAllComments } from "./API";
import apiHandler from "./fetch";
import { commentPopUp, displayReserve } from "./popup";

const closeModal = () => {
  const overlay = document.querySelector('.overlay');
  const body = document.querySelector('body');
  body.removeChild(overlay);
};


const getArrayComments = async(id) => {
  const commentsArray = []
  const comments =  await getAllComments(id)
  if(comments){
    comments.forEach(com => {
      const {comment, username, creation_date} = com
      const li = document.createElement('li')
      li.innerHTML = `${creation_date} ${comment} by ${username}`
      commentsArray.push(li.innerHTML)
    });
    return commentsArray
  }
}


export const createMovieElements = (image, name, movie) => {
  const btnContainer = document.createElement('div');
  const commentBtn = document.createElement('button');
  const reserveBtn = document.createElement('button');
  const movieName = document.createElement('h3');
  movieName.textContent = name;
  const img = document.createElement('img');
  commentBtn.setAttribute('class', 'comment-btn');
  reserveBtn.setAttribute('class', 'reserve-btn');
  reserveBtn.addEventListener('click', () => displayReserve(movie, closeModal));
  commentBtn.addEventListener('click', () => commentPopUp(movie, closeModal, getArrayComments));
  commentBtn.textContent = 'Comments';
  reserveBtn.textContent = 'Reservations';
  btnContainer.setAttribute('class', 'movie-actions');
  img.setAttribute('src', image.medium);
  btnContainer.appendChild(reserveBtn);
  btnContainer.appendChild(commentBtn);
  return [img, movieName, btnContainer];
};

export const getAllMovies = async () => {
  const response = await apiHandler('GET', BASE_URL);
  return response
};
