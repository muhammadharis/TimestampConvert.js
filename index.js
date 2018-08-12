//1533959360363
//1533868921181
//1534029236377
function isLeapYear(year){
  return year%4==0 &&(year%100!=0 || year%400==0);
}
module.exports.getTime = function(){
  return this.convert(new Date().getTime());
}

module.exports.convert = function(unixTimestamp){
  var daysCompletedSince1970  = Math.floor(unixTimestamp/86400000);
  var dayOfTheWeekNumber = (daysCompletedSince1970 % 7 +4)%7 +1;
  //console.log('day of the week: '+dayOfTheWeekNumber);
  //console.log('days since 1970: '+daysCompletedSince1970);
  var dayOfTheWeek;
  switch(dayOfTheWeekNumber){
    case 1: dayOfTheWeek="Sunday"; break;
    case 2: dayOfTheWeek="Monday"; break;
    case 3: dayOfTheWeek="Tuesday"; break;
    case 4: dayOfTheWeek="Wednesday"; break;
    case 5: dayOfTheWeek="Thursday"; break;
    case 6: dayOfTheWeek="Friday"; break;
    case 7: dayOfTheWeek="Saturday"; break;
  }



  var daysLeftInCurrentYear = daysCompletedSince1970;
  var year = 1970;
  while(true){
    if(isLeapYear(year)){
      if(daysLeftInCurrentYear-366<0){
        break;
      }
      else{
        daysLeftInCurrentYear-=366;
      }
    }
    else{
      if(daysLeftInCurrentYear-365<0){
        break;
      }
      else{
        daysLeftInCurrentYear-=365;
      }
    }
    year++;
  }
  //console.log(year);
  //console.log(daysLeftInCurrentYear);
  var finalMonthNumber;
  var finalDay = daysLeftInCurrentYear + 1; //Since our original calculation was days COMPLETED and hence the floor() but the actual current day is always 1 more than that

  for(var i = 1; i<=12; i++){

    if(i==4 || i==6 || i==9 || i==11){ //April, June, Sept, Nov have 30 
      if(finalDay-30>0){
        finalDay-=30;
      }
      else{
        finalMonthNumber = i;
        break;
      }
    }
    else if(i==2){ //Feb has 28 days, except on leap year
      if(isLeapYear(year)){
        if(finalDay-29>0){
          finalDay-=29;
        }
        else{
          finalMonthNumber = i;
          break;
        }
      }
      else{
        if(finalDay-28>0){
          finalDay-=28;
        }
        else{
          finalMonthNumber = i;
          break;
        }
      }
    }
    else{ //All other months have 31 days
      if(finalDay-31>0){
        finalDay-=31;
      }
      else{
        finalMonthNumber=i;
        break;
      }
    }
  }

  var finalMonthName;
  switch(finalMonthNumber){
    case 1:  finalMonthName="January"; break;
    case 2:  finalMonthName="February"; break;
    case 3:  finalMonthName="March"; break;
    case 4:  finalMonthName="April"; break;
    case 5:  finalMonthName="May"; break;
    case 6:  finalMonthName="June"; break;
    case 7:  finalMonthName="July"; break;
    case 8:  finalMonthName="August"; break;
    case 9:  finalMonthName="September"; break;
    case 10: finalMonthName="October"; break;
    case 11: finalMonthName="November"; break;
    case 12: finalMonthName="December"; break;
  }

  /*console.log('month number: '+finalMonthNumber);
  console.log('month name: '+finalMonthName)
  console.log('day: '+ finalDay);*/
  var millisecondsLeftInDay = unixTimestamp - daysCompletedSince1970*86400000
  var secondsLeftInDay = millisecondsLeftInDay/1000;
  var minutesLeftInDay = secondsLeftInDay/60;
  var hoursLeftInDay = minutesLeftInDay/60;
  /*console.log('milliseconds left: '+millisecondsLeftInDay);
  console.log('minutes left in day: '+minutesLeftInDay);
  console.log('final time\'s milliseconds: '+Math.floor(millisecondsLeftInDay%1000));
  console.log('final time\'s seconds: '+Math.floor(secondsLeftInDay%60));
  console.log('final time\'s minutes: '+Math.floor(minutesLeftInDay%60));
  console.log('final time\'s hours: '+Math.floor(hoursLeftInDay));
*/
  var finalReturnObject = {
    'year' : year,
    'monthName': finalMonthName,
    'monthNumber' : finalMonthNumber,
    'dayOfTheWeekNumber' : dayOfTheWeekNumber,
    'dayOfTheWeek' : dayOfTheWeek,
    'day' : finalDay,
    'hours' : Math.floor(hoursLeftInDay),
    'minutes': Math.floor(minutesLeftInDay%60),
    'seconds' : Math.floor(secondsLeftInDay%60),
    'milliseconds' : Math.floor(millisecondsLeftInDay%1000)
  }
  return finalReturnObject;
}
