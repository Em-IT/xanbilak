/* eslint-disable no-magic-numbers */
/* eslint-disable max-statements */
import { DateTime } from "luxon";
import moment from "moment";

export const relativeDateTime = (timestamp: any): string => {

  // Print datetime return Today else print the date
  const datetime = timestamp && timestamp.toDate();
  const days = moment().diff(datetime, "days");
  const midnight = new Date();
  midnight.setHours(0, 0, 0, 0);
  const yesterdayMidnight = new Date();
  yesterdayMidnight.setDate(yesterdayMidnight.getDate() - 1);
  yesterdayMidnight.setHours(0, 0, 0, 0);
  if (days === 0 && midnight < datetime) {

    return "Today";

  } else if (
    (days === 1 && yesterdayMidnight < datetime) ||
      (days === 0 && midnight > datetime)) {

    return "Yesterday";

  }

  return DateTime.fromJSDate(datetime).toFormat("dd LLL yyyy");

};

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export const convertToLongDate = (date: string): string => {

  const dateObject = new Date(date);
  const month = MONTH_NAMES[dateObject.getMonth()];
  // eslint-disable-next-line max-len
  const formattedStr = `${month} ${dateObject.getDay()}, ${dateObject.getFullYear()}`;
  return formattedStr;

};

export const convertToLongDate2 = (date: string): string => {

  const dateObject = new Date(date);
  const month = MONTH_NAMES[dateObject.getMonth()];
  // eslint-disable-next-line max-len
  const formattedStr = `${dateObject.getDay()} ${month} ${dateObject.getFullYear()}`;
  return formattedStr;

};

export const todayString = () => (
  // eslint-disable-next-line max-len
  `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`
);

const addLeadingZero = (number: number, digitsCount = 2) => {

  let leadingZero = "";
  for (let index = 0; index < digitsCount - number.toString().length; index++) {

    leadingZero = `0${leadingZero}`;

  }
  return leadingZero + number;

};

export const todayDateAndTimeString = (): string => {

  const now = new Date();
  return `${addLeadingZero(now.getDate())}/${addLeadingZero(now.getMonth() + 1)}
/${now.getFullYear()} - ${addLeadingZero(now.getHours())}:
${addLeadingZero(now.getMinutes())}:${addLeadingZero(now.getSeconds())}
:${new Date().getMilliseconds()}`;

};

export const makeShortenedTextByDots =
  (text: string, savedCharNum: number): string => (
    text.length >= savedCharNum
      ? `${text.substring(0, savedCharNum - 3)}...`
      : text
  );
