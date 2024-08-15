let value1
let value2
let value3
let value4

function start_game() {
    value1 = Math.floor(Math.random() * 9)
    value2 = Math.floor(Math.random() * 9)
    value3 = Math.floor(Math.random() * 9)
    value4 = Math.floor(Math.random() * 9)
    rand_num()
    document.getElementById('show_num').innerHTML = `<input type="button" id="value1" value="${value1}" onclick="cal('value1')">
        <input type="button" id="value2" value="${value2}" onclick="cal('value2')">
        <input type="button" id="value3" value="${value3}" onclick="cal('value3')">
        <input type="button" id="value4" value="${value4}" onclick="cal('value4')">`
}


document.getElementById('show_op').innerHTML = (`<input type="button" id="plus" value="+" onclick="operator('+')">
     <input type="button" id="minus" value="−" onclick="operator('−')">
     <input type="button" id="multiply" value="×" onclick="operator('×')">
     <input type="button" id="divide" value="÷" onclick="operator('÷')">
     <input type="button" id="power" value="^" onclick="operator('^')">
     <input type="button" id="sqrt" value="√" onclick="operator('√')">
     <input type="button" id="factorial" value="!" onclick="operator('!')">`)

let n
let count = 0
let sign
let id
let k = 4
let ans
let code
let count_num = 4
function cal(num) {
    if (count == 0) {
        n = Number(document.getElementById(`${num}`).value)
        code = num
        id = num
        count += 1
    }
    else {
        ans = calculate(n, Number(document.getElementById(`${num}`).value))
        count = 0
        k += 1
        document.getElementById(`${id}`).remove()
        document.getElementById(`${num}`).remove()
        document.getElementById('show_num').innerHTML += `<input type="button" id="value${k}" value="${ans}" onclick="cal('value${k}')">`
        count_num -= 1
    }

    if (ans == random_num && count_num == 1) {
        alert('PASS')
    }
}

function operator(op) {
    if (op == "√") {
        count = 0
        document.getElementById(`${code}`).value = Math.floor(n ** 1/2)
    }
    else if (op == "!") {
        count = 0
        fac = 1
        for (let i = 1; i <= n; i++) {
            fac = fac*i
        }
        document.getElementById(`${code}`).value = Math.floor(fac)
    }
    else {
        sign = op
    }
}

function calculate(n1, n2) {
    if (sign == "+") {
        return n1+n2
    }
    else if (sign == "−") {
        return n1-n2
    }
    else if (sign == "×") {
        return n1*n2
    }
    else if (sign == "÷") {
        return n1/n2
    }
    else if (sign == "^") {
        return n1**n2
    }
    else {
        alert()
    }
}

let random_num

function rand_num() {
    random_num = Math.floor((Math.random() * 89)+10)

    document.getElementById('show_rand').innerHTML = `<h2>${random_num}</h2>`
}

function reset() {
    document.getElementById('show_num').innerHTML = `<input type="button" id="value1" value="${value1}" onclick="cal('value1')">
        <input type="button" id="value2" value="${value2}" onclick="cal('value2')">
        <input type="button" id="value3" value="${value3}" onclick="cal('value3')">
        <input type="button" id="value4" value="${value4}" onclick="cal('value4')">`

        n = 0
        count = 0
        sign = ""
        id = ""
        k = 4
        ans = 0
        code = ""
        count_num = 4
}