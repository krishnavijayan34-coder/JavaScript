const compareDates = (givenDateStr) => {
    let current = new Date();
    let given = new Date(givenDateStr);

    if (current.toDateString() === given.toDateString()) {
        return "Both dates are equal";
    } else if (given < current) {
        return "Given date is in the past";
    } else {
        return "Given date is in the future";
    }
};

console.log(compareDates("2026-11-29"));