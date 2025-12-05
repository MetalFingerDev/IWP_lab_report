# Session Cart

A PHP shopping cart using sessions.

## Files

- `index.php` — single-file implementation (product list + cart)
- `README.md` — this guide

## Quick Start

Run with PHP's built-in server:

```bash
cd /path/to/cart
php -S localhost:8000 -t .
```

Then open http://localhost:8000 in your browser.

## Usage

1. Open http://localhost:8000
2. Click "Add" on any product
3. Click "Cart" to view items, update quantities, or remove items
4. Click "Clear all" to empty the cart

## Notes

- Session data persists via cookies until the session expires or "Clear" is used
- `index.php` handles both product listing and cart view in a single file
