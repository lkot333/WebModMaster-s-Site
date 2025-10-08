// Lista poprawnych tokenów
const validTokens = [
  "4754dfhyk54tu5",
  "gf48dk39fk48dk2",
  "p9q2z8h5l0x3",
  "u39fk4g8l3p2a9",
  "abc123xyz789"
];

// Funkcja otwierająca film z losowym tokenem
function openVideo(name) {
  const token = validTokens[Math.floor(Math.random() * validTokens.length)];
  location.href = `watch.html?token=${token}&mod=${encodeURIComponent(name)}`;
}
