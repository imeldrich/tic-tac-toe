import Square from "./Square";

export default function Board({ xIsNext, squares, onPlay }) {
  let winArr = [];
  const winner = calculateTheWinner(squares);

  function calculateTheWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        winArr = [a, b, c];
        return squares[a];
      }
    }
    return null;
  }

  function handleClick(i) {
    const nextSquares = squares.slice();
    if (nextSquares[i] || calculateTheWinner(squares)) {
      return;
    } else {
      xIsNext ? (nextSquares[i] = "X") : (nextSquares[i] = "O");
      onPlay(nextSquares);
    }
  }

  return (
    <>
      <div className="status">
        {winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? "X" : "O"}`}
      </div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} win={winArr.includes(0)}/>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} win={winArr.includes(1)}/>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} win={winArr.includes(2)}/>
      </div>

      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} win={winArr.includes(3)}/>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} win={winArr.includes(4)}/>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} win={winArr.includes(5)}/>
      </div>

      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} win={winArr.includes(6)}/>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} win={winArr.includes(7)}/>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} win={winArr.includes(8)}/>
      </div>
    </>
  );
}
