# TimestampConvert.js
A lightweight Javascript Library to easily convert UNIX timestamps to JSON-based real world timezones

## Installation
The library is part of the npm package registry, and can be easily installed to a Node.js project:

```sh
npm install timestampconvertjs --save-dev
```

## Methods
There are a few methods offered by this library
### getTime
```js
    function getTime(twelveHourFormat, hourOffset, minuteOffset)
```
Returns an output object with the current time in GMT, with an optional hour and minute offset which can be used to convert to any time-zone in the world.
  * **twelveHourFormat**: A boolean - True if the time should be formatted in twelve hour format, false otherwise
  * **hourOffset** *(optional)*: The number of hours to offset from GMT or UTC (For example, EST New York Time would have hourOffset of -4)
  * **minuteOffset** *(optional)*: The number of minutes to offset from GMT or UTC (Very uncommon, but for example, Kathmandu time is GMT+5:45 so hourOffset would be 5, and minuteOffset would be 45)

### convert
```js
    function convert(unixTimestamp, twelveHourFormat, hourOffset, minuteOffset)
```
Returns an output object with the time specified by ***unixTimestamp*** in GMT, with an optional hour and minute offset which can be used to convert to any time-zone in the world.
  * Signature definitions are as described above, with the exception that ***unixTimestamp*** in **milliseconds** is given by the user

### getLocalTime
```js
    function getLocalTime(twelveHourFormat)
```
Returns an output object with the current time in your timezone.
   * Signature definitions are as described above
   
### convertToLocalTime
```js
    function getLocalTime(twelveHourFormat)
```
Returns an output object with the time specified by ***unixTimestamp*** in your timezone.
   * Signature definitions are as described above
   
## Usage Example
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
