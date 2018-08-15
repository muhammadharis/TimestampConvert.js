# TimestampConvert.js
A lightweight Javascript Library to easily convert UNIX timestamps to JSON-based real world timezones

[![npm version](https://badge.fury.io/js/timestampconvertjs.svg)](https://badge.fury.io/js/timestampconvertjs)

## Installation
This module is part of the npm package registry, and can be easily installed to a Node.js project:

```sh
npm install timestampconvertjs --save-dev
```

## Methods
There are a few methods offered by this library:

* ### getTime()
```js
    function getTime(twelveHourFormat, hourOffset, minuteOffset)
```
Returns an output object with the current time in GMT, with an optional hour and minute offset which can be used to convert to any time-zone in the world.
  * **twelveHourFormat**: A boolean - true if the time should be formatted in twelve-hour format, false otherwise
  * **hourOffset** *(optional)*: The number of hours to offset from GMT or UTC (For example, EST New York Time would have hourOffset of -4)
  * **minuteOffset** *(optional)*: The number of minutes to offset from GMT or UTC (Very uncommon, but for example, Kathmandu time is GMT+5:45 so hourOffset would be 5, and minuteOffset would be 45)

* ### convert()
```js
    function convert(unixTimestamp, twelveHourFormat, hourOffset, minuteOffset)
```
Returns an output object with the time specified by ***unixTimestamp*** in GMT, with an optional hour and minute offset which can be used to convert to any time-zone in the world.
  * Signature definitions are as described above, with the exception that ***unixTimestamp*** in **milliseconds** is given by the user

* ### getLocalTime()
```js
    function getLocalTime(twelveHourFormat)
```
Returns an output object with the current time in your timezone.
   * Signature definitions are as described above
   
* ### convertToLocalTime()
```js
    function getLocalTime(twelveHourFormat)
```
Returns an output object with the time specified by ***unixTimestamp*** in your timezone.
   * Signature definitions are as described above

## Output Format
The output is formatted as a JS object as follows:
```js
{ year: YEAR,
  monthName: MONTH-NAME,
  monthNumber: MONTH-NUMBER,
  dayOfTheWeekNumber: DAY-OF-THE-WEEK-NUMBER,
  dayOfTheWeek: DAY-OF-THE-WEEK-NAME,
  day: DAY-NUMBER,
  hours: HOURS,
  minutes: MINUTES,
  seconds: SECONDS,
  milliseconds: MILLISECONDS,
  period: AM/PM,
  formattedTime: HOUR:MINUTE:SECONDS.MILLISECONDS }
```
the 'period' attribute only appears when ***twelveHourFormat*** is set to true.
## Usage Example
```js
var ts = require('timestampconvertjs');
var customUnixTimestamp = 1451606400000; //Sunday, August 12, 2018 1:05:31 AM

//getTime() usage
var currTime = ts.getTime(true, -4); //Returns NY time (4 hours behind GMT) in 12-hr format

//convert() usage
var convertedTime = ts.convert(customUnixTimestamp, false); //Returns converted GMT time in 24-hr format

//getLocalTime() usage
var currTimeLocal = ts.getTime(true); //Returns current time in local timezone in 12-hr format

//convertToLocalTime() usage
var convertedTimeLocal = ts.convert(customUnixTimestamp, false); //Returns converted time in local timezone in 24-hr format

```
