const form = document.getElementById('formy');
const year = document.getElementById('year');
const month = document.getElementById('month');
const day = document.getElementById('date');
const display = document.getElementById('display');

form.addEventListener('submit', (e) => {
    let messages = [];
    if (year.value == null || year.value === ""){
        messages.push('Name is required')
    }
    else if (month.value == null || month.value === ""){
        messages.push('Name is required')
    }
    else if (day.value == null || day.value === ""){
        messages.push('Name is required')
    }

    if (messages.length > 0 ){
        e.preventDefault();
        display.innerText = messages.join(', ')
        
    }
})