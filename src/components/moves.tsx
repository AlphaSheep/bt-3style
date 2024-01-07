import React from "react";

import { useAppSelector } from "../state/hooks";
import { TimestampedMove, selectMoves } from "../state/cube.duck";
import { Move, simplifyAlg } from "../lib/cube/cube";

export default function Moves() {
  const moves = useAppSelector(selectMoves);
  return (
    <div className="moves">
      {movesToString(moves)}
    </div>
  );
}

function movesToString(moves: TimestampedMove[]): string {
  const alg = simplifyAlg(moves.map((move) => new Move(move.move)));
  return alg.map((move) => move.toString()).join(" ");
}