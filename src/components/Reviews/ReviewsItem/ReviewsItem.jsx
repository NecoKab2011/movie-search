export const ReviewsItem = ({ id, author, content }) => {
  return (
    <li id={id}>
      <h2>
        Author: <span>{author}</span>
      </h2>
      <p>{content}</p>
    </li>
  );
};