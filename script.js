function createTimeElement(value) {
    const timeElement = document.createElement("div");

    timeElement.className = value
    timeElement.classList.add("timer")

    return timeElement
};
function createListElement(value, text) {
    const listElement = document.createElement("li");
    listElement.className = value;
    listElement.innerHTML = text;

    return listElement
};

function createSwichElement() {
    const container = document.createElement("div");
    container.innerText = "List"
    container.className = "list"
    const list = document.createElement("ul");

    const euroTime = createListElement("euro-time", "Euro Time");
    const ampm = createListElement("ampm", "AM-PM");
    const currentYear = createListElement("current-year", "Whole Date");

    container.appendChild(list)
    list.appendChild(euroTime);
    list.appendChild(ampm);
    list.appendChild(currentYear);

    list.hidden = true;

    container.onclick = function () {
        list.hidden = !list.hidden;
    }

    euroTime.addEventListener("click", function () {
        clearInterval(timerHH)
        clearInterval(timerAM);
        clearInterval(fullYear);

        timerHH = setInterval(() => {
            document.querySelector(".first-container").innerHTML = clock().hour;
            document.querySelector(".second-container").innerHTML = ":";
            document.querySelector(".third-container").innerHTML = clock().minute;
            document.querySelector(".fourth-container").innerHTML = ":";
            document.querySelector(".fifth-container").innerHTML = clock().second;
            console.log(clock().hour + ':' + clock().minute + ':' + clock().second)
        }, 1000);
        console.log("euro");

    })
    ampm.addEventListener("click", function () {
        clearInterval(timerAM)
        clearInterval(timerHH);
        clearInterval(fullYear);

        timerAM = setInterval(() => {
            document.querySelector(".first-container").innerHTML = clock().hour12;
            document.querySelector(".second-container").innerHTML = ":";
            document.querySelector(".third-container").innerHTML = clock().minute;
            document.querySelector(".fourth-container").innerHTML = " ";
            document.querySelector(".fifth-container").innerHTML = clock().ampm;
            console.log(clock().hour12 + ':' + clock().minute + clock().ampm)
        }, 1000);
        console.log("ampm");

    })
    currentYear.addEventListener("click", function () {
        clearInterval(fullYear)
        clearInterval(timerHH);
        clearInterval(timerAM);

        fullYear = setInterval(() => {
            document.querySelector(".first-container").innerHTML = `${clock().year}-`;
            document.querySelector(".second-container").innerHTML = `${clock().month}-`;
            document.querySelector(".third-container").innerHTML = clock().day;
            document.querySelector(".fourth-container").innerHTML = clock().hour;
            document.querySelector(".fourth-container").style.paddingLeft = "10px";
            document.querySelector(".fifth-container").innerHTML = `:${clock().minute}`;
            console.log(clock().year + '-' + clock().month + '-' + clock().day + ' ' + clock().hour + ':' + clock().minute)
        }, 1000);
        console.log("year")

    })
    return container
}

function createClock() {
    const container = document.createElement("header");

    const firstContainer = createTimeElement("first-container");
    const secondContainer = createTimeElement("second-container");
    const thirdContainer = createTimeElement("third-container");
    const fourthContainer = createTimeElement("fourth-container");
    const fifthContainer = createTimeElement("fifth-container");
    const createList = createSwichElement()

    const colors = ["red", "blue", "green", "orange", "grey"];

    container.appendChild(firstContainer);
    container.appendChild(secondContainer);
    container.appendChild(thirdContainer);
    container.appendChild(fourthContainer);
    container.appendChild(fifthContainer);
    container.appendChild(createList);

    for (const i of container.children) {
        i.style.color = colors.shift()
    }

    return container
};



const clock1 = createClock();

document.body.appendChild(clock1);

function clock() {
    let date = new Date();
    let hour = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours();
    let minute = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
    let second = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
    let year = date.getFullYear();

    function monthNumber() {
        if (date.getMonth() < 10) {
            return `0${date.getMonth() + 1}`
        } else {
            return date.getMonth() + 1;
        }
    };

    let month = monthNumber();
    let day = date.getDate();
    let hour12 = ((date.getHours() < 10) ? '0' + date.getHours() : date.getHours()) % 12;
    let ampm = hour >= 12 ? 'pm' : 'am';

    return { hour, minute, second, year, month, day, hour12, ampm }
}

let timerAM;
let fullYear;

let timerHH = setInterval(() => {
    document.querySelector(".first-container").innerHTML = clock().hour;
    document.querySelector(".second-container").innerHTML = ":";
    document.querySelector(".third-container").innerHTML = clock().minute;
    document.querySelector(".fourth-container").innerHTML = ":";
    document.querySelector(".fifth-container").innerHTML = clock().second;
    console.log(clock().hour + ':' + clock().minute + ':' + clock().second)
}, 1000);

setInterval(() => {
    console.clear()
}, 2000);
