# TimestampConvert.js
A lightweight Javascript Library to easily convert UNIX timestamps to JSON-based real world timezones

## Installation
The library is part of the npm package registry, and can be easily installed to a Node.js project:

```sh
npm install timestampconvertjs --save-dev
```

## Usage
There are two methods offered by this library
```js
    function getTime(twelveHourFormat, hourOffset, minuteOffset)
```

  * **twelveHourFormat**: A boolean - True if the time should be formatted in twelve hour format, false otherwise
  * **hourOffset** *(optional)*: The number of hours to offset from GMT or UTC (For example, EST New York Time would have hourOffset of -4)
  * **minuteOffset** *(optional)*: The number of minutes to offset from GMT or UTC (Very uncommon, but for example, Kathmandu time is GMT+5:45 so hourOffset would be 5, and minuteOffset would be 45)
  
```js
    function convert(unixTimestamp, twelveHourFormat, hourOffset, minuteOffset)
```
  * Same signature as described above, with the exception that ***unixTimestamp*** in **milliseconds** is given by the user
  
### Example
```js

//getTime() usage
var ts = require('timestampconvertjs');
var currTime = ts.getTime(true, -4);
console.log(currTime);

//convert() usage
var customUnixTimestamp = 1451606400000; //Sunday, August 12, 2018 1:05:31 AM
var convertedTime = ts.convert(customUnixTimestamp, false);
console.log(convertedTime);

```
