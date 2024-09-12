let resultArr: string[] = []


export function number(text: string): void {
    const tablo1: Element = document.querySelector('.calculator__tablo_1')
    const tablo2: Element = document.querySelector('.calculator__tablo_2')
    const tablo3: Element = document.querySelector('.calculator__tablo_3')
    tablo2.textContent !== '' ? tablo3.append(text) : tablo1.append(text)
}

export function sign(text: string): void {
    const tablo1: Element = document.querySelector('.calculator__tablo_1')
    const tablo2: Element = document.querySelector('.calculator__tablo_2')

    if (tablo1.textContent === '') {
        tablo1.append(text)
        return
    }

    if (tablo1.textContent.slice(-1) === '.') {
        return
    }

    if (tablo1.textContent !== '' && tablo2.textContent === '') {
        tablo2.append(text)
    }
}

export function signMinus(): void {
    const tablo1: Element = document.querySelector('.calculator__tablo_1')

    if (tablo1.textContent === '') {
        tablo1.append('-')
    }
}

export function dot(): void {
    const tablo1: Element = document.querySelector('.calculator__tablo_1')
    const tablo2: string = document.querySelector('.calculator__tablo_2').textContent
    const tablo3: Element = document.querySelector('.calculator__tablo_3')
    const dotText: string = document.querySelector('.calculator__btn_dot').textContent
    console.log(tablo1.textContent.slice(-1));

    if ((tablo1.textContent !== '' && tablo2 === '') && !tablo1.textContent.includes(dotText)) {
        tablo1.append(dotText)
    }

    if (tablo3.textContent !== '' && !tablo3.textContent.includes(dotText)) {
        tablo3.append(dotText)
    }
}

export function result(): void {
    const tablo1: string = document.querySelector('.calculator__tablo_1').textContent
    const tablo2: string = document.querySelector('.calculator__tablo_2').textContent
    const tablo3: string = document.querySelector('.calculator__tablo_3').textContent
    const tablo4: Element = document.querySelector('.calculator__tablo_4')
    const tablo5: Element = document.querySelector('.calculator__tablo_5')
    let result: number | string
    switch (tablo2) {
        case '×':
            result = Number(tablo1) * Number(tablo3);
            break
        case '÷':
            result = Number(tablo1) / Number(tablo3);
            break
        default:
            result = eval(tablo1 + tablo2 + tablo3)
    }

    let resultNum = Number(result)
    let resultFix = resultNum.toFixed(2)

    if (tablo3 !== '') {
        tablo4.textContent = '='
        if (tablo5.textContent.includes('.')) {
            tablo5.textContent = resultFix
            if (resultFix.slice(-2) === '00') {
                resultFix = resultFix.slice(0, -3)
            }

            if (resultFix.slice(-1) === '0') {
                resultFix = resultFix.slice(0, -1)
            }
        } else {
            tablo5.textContent = String(result)
        }
    }

}

export function reset(): void {
    const allTablo = document.querySelectorAll('.calculator__tablo')
    allTablo.forEach((tablo) => {
        tablo.textContent = ''
    })
}

export function save(): void {
    const tablo1: string = document.querySelector('.calculator__tablo_1').textContent
    const tablo2: string = document.querySelector('.calculator__tablo_2').textContent
    const tablo3: string = document.querySelector('.calculator__tablo_3').textContent
    const tablo4: string = document.querySelector('.calculator__tablo_4').textContent
    const tablo5: string = document.querySelector('.calculator__tablo_5').textContent

    const resultList = document.querySelector('.calculator__right-result')

    const resultItem = document.createElement('li')
    resultItem.classList.add('calculator__right-result-item')

    const resultItemText = resultItem.textContent = `${tablo1} ${tablo2} ${tablo3} ${tablo4} ${tablo5}`

    resultArr.push(resultItemText)
    localStorage.setItem('calc', JSON.stringify(resultArr))

    resultList.prepend(resultItem)
}

export function loadLS() {
    const data: string = localStorage.getItem('calc')
    if (data !== '' && data !== null) {
        resultArr = JSON.parse(data)
    }

    const resultList: Element = document.querySelector('.calculator__right-result')
    for (const result of resultArr) {
        const resultItem = document.createElement('li')
        resultItem.classList.add('calculator__right-result-item')
        resultItem.textContent = `${result}`
        resultList.prepend(resultItem)
    }
}

export function delet(): void {
    let tablo1: Element = document.querySelector('.calculator__tablo_1')
    let tablo2: Element = document.querySelector('.calculator__tablo_2')
    let tablo3: Element = document.querySelector('.calculator__tablo_3')

    if (tablo2.textContent === '' && tablo3.textContent === '') {
        tablo1.textContent = tablo1.textContent.slice(0, -1)
    }

    if (tablo3.textContent === '') {
        tablo2.textContent = ''
    }

    if (tablo1.textContent !== '' && tablo2.textContent !== '') {
        tablo3.textContent = tablo3.textContent.slice(0, -1)
    }
}