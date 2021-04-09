function createTimeElement(value) {
    const timeElement = document.createElement("div");

    timeElement.className = value
    timeElement.classList.add("timer")

    return timeElement
};


function createClock() {
    const container = document.createElement("header");

    const hourContainer = createTimeElement("hours");
    const minuteContaner = createTimeElement("minutes");
    const secondsContainer = createTimeElement("seconds");
    const doubleDrop1 = createTimeElement("blink1");
    const doubleDrop = createTimeElement("blink");

    doubleDrop.innerText = ":"
    doubleDrop1.innerText = ":"

    container.appendChild(hourContainer);
    container.appendChild(doubleDrop1);
    container.appendChild(minuteContaner);
    container.appendChild(doubleDrop);
    container.appendChild(secondsContainer);


    return container
};

const clock1 = createClock();

document.body.appendChild(clock1);

const blink = document.querySelector(".blink");
const classes = [
    "blink-white",
    "blink-black"
];
const blinkingSwitch = classes.shift();
blink.className = blinkingSwitch;

function blinking() {
    classes.push(blink.className);
    blink.className = classes.shift()
}
setInterval(blinking, 500);

function clock() {
    let date = new Date();
    let hour = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours();
    let minute = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
    let second = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
    console.log(hour + ':' + minute + ':' + second);
    document.querySelector(".hours").innerHTML = hour;
    document.querySelector(".minutes").innerHTML = minute;
    document.querySelector(".seconds").innerHTML = second;
}
setInterval(clock, 1000);