import React from 'react';
import PlayerScore from './PlayerScore';

function HighScoreTable({ country, isAscending }) {
  // in descending order
  const sortedScores = isAscending
    ? country.scores.sort((a, b) => a.s - b.s)
    : country.scores.sort((a, b) => b.s - a.s);


  return (
    <div className="HighScoreTable">
      <h2>{country.name}</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
        
          {sortedScores.map((score, index) => (
            <PlayerScore key={index} name={score.n} score={score.s} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HighScoreTable;
