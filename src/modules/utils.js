export const BASE_URL = 'https://api.tvmaze.com/search/shows?q=girls';

export const createMovieElements = (image, name) => {
  const btnContainer = document.createElement('div');
  const commentBtn = document.createElement('button');
  const reserveBtn = document.createElement('button');
  const movieName = document.createElement('h3');
  movieName.textContent = name;
  const img = document.createElement('img');
  commentBtn.setAttribute('class', 'comment-btn');
  reserveBtn.setAttribute('class', 'reserve-btn');
  commentBtn.textContent = 'Comments';
  reserveBtn.textContent = 'Reservations';
  btnContainer.setAttribute('class', 'movie-actions');
  img.setAttribute('src', image.medium);
  btnContainer.appendChild(reserveBtn);
  btnContainer.appendChild(commentBtn);
  return [img, movieName, btnContainer];
};

// export default BASE_URL;