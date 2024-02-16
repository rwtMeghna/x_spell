import React, { useState, useEffect } from "react";

// Dictionary for spell-checking and auto-correction
const customDictionary = {
  teh: "the",

  wrok: "work",

  fot: "for",

  exampl: "example",
};

const App = () => {
  const [text, setText] = useState("");
  const [correction, setCorrection] = useState("");

  useEffect(() => {
    // Function to check for misspellings and suggest corrections
    const spellCheck = (inputText) => {
      const words = inputText.split(/\s+/); // Split text into words
      for (const word of words) {
        const correctedWord = customDictionary[word.toLowerCase()];
        if (
          correctedWord &&
          word.toLowerCase() !== correctedWord.toLowerCase()
        ) {
          return correctedWord; // Return first correction found
        }
      }
      return ""; // Return empty string if no correction found
    };

    // Perform spell check and set correction state
    setCorrection(spellCheck(text));
  }, [text]);

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        value={text}
        onChange={handleInputChange}
        placeholder="Enter text..."
        rows={4}
        cols={50}
      />
      {correction && (
        <div>
          <strong>Did you mean:</strong> {correction}?
        </div>
      )}
    </div>
  );
};

export default App;
