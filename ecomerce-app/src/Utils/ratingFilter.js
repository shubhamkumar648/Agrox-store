export const RatingFilter = (rating, data) => {
  if (rating) {
    return data.filter((item) => item.rating >= rating);
  }

  return data;
};
