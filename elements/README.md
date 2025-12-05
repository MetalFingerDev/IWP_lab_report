# Interactive Periodic Table

This project is an interactive, client-side periodic table demonstrating modern web practices: custom elements with `ElementCard` (`element-card`), a CSS Grid layout for table alignment, and a flip-card style for each element to reveal more information. The deck includes categories like alkali, alkaline earth, transition metals, noble gases, lanthanides, and actinides, each assigned a color. The project is designed for educational demonstrations and can be easily extended.

How to run

1. Open `index.html` in a modern browser (no server required).

Features

- Custom `element-card` web components for each chemical element with a front and back, including atomic number, symbol, name, mass, and electron configuration.
- Click a card to open the corresponding Wikipedia article in a new tab for more detailed reference data.
- The color-coded legend indicates categories, which makes the layout usable and visually informative.

Notes & Suggestions

- Add search, filter, or sort operations (for example, by atomic number or block) and keyboard navigation for accessibility.
- Optionally, add data import/export, or a data-fetch layer that pulls from an API or JSON file instead of hardcoded arrays.
