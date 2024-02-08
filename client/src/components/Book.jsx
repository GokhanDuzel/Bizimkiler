const Book = ({ id, onClickHandler }) => {
  return <button key={id} onClick={() => onClickHandler(id)}>Download PDF</button>;
};

export default Book;
