let ans = document.getElementById("ans");

let total1 = "";
let total2 = 0;
let ch = "";
let flag = false;

function display(value) {
    ans.innerHTML = "";
    ans.innerHTML = value;
}

function ClearButton() {
    total1 = "";
    total2 = 0;
    ch = "";
    flag = false;
    display("")
}

function number(value) {
    if (flag) {
        ClearButton();
        flag = false;
    }
    total1 += String(value);
    display(total1)
}

function Action(value) {
    if (total1.length != 0) {
        if (flag) {
            flag = false;
        }

        ans.innerHTML = "";
        total2 = Number.parseInt(total1);
        total1 = "";
        ch = String(value);
    }
}

function Equal() {
    let Ans = 0;

    switch (ch) {
        case "+":
            Ans = total2 + Number.parseInt(total1);
            break;

        case "-":
            Ans = total2 - Number.parseInt(total1);
            break;
        case "*":
            Ans = total2 * Number.parseInt(total1);
            break;
        case "/":
            Ans = total2 / Number.parseInt(total1);
            break;
    }

    display(Ans)
    flag = true;
    ch = "";
    total1 = String(Ans);
}