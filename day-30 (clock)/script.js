const time = document.querySelector("#time");
const date = document.querySelector("#date");
const weekdays = document.querySelector("#weekdays");
const weekday = weekdays.children;

const updateClock = () => {
    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    time.textContent =  now.toLocaleTimeString('en-US', options);
    const dateOptions = { day: '2-digit', month: 'short', year: 'numeric' };
    date.textContent = now.toLocaleDateString('en-US', dateOptions);
    const currentDay = now.getDay();
    for (let i = 0; i < weekday.length; i++) {
        if (i === currentDay) {
            weekday[i].classList.add("font-bold", "text-blue-600");
        } else {
            weekday[i].classList.remove("font-bold", "text-blue-600");
        }
    }
}
setInterval(updateClock, 1000);
updateClock();
