  function getData() {
  let year = document.getElementById('year');
  var year1 = year.slice(2);
  var YY = parseInt(year1);
  var year2 = year.slice(0,2);
  var CC = parseInt(year2);

  let mon = document.getElementById('month');
  var MM = parseInt(mon);

  let dday = document.getElementById('date');
  var DD = parseInt(dday);


  // Write Hello World
//   var year = "2020";
//   var year1 = year.slice(2);
//   var YY = parseInt(year1);
//   var year2 = year.slice(0,2);
//   var CC = parseInt(year2);
//   var MM = 7;
//   var DD = 17;
  var curr = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
  var day = Math.trunc(curr);
  
  function dayOfWeek (day){
    if (day === 1){
      return "Monday";
    } else if (day === 2){
      return "Tuesday";
    } else if (day === 3){
      return "Wednesday";
    } else if (day === 4){
      return "Thursday";
    } else if (day === 5){
      return "Friday";
    } else if (day === 6){
      return "Saturday";
    } else if (day === 7){
      return "Sunday";
    }
  }
  

}