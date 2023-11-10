/*
=>An integer number representing the number of milliseconds that has passed since the beginning of 1970 is called a timestamp.
 */
// Dates before 01.01.1970 have negative timestamps, e.g.:
let Dec31_1969 = new Date(-24 * 3600 * 1000);
console.log( Dec31_1969 );

// new Date(year, month, date, hours, minutes, seconds, ms)
// Create the date with the given components in the local time zone. Only the first two arguments are obligatory.

// The year should have 4 digits. For compatibility, 2 digits are also accepted and considered 19xx, e.g. 98 is the same as 1998 here, but always using 4 digits is strongly encouraged.
// The month count starts with 0 (Jan), up to 11 (Dec).
// The date parameter is actually the day of month, if absent then 1 is assumed.
// If hours/minutes/seconds/ms is absent, they are assumed to be equal 0.
// For instance:

new Date(2011, 0, 1, 0, 0, 0, 0); // 1 Jan 2011, 00:00:00
new Date(2011, 0, 1); // the same, hours etc are 0 by default

// getTime()
// Returns the timestamp for the date – a number of milliseconds passed from the January 1st of 1970 UTC+0.

// getTimezoneOffset()
// Returns the difference between UTC and the local time zone, in minutes:

// Setting date components
// The following methods allow to set date/time components:

// setFullYear(year, [month], [date])
// setMonth(month, [date])
// setDate(date)
// setHours(hour, [min], [sec], [ms])
// setMinutes(min, [sec], [ms])
// setSeconds(sec, [ms])
// setMilliseconds(ms)
// setTime(milliseconds) (sets the whole date by milliseconds since 01.01.1970 UTC)

// AUTOCORRECTION
// let date=new Date(2023,2,33);
// console.log(date);

// Date to number, date diff
let date = new Date();
console.log(+date); // the number of milliseconds, same as date.getTime()

// diif
let start = new Date(); // start measuring time

// do the job
for (let i = 0; i < 100000000; i++) {
  let doSomething = i * i * i;
}

let end = new Date(); // end measuring time

console.log( `The loop took ${end - start} ms` );

// Date.now()
// If we only want to measure time, we don’t need the Date object.

// There’s a special method Date.now() that returns the current timestamp.

// It is semantically equivalent to new Date().getTime(), but it doesn’t create an intermediate Date object. So it’s faster and doesn’t put pressure on garbage collection.

// It is used mostly for convenience or when performance matters, like in games in JavaScript or other specialized applications.

// Date.parse from a string
// The method Date.parse(str) can read a date from a string.

// The string format should be: YYYY-MM-DDTHH:mm:ss.sssZ, where:

// YYYY-MM-DD – is the date: year-month-day.
// The character "T" is used as the delimiter.
// HH:mm:ss.sss – is the time: hours, minutes, seconds and milliseconds.
// The optional 'Z' part denotes the time zone in the format +-hh:mm. A single letter Z would mean UTC+0.
// Shorter variants are also possible, like YYYY-MM-DD or YYYY-MM or even YYYY.

// The call to Date.parse(str) parses the string in the given format and returns the timestamp (number of milliseconds from 1 Jan 1970 UTC+0). If the format is invalid, returns NaN.

// For instance:

let ms = Date.parse('2012-01-26T13:51:50.417-07:00');

console.log(ms); // 1327611110417  (timestamp)
