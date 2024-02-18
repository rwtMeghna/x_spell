import React, { useState } from "react";

const dictionaryData = [
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },
  { word: "Component", meaning: "A reusable building block in React." },
  { word: "State", meaning: "An object that stores data for a component." },
];

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState("");

  const handleSearch = () => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const foundWord = dictionaryData.find(
      (entry) => entry.word.toLowerCase() === lowerCaseSearchTerm,
    );

    if (foundWord) {
      setSearchResult(
        <div>
          {/* <p>
            <strong>Definition:</strong>
          </p> */}
          <p>{foundWord.meaning}</p>
        </div>,
      );
    } else {
      setSearchResult(
        <div>
          {/* <p>
            <strong>Definition:</strong>
          </p> */}
          <p>Word not found in the dictionary.</p>
        </div>,
      );
    }
  };

  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <div>
        <input
          type="text"
          placeholder="Search for a word..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <h2>Definition:</h2>
      <div>{searchResult && <div>{searchResult}</div>}</div>
    </div>
  );
};

export default App;