import { number, sign, result, reset, save, loadLS, delet, dot } from './func.js';
document.querySelectorAll('.calculator__btn_number').forEach((btn) => {
    const text = btn.textContent;
    btn.addEventListener('click', () => {
        number(text);
    });
});
document.querySelectorAll('.calculator__btn_sign').forEach((btn) => {
    const text = btn.textContent;
    btn.addEventListener('click', () => {
        sign(text);
    });
});
document.querySelector('.calculator__btn_result').addEventListener('click', () => {
    const tablo3 = document.querySelector('.calculator__tablo_3').textContent;
    if (tablo3 !== '' && tablo3.slice(-1) !== '.') {
        result();
        save();
        reset();
    }
    else {
        return;
    }
});
document.querySelector('.calculator__btn_dot').addEventListener('click', () => {
    dot();
});
document.querySelector('.calculator__btn_reset').addEventListener('click', () => {
    reset();
});
document.querySelector('.calculator__right-btn-clear').addEventListener('click', () => {
    let clearResult = confirm('Очистить результаты');
    if (clearResult) {
        localStorage.clear();
        location.reload();
    }
});
document.querySelector('.calculator__btn_delete').addEventListener('click', () => {
    delet();
});
document.addEventListener('keydown', (e) => {
    const tablo3 = document.querySelector('.calculator__tablo_3').textContent;
    let text = e.key;
    const arrNum = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    arrNum.find((item) => {
        if (item === text) {
            number(text);
        }
    });
    const arrSign = ['-', '*', '/', '+'];
    arrSign.filter((item) => {
        if (item === text) {
            switch (text) {
                case '*':
                    text = text.replace('*', '×');
                    break;
                case '/':
                    text = text.replace('/', '÷');
                    break;
            }
            sign(text);
        }
    });
    if (e.key === 'Enter' && (tablo3 !== '' && tablo3.slice(-1) !== '.')) {
        result();
        save();
        reset();
    }
    if (e.key === 'Backspace') {
        delet();
    }
    if (e.key === ',' || e.key === '.') {
        dot();
    }
    if (e.key === 'Delete') {
        reset();
    }
});
loadLS();
//# sourceMappingURL=index.js.map