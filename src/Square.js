export default function Square({value, onSquareClick, win}) {
  return (
    <button className="square" onClick={onSquareClick} style={{backgroundColor: win ? "#06d6a0" : "white"}}>
      {value}
    </button>
  );
}
