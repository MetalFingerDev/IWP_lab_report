# Online Quiz (PHP + MySQL)

This project implements a simple online quiz using PHP and MySQL. Questions are stored in a MySQL `questions` table, and `index.php` presents questions to the user and uses PHP session to track progress and user score. The `database.sql` file includes a sample schema and a few starter questions.

Features

- Question-by-question UI and a minimal session-backed scoring system.
- Simple, accessible layout and styling via `style.css`.
- Includes `database.sql` to create and populate the `questions` table.

How to run

1. Create a MySQL database and import `database.sql`:

```bash
mysql -u root -p < database.sql
```

2. Confirm connection details in `config.php`.
3. Serve via PHP built-in server: `php -S localhost:8000 -t .` and open `http://localhost:8000`.

Notes & Suggestions

- Add user authentication and record scores in a separate table.
- Sanitize queries and add prepared statements to prevent SQL injection.
