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

    alert(finalDay)
    display.innerText = finalDay
    
}//function check

function male(birthDay){

    //male[0] is sunday
    var male = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']

    if (birthDay === "Sunday"){
        return male[0]
    }
    else if (birthDay === "Monday"){
        return male[1]
    }
    else if (birthDay === "Tuesday"){
        return male[2]
    }
    else if (birthDay === "Wednesday"){
        return male[3]
    }
    else if (birthDay === "Thursday"){
        return male[4]
    }
    else if (birthDay === "Friday"){
        return male[5]
    }
    else if (birthDay === "Saturday"){
        return male[6]
    }

}

function female(birthDay){

    //female[0] is sunday
    var female = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']

    if (birthDay === "Sunday"){
        return male[0]
    }
    else if (birthDay === "Monday"){
        return male[1]
    }
    else if (birthDay === "Tuesday"){
        return male[2]
    }
    else if (birthDay === "Wednesday"){
        return male[3]
    }
    else if (birthDay === "Thursday"){
        return male[4]
    }
    else if (birthDay === "Friday"){
        return male[5]
    }
    else if (birthDay === "Saturday"){
        return male[6]
    }

}

function akan(){


    //female[0] is sunday
    var female = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']

}


form.addEventListener('submit', (e) => {
    let messages = [];
    if (year.value == null || year.value === ""){
        messages.push('Year is required')
    }
    else if (month.value == null || month.value === ""){
        messages.push('Month is required')
    }
    else if (day.value == null || day.value === ""){
        messages.push('Day is required')
    }

    if (messages.length > 0 ){
        e.preventDefault();
        display.innerText = messages.join(', ')
        
    }else {
        e.preventDefault();
        display.innerText = getData()
    }
    
})//function check
