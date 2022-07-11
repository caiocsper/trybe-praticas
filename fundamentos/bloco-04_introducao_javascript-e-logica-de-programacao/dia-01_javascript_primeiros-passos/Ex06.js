const chessPiece = "bishop";
chessPiece.toLowerCase();

switch(chessPiece)
{
    case "bishop":
        console.log("Moves diagonally, can move as many squares as you'd like as long as there aren't any pieces blocking the way be it your own or not.");
        break;
    case "knight":
        console.log("Moves in a L-shape pattern, the L move consists in moving 2 squares, vertically or horizontally, from your own then moving one square, again vertically or horizontally. Can jump other pieces.");
        break;
    case "queen":
        console.log("Moves in any direction, can move as many squares as you'd like as long as there aren't any pieces blocking the way be it your own or not.");
        break;
    case "king":
        console.log("Moves in any direction, can move only one square as long as there aren't any pieces blocking the way be it your own or not.");
        break;
    case "pawn":
        console.log("Moves forward one square, can move forward two squares if it is a pawn's firt move. Can attack other pieces only diagonally within one square from its own and only moving forward.");
        break;
    case "rook":
        console.log("Moves horizontally and vertically, can move as many squares as you'd like as long as there aren't any pieces blocking the way be it your own or not.");
        break;
    default:
        console.log("Error, the specified chesspiece doesn't exist.");
}