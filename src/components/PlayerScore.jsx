import React from 'react';

function PlayerScore({ name, score }) {
  return (
    <tr>
      <td>{name}</td>
      <td className='scores'>{score}</td>
    </tr>
  );
}

export default PlayerScore;
