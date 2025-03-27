//showing this elements on the webpage...

const d = new Date();

document.writeln(d.getTime()); // current timestamp in milliseconds
document.writeln("<br>");
document.writeln("<br>");

document.writeln(d.getMonth() + 1);
console.log("<br>");
document.writeln("<br>");

document.writeln(d.getHours()); //
document.writeln("<br>");
document.writeln("<br>");


document.writeln(d.getMinutes());
document.writeln("<br>");
document.writeln("<br>");

document.writeln(d.getSeconds());
document.writeln("<br>"); document.writeln("<br>");

document.writeln(d.getDay()); // day of the week (0-6)
document.writeln("<br>");
document.writeln("<br>");

document.writeln(d.getMilliseconds()); // milliseconds
document.writeln("<br>");
document.writeln("<br>");


d.setFullYear(2025) // date and time in a human-readable format
document.writeln(d);
document.writeln("<br>");
document.writeln("<br>");

d.setDate(27) // date and time in a human-readable format

document.writeln(d);


//printing date month and year in human readable format


var date = new Date();
var realday = date.getDay();
var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();
document.writeln("<br>");
document.writeln("<br>");

document.writeln("Today Date is : ", day + "/" + month + "/" + year);