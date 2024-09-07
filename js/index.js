"use strict";
function number() {
    let arrBtn = document.querySelectorAll('.calculator__btn_number');
    let tablo1 = document.querySelector('.calculator__tablo_1');
    let tablo2 = document.querySelector('.calculator__tablo_2');
    let tablo3 = document.querySelector('.calculator__tablo_3');
    let button = arrBtn.forEach((btn) => {
        let text = btn.textContent;
        btn.addEventListener('click', () => {
            tablo2.textContent !== '' ? tablo3.append(text) : tablo1.append(text);
        });
    });
    return button;
}
number();
function sign() {
    let arrBtn = document.querySelectorAll('.calculator__btn_sign');
    let tablo2 = document.querySelector('.calculator__tablo_2');
    let button = arrBtn.forEach((btn) => {
        let text = btn.textContent;
        btn.addEventListener('click', () => {
            if (tablo2.textContent === '') {
                tablo2.append(text);
            }
            else {
                return;
            }
        });
    });
    return button;
}
sign();
function result() {
    let tablo1 = document.querySelector('.calculator__tablo_1').textContent;
    let tablo2 = document.querySelector('.calculator__tablo_2').textContent;
    let tablo3 = document.querySelector('.calculator__tablo_3').textContent;
    let tablo4 = document.querySelector('.calculator__tablo_4');
    let tablo5 = document.querySelector('.calculator__tablo_5');
    let result = eval(tablo1 + tablo2 + tablo3);
    if (tablo3 !== '') {
        tablo4.textContent = '=';
        tablo5.textContent = result;
    }
}
function reset() {
    let allTablo = document.querySelectorAll('.calculator__tablo');
    allTablo.forEach((tablo) => {
        tablo.textContent = '';
    });
}
document.querySelector('.calculator__btn_result').addEventListener('click', () => {
    result();
});
document.querySelector('.calculator__btn_reset').addEventListener('click', () => {
    reset();
});
//# sourceMappingURL=index.js.map