export const fetchListTypeMovie = () => {
  return fetch(
    `${process.env.BASE_URL}/genre/list?api_key=${process.env.API_KEY}&language=en-US`,
  );
};
export const fetchMovieByType = (typeid: number) => {
  return fetch(
    `${process.env.BASE_URL}/list/${typeid}?api_key=${process.env.API_KEY}&language=en-US`,
  );
};
export const fetchMovieDetail = (movieid: number) => {
  return fetch(
    `${process.env.BASE_URL}/movie/${movieid}?api_key=${process.env.API_KEY}&language=en-US`,
  );
};
