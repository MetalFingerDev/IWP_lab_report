# Perl Array Demonstration Script

This directory contains a short Perl example `array.pl` that demonstrates Perl array behavior: creating arrays, indexing beyond the end, truncating with `$#array`, and iterating over array indices. It is a concise educational script intended for Perl beginners to observe how arrays expand and how `undef` appears for missing values after truncation. The example includes printed diagnostic information that helps to visualize highest index changes and the restored array state.

How to run

- In a terminal with Perl installed, run `perl array.pl` from the `perl/` directory.

What it demonstrates

- Initialization of an array with numeric values using the range operator `(1..10)`.
- Assigning a value at index 20 and observing the new highest index.
- Truncation using `$#arr = 4` and how undefined values are handled when the array grows back.

Notes and best practices

- Using `$#array` is useful for teaching, but for production or modern Perl scripts prefer `scalar(@array)` and array functions like `push`, `pop`, and `splice` for more readable and less error-prone code.
