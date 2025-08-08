let btnCalAge = document.getElementById("btnCalAge");
let inpDate = document.querySelectorAll('input[type="date"]');
let dispResult = document.getElementById("result");

const d = new Date();
let currDay = d.getDate();
let currMonthDefault = d.getMonth(); //because it  Extracts the current month (0-11, where 0 = January)
let currYear = d.getFullYear();

let currMonth = currMonthDefault + 1;


let inpYear = 0, inpDay = 0, inpMonth = 0;

btnCalAge.addEventListener("click", () => {
    calAge();
});



//functions:

function calAge() {
    let dateSelected = false;
    for (let i = 0; i < inpDate.length; i++) {
        if (inpDate[i].type === "date") {
            if (inpDate[i].value) { // Check if a value is selected
                dateSelected = true;
                [inpYear, inpMonth, inpDay] = inpDate[i].value.split("-").map(val => parseInt(val, 10)); // Extracting year, month, and date as numbers
                if (parseInt(inpYear) > currYear) {
                    alert("Please select a valid date!");
                }
                else {
                    let diffYear = currYear - inpYear;
                    let diffMonth = currMonth - inpMonth;
                    let diffDay = currDay - inpDay;

                    let yearsOld = diffYear;
                    let monthsOld = diffMonth;
                    let daysOld = diffDay;

                    // Adjust days and months if days are negative
                    if (daysOld < 0) {
                        // Borrow days from previous month
                        let prevMonth = currMonth - 1;
                        let prevYear = currYear;
                        if (prevMonth === 0) {
                            prevMonth = 12;
                            prevYear -= 1;
                        }
                        let daysInPrevMonth = new Date(prevYear, prevMonth, 0).getDate();
                        daysOld += daysInPrevMonth;
                        monthsOld -= 1;
                    }

                    // Adjust months and years if months are negative
                    if (monthsOld < 0) {
                        monthsOld += 12;
                        yearsOld -= 1;
                    }

                    dispResult.innerHTML = `Your age is : ${yearsOld} years ${monthsOld} months ${daysOld} days`;
                }
            } else {
                console.log("No date selected.");
            }
        }
    }
    if (!dateSelected) {
        alert("Please select your DOB first!");
    }
}



