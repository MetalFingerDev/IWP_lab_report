// AIIMS Registration JS: field validation + display

function $(sel) { return document.querySelector(sel) }

const form = $('#registrationForm');
const display = $('#display-data');

const validators = {
    fullName: val => val.trim().length >= 3 || 'Full name must be at least 3 characters',
    email: val => /^\S+@\S+\.\S+$/.test(val) || 'Please enter a valid email',
    phone: val => /^\+?[0-9 \-()]{7,15}$/.test(val) || 'Please enter a valid phone number',
    dob: val => {
        if (!val) return 'Date of birth is required';
        const d = new Date(val);
        const now = new Date();
        if (isNaN(d)) return 'Please provide a valid date';
        if (d >= now) return 'Date of birth cannot be today or in the future';
        return true;
    },
    gender: val => (['Male', 'Female', 'Other'].includes(val) ? true : 'Please select a gender'),
    city: val => val.trim().length > 0 || 'City is required',
    emergencyName: val => val.trim().length >= 3 || 'Provide name for emergency contact',
    emergencyPhone: val => /^\+?[0-9 \-()]{7,15}$/.test(val) || 'Provide valid emergency contact number',
    insurance: val => (val.trim().length === 0 || /^[A-Za-z0-9\-\s]{3,40}$/.test(val)) || 'Insurance id is invalid'
}

function showError(el, msg) {
    let small = el.parentNode.querySelector('small.error');
    if (!small) {
        small = document.createElement('small');
        small.className = 'error';
        small.setAttribute('role', 'status');
        small.setAttribute('aria-live', 'assertive');
        el.parentNode.appendChild(small);
    }
    small.textContent = msg;
    el.classList.add('error');
    el.setAttribute('aria-invalid', 'true');
}

function clearError(el) {
    let small = el.parentNode.querySelector('small.error');
    if (small) small.remove();
    el.classList.remove('error');
    el.setAttribute('aria-invalid', 'false');
}

function validateField(input) {
    const name = input.name;
    if (!validators[name]) return true;
    const result = validators[name](input.value);
    if (result === true) { clearError(input); return true }
    showError(input, result);
    return false;
}

function validateAll() {
    let ok = true;
    const inputs = form.querySelectorAll('input,textarea,select');
    inputs.forEach(i => {
        const valid = validateField(i);
        if (!valid) ok = false;
    })
    return ok;
}

function displayLatestData() {
    // on submit called after validate
    if (!validateAll()) {
        display.textContent = 'Please fix the highlighted errors above before submitting.';
        return;
    }
    const data = new FormData(form);
    const patient = {};
    data.forEach((val, key) => patient[key] = val);
    display.innerHTML = `
    <strong>Patient Registered:</strong><br>
    ${patient.fullName} (${patient.gender}) — DOB ${patient.dob}<br>
    Phone: ${patient.phone} — City: ${patient.city}<br>
    Emergency: ${patient.emergencyName} (${patient.emergencyPhone})<br>
    Insurance: ${patient.insurance || 'N/A'}<br>
  `
    form.reset();
}

function attachListeners() {
    const inputs = form.querySelectorAll('input,textarea,select');
    inputs.forEach(i => {
        i.addEventListener('input', () => validateField(i));
        i.addEventListener('blur', () => validateField(i));
    })
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        displayLatestData();
    })
}

// initialize once DOM ready
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', attachListeners); else attachListeners();
