/*get today date and destructure it*/
const date = new Date(),
  d = date.getDate(),
  m = date.getMonth(),
  y = date.getFullYear();

/*create array of dates and weekdays*/
export const arrDates = new Array();
const classNumbers = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
];

for (let i = 1; i < 15; i++) {
  const curdate = new Date(y, m, d + i);

  const month = curdate.getMonth() + 1;
  const day = curdate.getDate();
  let weekDay = curdate.getDay();

  /*replace weekNumber*/
  if (weekDay === 0) weekDay = "Sun";
  if (weekDay === 1) weekDay = "Mon";
  if (weekDay === 2) weekDay = "Tue";
  if (weekDay === 3) weekDay = "Wed";
  if (weekDay === 4) weekDay = "Thu";
  if (weekDay === 5) weekDay = "Fri";
  if (weekDay === 6) weekDay = "Sat";

  arrDates.push({
    date: day + "." + month + ".",
    weekDay: weekDay,
    class: classNumbers[i - 1],
  });
}
