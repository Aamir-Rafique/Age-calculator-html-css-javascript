let btnCalAge = document.getElementById("btnCalAge");
let dateInput = document.querySelector('input[type="date"]');
let dispResult = document.getElementById("result");

btnCalAge.addEventListener("click", calAge);

function calAge() {
    if (!dateInput.value) {
        alert("Please select a date!");
        return;
    }

    let [inpYear, inpMonth, inpDay] = dateInput.value.split("-").map(Number);

    // Get today's date
    const today = new Date();
    let currYear = today.getFullYear();
    let currMonth = today.getMonth() + 1; // getMonth() is 0-indexed
    let currDay = today.getDate();

    // Prevent future dates
    if (
        inpYear > currYear ||
        (inpYear === currYear && inpMonth > currMonth) ||
        (inpYear === currYear && inpMonth === currMonth && inpDay > currDay)
    ) {
        alert("Please select a valid past date!");
        return;
    }

    let yearsOld = currYear - inpYear;
    let monthsOld = currMonth - inpMonth;
    let daysOld = currDay - inpDay;

    if (daysOld < 0) {
        // Borrow days from previous month
        monthsOld--;
        // Get days in previous month
        let prevMonth = currMonth - 1;
        let prevYear = currYear;
        if (prevMonth === 0) {
            prevMonth = 12;
            prevYear--;
        }
        let daysInPrevMonth = new Date(prevYear, prevMonth, 0).getDate();
        daysOld += daysInPrevMonth;
    }

    if (monthsOld < 0) {
        yearsOld--;
        monthsOld += 12;
    }

    dispResult.innerHTML = `Your age is: ${yearsOld} years ${monthsOld} months ${daysOld} days`;
}