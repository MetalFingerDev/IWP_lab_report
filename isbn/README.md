# ISBN Validator

This small app validates ISBN-10 and ISBN-13 numbers directly in your browser using a JavaScript validation routine that cleans the input, detects format, and applies checksum verification algorithms. It accepts ISBNs that include spaces and hyphens and will return a clear, immediate result showing whether an ISBN is valid or invalid, along with the specific ISBN type.

Features

- Supports both ISBN-10 and ISBN-13 formats and verifies the checksum using correct public algorithms.
- Input is normalized (hyphen/space removal), and user feedback indicates the reason for invalidity (format, checksum, or length).
- Simple UI with examples to test typical cases quickly.

How to run and extend

1. Open `index.html` in a modern browser — no server required.
2. Type or paste an ISBN, then press Validate or Enter.

Developer notes

- This is a great candidate for an additional feature to fetch metadata from an ISBN lookup service (Open Library or ISBNdb) once validated, or to add validation on paste events or standardized input masks to improve user experience.
