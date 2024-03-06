import React, { useState } from "react";
import "./App.css";
import allCountryScores from "./data/scores";
import HighScoreTable from "./components/HighScoreTable";
import WorldHighScore from "./components/WorldHighScore.";

function App() {
  const [isAscending, setIsAscending] = useState(true);

  // Sort by country name
  const sortedCountryScores = allCountryScores.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const toggleSortOrder = () => {
    setIsAscending(!isAscending);
  };

  return (
    <div className="App">
<WorldHighScore
        allCountryScores={allCountryScores}
        isAscending={isAscending}
      />


      <h1>High Score Per Countries</h1>
     
      
 <button onClick={toggleSortOrder}>Change Sort Order</button>
      {sortedCountryScores.map((country, index) => (
        <div className="CountryCard" key={index}>
          <HighScoreTable country={country} isAscending={isAscending} />
        </div>
      ))}
      
    </div>
  );
}

export default App;
