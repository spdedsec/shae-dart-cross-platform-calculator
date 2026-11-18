/**
 * ========================================================================
 * SHAE Dart Cross-Platform Calculator — Application Logic
 * Four-function calculator with clear, delete, keyboard support
 * Copyright (c) 2026 spdedsec <legendsatya7272@gmail.com>
 * License: MIT
 * ========================================================================
 */

(function () {
    'use strict';

    // ── DOM Elements ─────────────────────────────────────────────────
    const mainDisplay = document.getElementById('main-display');
    const subDisplay = document.getElementById('sub-display');
    const annMem = document.getElementById('ann-mem');
    const btnWinReset = document.getElementById('btn-win-reset');

    // ── Calculator State ─────────────────────────────────────────────
    let current = '0';          // string being typed / displayed
    let previous = null;        // number (previous operand)
    let operator = null;        // '+', '-', '*', '/'
    let overwrite = false;      // next digit replaces current
    let hasError = false;

    // ── Helpers ──────────────────────────────────────────────────────
    function formatNumber(num) {
        if (!isFinite(num)) return 'Error';
        // Limit to ~12 significant digits, trim trailing zeros
        const str = num.toPrecision(12);
        return parseFloat(str).toString();
    }

    function updateDisplay() {
        mainDisplay.textContent = current;
        mainDisplay.classList.toggle('error-state', hasError);
    }

    function updateSubDisplay() {
        if (previous !== null && operator !== null && !hasError) {
            const opSymbol = operator === '*' ? '×' : operator === '/' ? '÷' : operator;
            subDisplay.textContent = `${formatNumber(previous)} ${opSymbol}`;
        } else {
            subDisplay.innerHTML = '&nbsp;';
        }
    }

    function clearAll() {
        current = '0';
        previous = null;
        operator = null;
        overwrite = true;
        hasError = false;
        updateDisplay();
        updateSubDisplay();
    }

    function clearEntry() {
        current = '0';
        overwrite = true;
        hasError = false;
        updateDisplay();
    }

    function deleteLast() {
        if (overwrite) return; // nothing to delete from a fresh result
        if (current.length <= 1) {
            current = '0';
        } else {
            current = current.slice(0, -1);
        }
        hasError = false;
        updateDisplay();
    }

    function inputDigit(digit) {
        if (hasError) clearAll();
        if (overwrite) {
            current = digit;
            overwrite = false;
        } else if (current === '0') {
            current = digit;
        } else if (current.length < 14) { // reasonable digit limit
            current += digit;
        }
        updateDisplay();
    }

    function inputDecimal() {
        if (hasError) clearAll();
        if (overwrite) {
            current = '0.';
            overwrite = false;
        } else if (!current.includes('.')) {
            current += '.';
        }
        updateDisplay();
    }

    function toggleSign() {
        if (hasError || current === '0') return;
        current = (parseFloat(current) * -1).toString();
        updateDisplay();
    }

    function compute() {
        if (previous === null || operator === null || hasError) return;

        const a = previous;
        const b = parseFloat(current);
        let result;

        try {
            switch (operator) {
                case '+': result = a + b; break;
                case '-': result = a - b; break;
                case '*': result = a * b; break;
                case '/':
                    if (b === 0) throw new Error('Div by Zero');
                    result = a / b;
                    break;
                default: return;
            }
        } catch (e) {
            current = `Error: ${e.message}`;
            hasError = true;
            previous = null;
            operator = null;
            overwrite = true;
            updateDisplay();
            updateSubDisplay();
            return;
        }

        current = formatNumber(result);
        previous = null;
        operator = null;
        overwrite = true;
        hasError = false;
        updateDisplay();
        updateSubDisplay();
    }

    function setOperator(nextOp) {
        if (hasError) return;

        if (previous !== null && operator !== null && !overwrite) {
            // Chain operation: compute the pending expression first
            compute();
            if (hasError) return;
            previous = parseFloat(current); // use the computed result
        } else {
            previous = parseFloat(current);
        }

        operator = nextOp;
        overwrite = true;
        updateSubDisplay();
    }

    // ── Action Router ───────────────────────────────────────────────
    function handleAction(action) {
        switch (action) {
            case 'C': clearAll(); break;
            case 'CE': clearEntry(); break;
            case 'Bk': deleteLast(); break;
            case '+': setOperator('+'); break;
            case '-': setOperator('-'); break;
            case '*': setOperator('*'); break;
            case '/': setOperator('/'); break;
            case '=': compute(); break;
            case '+/-': toggleSign(); break;
            case '.': inputDecimal(); break;
            default: break;
        }
    }

    // ── Button Click Events ─────────────────────────────────────────
    document.querySelectorAll('.key').forEach((btn) => {
        btn.addEventListener('click', () => {
            const digit = btn.getAttribute('data-digit');
            const action = btn.getAttribute('data-action');

            if (digit !== null) {
                inputDigit(digit);
            } else if (action !== null) {
                handleAction(action);
            }
        });
    });

    // ── Keyboard Support ────────────────────────────────────────────
    window.addEventListener('keydown', (e) => {
        // Don't intercept typing in inputs (not applicable here but safe)
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

        const key = e.key;

        if (key >= '0' && key <= '9') {
            e.preventDefault();
            inputDigit(key);
        } else if (key === '.') {
            e.preventDefault();
            inputDecimal();
        } else if (key === '+' || key === '-') {
            e.preventDefault();
            handleAction(key);
        } else if (key === '*') {
            e.preventDefault();
            handleAction('*');
        } else if (key === '/' || key === '÷') {
            e.preventDefault();
            handleAction('/');
        } else if (key === 'Enter' || key === '=') {
            e.preventDefault();
            handleAction('=');
        } else if (key === 'Backspace') {
            e.preventDefault();
            deleteLast();
        } else if (key === 'Escape') {
            e.preventDefault();
            clearAll();
        }
    });

    // ── Window Reset ────────────────────────────────────────────────
    btnWinReset.addEventListener('click', () => {
        clearAll();
    });

    // ── Initial render ──────────────────────────────────────────────
    updateDisplay();
    updateSubDisplay();

    // Expose for debugging
    window.SHAECalc = {
        getState: () => ({ current, previous, operator, overwrite, hasError }),
        clear: clearAll,
    };
})();