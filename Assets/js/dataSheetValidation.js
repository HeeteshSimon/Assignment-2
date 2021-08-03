

let sumTotal = document.getElementById('total');
    sumTotal.value = '0';

function validate(marks) {

    if (marks.value >= 0 && marks.value <= 100) {

        (marks.value < 50) ?
            marks.style.backgroundColor = "rgba(201, 76, 76, 0.3)" : marks.style.backgroundColor = "rgba(76, 201, 76, 0.3)";

        sumTotal.value = parseInt(sumTotal.value) + parseInt(marks.value);    
    }
    else {
        alert('Enter a valid input.');
        marks.focus();
    }

}

