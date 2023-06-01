const Button = ({ setNewSq, color, number, range }) => {
  const newSqHandler = () => {
    setNewSq({
      color: color,
      number: parseInt(number),
      range: parseInt(range),
    });
  };
  return (
    <button className="button" onClick={newSqHandler}>
      Submit
    </button>
  );
};

export default Button;
