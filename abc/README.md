# ABC Flashcards

ABC Flashcards is a lightweight, browser-only A–Z learning tool implemented using vanilla JavaScript, HTML, and CSS. The app uses a custom Web Component (`<flip-card>`) to create a grid of alphabet cards that flip to reveal a word (and an optional image) associated with each letter. The app demonstrates essential frontend techniques: creating reusable custom elements, using CSS Grid for responsive layouts, and applying 3D transforms for flip animations. Images for some letters live in the `public/` folder, and the overall layout is mobile-friendly.

How to use

- Open `index.html` in any modern browser (no server required).
- Hover or click a card to reveal the corresponding word and image.

Notable details

- All logic is in `script.js`, and styles are in `style.css`.
- Cards are generated dynamically from the `alphabet` array; update this array to change words or images.

Extensions & Accessibility

- Add keyboard support (space/enter toggles the card), focus styling, and `aria-pressed` or similar attributes for screen readers.
- Implement a fallback image and lazy-loading, or provide a “learn” mode with pronunciations and example sentences for each word.
