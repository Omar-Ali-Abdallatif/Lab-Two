/* Make a function that takes date string as a parameter, and returns the Day name (Saturday, Sunday,) of the given date.*/
function getDayName(dateString) {
    let dayName;
    return  ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][new Date(dateString).getDay()]
    return dayName;
}

console.log(getDayName("2026-8-20"))