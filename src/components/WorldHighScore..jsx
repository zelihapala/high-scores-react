import React from "react";

function WorldHighScore({ allCountryScores, isAscending }) {
  const highestScores = allCountryScores.map((country) => ({
    name: country.name,
    highestScore: Math.max(...country.scores.map((score) => score.s)),
  }));

  const sortedScores = isAscending
    ? highestScores.sort((a, b) => a.highestScore - b.highestScore)
    : highestScores.sort((a, b) => b.highestScore - a.highestScore);

  return (
    <div className="worldScoreTable">
      <h1>World Wide High Scores</h1>
      <div className="images-container">
        <img src="src/image/angrybirds.jpg" alt="Angry Birds" />
        <img src="src/image/candy-crush.jpg" alt="Candy Crush" />
        <img src="src/image/heman.jpg" alt="He-Man" />
        <img src="src/image/mario.jpg" alt="Mario" />
      </div>
      <table>
        <thead>
          <tr>
           <h3>Battle of the Titans: Nations Compete for Top Scores!</h3>
          </tr>
        </thead>
        <tbody>
          {sortedScores.map((score, index) => (
            <tr key={index}>
              <td>{score.name}</td>
              <td>{score.highestScore}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default WorldHighScore;
