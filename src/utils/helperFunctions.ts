export const formatAuthorsToString = (authors: string[]) => {
  if (authors.length === 1) {
    return authors[0];
  }
  const authorsCopy = [...authors];
  return (
    authorsCopy.splice(0, authorsCopy.length - 1).join(", ") +
    (authors.length === 2 ? "" : ",") +
    " and " +
    authorsCopy[authorsCopy.length - 1]
  );
};
