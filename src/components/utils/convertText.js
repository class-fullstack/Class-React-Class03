export const truncateTitle = (title, maxLength = 27) => {
  return title.length > maxLength ? title.slice(0, maxLength) + "..." : title;
};
