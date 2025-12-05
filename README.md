# IWP Lab Report — Collection of Small Demos

Each folder contains a short project with its own `README.md` 
This top-level README summarizes the projects and points to each project README for details.

Quick index

- abc/ — A→Z flip-card flashcards using a `flip-card` custom element. Open `abc/index.html`.
- AIIMS/ — Sample patient registration form with client-side validation and accessible error UI. Open `AIIMS/index.html`.
- cart/ — PHP session-based shopping cart demo. Run with PHP built-in server.
- elements/ — Interactive periodic table built with `element-card` web components. Open `elements/index.html`.
- irctc/ — Static front-end mockup of a train-booking site. Open `irctc/index.html`.
- isbn/ — ISBN-10/13 validator with checksum verification. Open `isbn/index.html`.
- perl/ — Short Perl script demonstrating Perl array behavior: `perl/array.pl`.
- quiz/ — PHP + MySQL quiz app. See `quiz/README.md` for database setup and local run instructions.
- students/ — Example `students.xml` and `student_schema.xsd` with a sample validation workflow.
- tictactoe/ — Browser-based Tic-Tac-Toe game with a local two-player mode; open `tictactoe/index.html`.
- transpose/ — Tiny matrix transpose utility, client-side only; open `transpose/index.html`.

Quick Start (local developer testing)

- Static frontend projects (open in browser):

  - Open any `index.html` file in a modern browser (most demos have no server requirement).

- PHP projects (cart, quiz):

  - Run a PHP dev server from the project folder, for example:

    ```bash
    cd cart
    php -S localhost:8000 -t .
    ```

- MySQL for the `quiz` project (optional):

  - Import SQL:

    ```bash
    mysql -u root -p < quiz/database.sql
    ```