const input = document.getElementById("isbn-input");
const button = document.getElementById("validate-btn");
const result = document.getElementById("result");

// Regular expressions for ISBN formats
const isbn10Regex = /^(?:\d[- ]?){9}[\dXx]$/;
const isbn13Regex = /^(?:97[89][- ]?)?(?:\d[- ]?){9}\d$/;

// Remove hyphens and spaces for checksum calculation
function cleanISBN(isbn) {
    return isbn.replace(/[- ]/g, "");
}

// Validate ISBN-10 checksum
function validateISBN10(isbn) {
    const cleaned = cleanISBN(isbn);
    if (cleaned.length !== 10) return false;

    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(cleaned[i]) * (10 - i);
    }

    // Last digit can be X (representing 10)
    const lastChar = cleaned[9].toUpperCase();
    const lastDigit = lastChar === "X" ? 10 : parseInt(lastChar);
    sum += lastDigit;

    return sum % 11 === 0;
}

// Validate ISBN-13 checksum
function validateISBN13(isbn) {
    const cleaned = cleanISBN(isbn);
    if (cleaned.length !== 13) return false;

    let sum = 0;
    for (let i = 0; i < 13; i++) {
        const digit = parseInt(cleaned[i]);
        sum += i % 2 === 0 ? digit : digit * 3;
    }

    return sum % 10 === 0;
}

// Main validation function
function validateISBN(isbn) {
    const cleaned = cleanISBN(isbn);

    if (cleaned.length === 10 && isbn10Regex.test(isbn)) {
        if (validateISBN10(isbn)) {
            return { valid: true, type: "ISBN-10" };
        }
        return { valid: false, type: "ISBN-10 (invalid checksum)" };
    }

    if (cleaned.length === 13 && isbn13Regex.test(isbn)) {
        if (validateISBN13(isbn)) {
            return { valid: true, type: "ISBN-13" };
        }
        return { valid: false, type: "ISBN-13 (invalid checksum)" };
    }

    return { valid: false, type: "Invalid format" };
}

// Display result
function showResult(isbn) {
    if (!isbn.trim()) {
        result.className = "result";
        result.innerHTML = "";
        return;
    }

    const validation = validateISBN(isbn);

    if (validation.valid) {
        result.className = "result valid";
        result.innerHTML = `
      <span class="icon">✓</span>
      <span class="message">Valid ISBN</span>
      <span class="type">${validation.type}</span>
    `;
    } else {
        result.className = "result invalid";
        result.innerHTML = `
      <span class="icon">✗</span>
      <span class="message">Invalid ISBN</span>
      <span class="type">${validation.type}</span>
    `;
    }
}

// Event listeners
button.addEventListener("click", () => showResult(input.value));
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") showResult(input.value);
});
