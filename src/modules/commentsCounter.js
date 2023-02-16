const commentsCounter = () => {
  const comments = document.querySelectorAll('.comment');
  return comments.length;
};

export default commentsCounter;