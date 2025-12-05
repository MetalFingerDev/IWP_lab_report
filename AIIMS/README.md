# AIIMS Hospital Registration Form

This sample demonstrates a patient registration form built with plain HTML, CSS, and JavaScript. It focuses on a clean, accessible UX with client-side validation and inline error messages that help users fix mistakes before submitting. The app is front-end only for demonstration purposes: after pressing Register, submitted values are displayed on the page rather than being saved to a database.

Features & Structure

- Client-side validation driven by `script.js` with custom validation functions for email, phone, date of birth, and required fields.
- Error messages use `aria-live` and `role=status` for accessibility.
- Responsive, card-based layout through `style.css` and mobile-first grid rules.

How to run

1. Open `index.html` in a browser (no server required).

Developer Notes

- This is a good starter for building a real registration flow. For production, add server-side validation, CSRF protection, and database storage. Consider integrating client-side date-of-birth age checks and a live demo mode to submit to an API endpoint or simulated backend for testing.
