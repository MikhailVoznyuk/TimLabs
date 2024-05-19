console.log("SLAVA RUSSII")

const runInput1 = document.querySelector("#run-text-1")

let i = 0
let text = document.getElementById("#run-text-1").innerText

const speed = 100

function run_line(line) {
    for (let i = 0; i <= line.length; i++) {
        runInput1.value = line.subsring(0, i) 
    }
    if (i++ < run_line.length) {
        runInput1.value = line.subsring(0, i) 
    }
    else {
        runInput1.value = " "
        i = 0
    }

    done = setTimeout('run_line()', speed)
}

console.log(text)