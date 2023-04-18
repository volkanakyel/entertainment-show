export const useCategory = () => {
  const getCategoryIcon = (category: string) => {
    return category === "Movie" ? "/img/card-icons/movie.svg" : "/img/card-icons/series.svg";
  };
  return { getCategoryIcon };
};
