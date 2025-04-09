const lexicon = {
  "merry": "god",
  "christmas": "jul",
  "and": "och",
  "happy": "gott",
  "new": "nytt",
  "year": "år"
};

function translateCard(englishCard) {
  const words = englishCard.toLowerCase().split(" ");
  const swedishWords = words.map(word => lexicon[word] || word);
  return swedishWords.join(" ");
}

const englishCard = prompt("Enter your Christmas card message in English:");
if (englishCard !== null) {
  alert(`Swedish translation: ${translateCard(englishCard)}`);
}