const num = document.querySelector("#num");
const ssbtn = document.querySelector("#ssbtn");
const rebtn = document.querySelector("#rebtn");
let count = 0;
let h = 0;
let m = 0;
let s = 0;

const showTime = () => {
    if (count == 10) {
        count = 0;
        s++;
    }
    if (s == 60) {
        s = 0;
        m++;
    }
    if (m == 60) {
        m = 0;
        h++;
    }
    num.textContent = `${String(h).padStart(2, 0)}:${String(m).padStart(2, 0)}:${String(s).padStart(2, 0)}:${String(count).padStart(2, 0)}`;
}
showTime();

let interval;

ssbtn.addEventListener("click", function () {
    if (ssbtn.textContent == "Start") {
        ssbtn.textContent = "Stop";
        ssbtn.classList.remove("bg-green-600");
        ssbtn.classList.add("bg-red-600");
        interval = setInterval(() => {
            ++count;
            showTime();
        }, 100)
    } else {
        ssbtn.textContent = "Start"
        clearInterval(interval);
        ssbtn.classList.add("bg-green-600");
        ssbtn.classList.remove("bg-red-600");
    }

})

rebtn.addEventListener("click", () => {
    count = 0;
    h = 0;
    m = 0;
    s = 0;
    showTime();
})