# Session Cart

This is a compact PHP shopping cart demo built on sessions (no database required). The app is implemented within a single file, `index.php`, and provides the basic e-commerce flows: list products, add to cart, change quantities, remove items, and clear the cart. It is ideal for learning session handling and basic cart UX.

## Files

- `index.php` — single-file implementation (product list + cart + basic JS for updates)
- `style.css` — styling for products and cart UI
- `README.md` — this guide

## Features

- Session-based cart persistence (stored on server-side session until cleared or session expiry)
- Real-time subtotal update in the cart view using client-side JS
- Minimal product catalog with add/remove/clear actions implemented via query parameters

## Quick Start

1. Run with PHP's built-in server:

```bash
cd /path/to/cart
php -S localhost:8000 -t .
```

2. Open http://localhost:8000 in your browser.

## How to Use

1. Click "Add to Cart" to add a product; the cart badge updates.
2. Click "View Cart" to update quantities, remove single items, or clear the cart.
3. The page uses sessions to track items, so your cart persists across page reloads.

## Notes & Suggestions

- This is a demo and not production-ready. Add CSRF protection and server-side input validation for a production app.
- Use prepared statements or a database-driven catalog for a real product catalog.
- Improve UX by persisting the cart to a database for logged-in users and enabling a checkout flow.

If you'd like, I can also add a simple REST endpoint to the cart to support AJAX-driven updates and build a persistence layer using SQLite or a small JSON file for storage.
