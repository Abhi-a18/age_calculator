function cal() {
    const dateInput = document.getElementById("date").value;
    const output = document.getElementById("output");

    if (dateInput === "") {
        output.innerText = "Please enter the date";
        return;
    }

    const dob = new Date(dateInput);
    const today = new Date();

    // Remove time from today's date
    today.setHours(0, 0, 0, 0);

    // Future DOB check
    if (dob > today) {
        output.innerText = "DOB cannot be in the future";
        return;
    }

    let year = today.getFullYear() - dob.getFullYear();
    let month = today.getMonth() - dob.getMonth();
    let day = today.getDate() - dob.getDate();

    if (day < 0) {
        month--;
        const prevMonthDays = new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        ).getDate();
        day += prevMonthDays;
    }

    if (month < 0) {
        year--;
        month += 12;
    }

    // 🎉 Birthday check (FIXED)
    if (
        today.getDate() === dob.getDate() &&
        today.getMonth() === dob.getMonth()
    ) {
        output.innerText = ` Happy Birthday! You are ${year} years old `;
    } else {
        output.innerText = `${year} Years, ${month} Months, ${day} Days`;
    }
}

function reset() {
    document.getElementById("date").value = "";
    document.getElementById("output").innerText = "";
}
