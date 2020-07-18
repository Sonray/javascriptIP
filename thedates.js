const form = document.getElementById('formy');
const year = document.getElementById('year');
const month = document.getElementById('month');
const day = document.getElementById('date');
const display = document.getElementById('display');



function getData(){

    var firstYear = year.value
    alert(typeof(firstYear))

    var years = firstYear;
    var year1 = years.slice(2);
    var YY = parseInt(year1);
    var year2 = years.slice(0,2);
    var CC = parseInt(year2);
    var MM = parseInt(month.value);
    var DD = parseInt(day.value);
    var curr = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
    var noOfDay = Math.trunc(curr);

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

    var finalDay = dayOfWeek(noOfDay);

    //male[0] is sunday
    var male = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']

    //female[0] is sunday
    var female = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']



    alert(finalDay)
    display.innerText = finalDay
    
}


form.addEventListener('submit', (e) => {
    let messages = [];
    if (year.value == null || year.value === ""){
        messages.push('Year is required')
    }
    else if (month.value == null || month.value === "" && month.value <= "0" && month.value > "12" ){
        messages.push('Month is required')
    }
    else if (day.value == null || day.value === "" && day.value <= "0" && day.value >"32" ){
        messages.push('Day is required')
    }

    if (messages.length > 0 ){
        e.preventDefault();
        display.innerText = messages.join(', ')
        
    }else {
        e.preventDefault();
        display.innerText = getData()
    }


    
})
