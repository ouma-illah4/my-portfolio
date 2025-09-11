// Array of Bible verses
const verses = [
  { text: "The Lord is my shepherd, I lack nothing.", reference: "Psalm 23:1" },
  { text: "I can do all things through Christ who strengthens me.", reference: "Philippians 4:13" },
  { text: "For God so loved the world that he gave his one and only Son.", reference: "John 3:16" },
  { text: "Trust in the Lord with all your heart and lean not on your own understanding.", reference: "Proverbs 3:5" },
  { text: "Be still, and know that I am God.", reference: "Psalm 46:10" },
  { text: "The Lord is my light and my salvation—whom shall I fear?", reference: "Psalm 27:1" }
];

// Function to display a random verse with fade effect
function displayRandomVerse() {
  const verseTextEl = document.querySelector(".verse-text");
  const referenceEl = document.querySelector(".reference");

  // Start fade out
  verseTextEl.classList.add("fade");
  referenceEl.classList.add("fade");

  setTimeout(() => {
    // Pick new verse
    const randomVerse = verses[Math.floor(Math.random() * verses.length)];

    // Update text
    verseTextEl.textContent = `"${randomVerse.text}"`;
    referenceEl.textContent = `— ${randomVerse.reference}`;

    // Fade back in
    verseTextEl.classList.remove("fade");
    referenceEl.classList.remove("fade");
  }, 1000); // matches transition time in CSS
}

document.addEventListener("DOMContentLoaded", () => {
  // Show a verse on load
  displayRandomVerse();

  // Button click for new verse
  document.getElementById("new-verse-btn").addEventListener("click", displayRandomVerse);

  // Auto-change verse every 10 seconds
  setInterval(displayRandomVerse, 10000);
});

