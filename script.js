let btnCalAge = document.getElementById("btnCalAge");
let inpDate = document.getElementsByTagName("input");
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

    for (let i = 0; i < inpDate.length; i++) {
        if (inpDate[i].type === "date") {
            [inpYear, inpMonth, inpDay] = inpDate[i].value.split("-"); // Extracting year, month, and date
            if (inpDate[i].value) { // Check if a value is selected
                if (inpYear > currYear) {
                    alert("Please select a valid date!")
                }
                else {
                    let diffYear = currYear - inpYear;
                    let diffMonth = currMonth - inpMonth;
                    let diffDay = currDay - inpDay;

                    let yearsOld = 0;
                    let monthsOld = 0;
                    let daysOld = 0;

                    if (diffMonth >= 0) {
                        yearsOld = diffYear;
                        monthsOld = diffMonth;
                    }

                    else if (diffMonth < 0) {
                        yearsOld = diffYear - 1;
                        monthsOld = 11 + diffMonth;
                    }

                    //for days: 
                    if (diffDay > 0 || diffDay === 0) {
                        daysOld = diffDay;
                    }
                    else if (diffDay < 0) {
                        daysOld = 30 + diffDay;
                    }
                    // let result = currYear - inpYear;
                    dispResult.innerHTML = "Your age is : " + yearsOld + " years " + monthsOld + " months "+daysOld+ " days";
                }
            }
        }
        else {
            console.log("No date selected.");
        }
    }
}



