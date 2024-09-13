let resultArr = [];
export function number(text) {
    const tablo1 = document.querySelector('.calculator__tablo_1');
    const tablo2 = document.querySelector('.calculator__tablo_2');
    const tablo3 = document.querySelector('.calculator__tablo_3');
    tablo2.textContent !== '' ? tablo3.append(text) : tablo1.append(text);
}
export function sign(text) {
    const tablo1 = document.querySelector('.calculator__tablo_1');
    const tablo2 = document.querySelector('.calculator__tablo_2');
    if (tablo1.textContent === '') {
        tablo1.append(text);
        return;
    }
    if (tablo1.textContent.slice(-1) === '.') {
        return;
    }
    if (tablo1.textContent !== '' && tablo2.textContent === '') {
        tablo2.append(text);
    }
}
export function dot() {
    const tablo1 = document.querySelector('.calculator__tablo_1');
    const tablo2 = document.querySelector('.calculator__tablo_2').textContent;
    const tablo3 = document.querySelector('.calculator__tablo_3');
    const dotText = document.querySelector('.calculator__btn_dot').textContent;
    if ((tablo1.textContent !== '' && tablo2 === '') && !tablo1.textContent.includes(dotText)) {
        tablo1.append(dotText);
    }
    if (tablo3.textContent !== '' && !tablo3.textContent.includes(dotText)) {
        tablo3.append(dotText);
    }
}
export function result() {
    const tablo1 = document.querySelector('.calculator__tablo_1').textContent;
    const tablo2 = document.querySelector('.calculator__tablo_2').textContent;
    const tablo3 = document.querySelector('.calculator__tablo_3').textContent;
    const tablo4 = document.querySelector('.calculator__tablo_4');
    const tablo5 = document.querySelector('.calculator__tablo_5');
    let result;
    switch (tablo2) {
        case '×':
            result = Number(tablo1) * Number(tablo3);
            break;
        case '÷':
            result = Number(tablo1) / Number(tablo3);
            break;
        default:
            result = eval(tablo1 + tablo2 + tablo3);
    }
    let resultNum = Number(result);
    let resultFix = resultNum.toFixed(2);
    if (tablo3 !== '') {
        tablo4.textContent = '=';
        tablo5.textContent = String(resultNum);
        if (tablo5.textContent.includes('.')) {
            if (tablo5.textContent.length > 5) {
                tablo5.textContent = resultFix;
            }
        }
    }
}
export function reset() {
    const allTablo = document.querySelectorAll('.calculator__tablo');
    allTablo.forEach((tablo) => {
        tablo.textContent = '';
    });
}
export function save() {
    const tablo1 = document.querySelector('.calculator__tablo_1').textContent;
    const tablo2 = document.querySelector('.calculator__tablo_2').textContent;
    const tablo3 = document.querySelector('.calculator__tablo_3').textContent;
    const tablo4 = document.querySelector('.calculator__tablo_4').textContent;
    const tablo5 = document.querySelector('.calculator__tablo_5').textContent;
    const resultList = document.querySelector('.calculator__right-result');
    const resultItem = document.createElement('li');
    resultItem.classList.add('calculator__right-result-item');
    const resultItemText = resultItem.textContent = `${tablo1} ${tablo2} ${tablo3} ${tablo4} ${tablo5}`;
    resultArr.push(resultItemText);
    localStorage.setItem('calc', JSON.stringify(resultArr));
    resultList.prepend(resultItem);
}
export function loadLS() {
    const data = localStorage.getItem('calc');
    if (data !== '' && data !== null) {
        resultArr = JSON.parse(data);
    }
    const resultList = document.querySelector('.calculator__right-result');
    for (const result of resultArr) {
        const resultItem = document.createElement('li');
        resultItem.classList.add('calculator__right-result-item');
        resultItem.textContent = `${result}`;
        resultList.prepend(resultItem);
    }
}
export function delet() {
    let tablo1 = document.querySelector('.calculator__tablo_1');
    let tablo2 = document.querySelector('.calculator__tablo_2');
    let tablo3 = document.querySelector('.calculator__tablo_3');
    if (tablo2.textContent === '' && tablo3.textContent === '') {
        tablo1.textContent = tablo1.textContent.slice(0, -1);
    }
    if (tablo3.textContent === '') {
        tablo2.textContent = '';
    }
    if (tablo1.textContent !== '' && tablo2.textContent !== '') {
        tablo3.textContent = tablo3.textContent.slice(0, -1);
    }
}
//# sourceMappingURL=func.js.map