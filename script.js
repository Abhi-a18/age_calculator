function CalculateAge() {
    const birthDateValue = document.getElementById("birthDate")?.value;
    const resultElement = document.getElementById("ageResult");

    if (!birthDateValue) {
        resultElement.innerText = "Please select a valid birth date.";
        return;
    }

    const birthDate = new Date(birthDateValue);
    const today = new Date();

    if (isNaN(birthDate.getTime())) {
        resultElement.innerText = "Invalid date format.";
        return;
    }

    today.setHours(0, 0, 0, 0);

    if (birthDate > today) {
        resultElement.innerText = "Birth date cannot be in the future.";
        return;
    }

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        const previousMonthDays = new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        ).getDate();
        days += previousMonthDays;
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    const isBirthday =
        today.getDate() === birthDate.getDate() &&
        today.getMonth() === birthDate.getMonth();

    resultElement.innerText = isBirthday
        ? `🎉 Happy Birthday! You are ${years} years old 🎂`
        : `${years} Years, ${months} Months, ${days} Days`;
}

function handleReset() {
    document.getElementById("birthDate").value = "";
    document.getElementById("ageResult").innerText = "";
}
