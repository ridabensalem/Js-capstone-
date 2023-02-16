const movieCounter = () => {
  const movies = document.querySelectorAll('.movie-list');
  return movies.length;
};

export default movieCounter;