let totalMarks = window.sessionStorage.getItem('totalM');

window.sessionStorage.setItem('Grade', "Grade");

if (totalMarks/50 >= 8) {
    window.sessionStorage.setItem('grade', "A");
}
else if (totalMarks/50 >= 7) {
    window.sessionStorage.setItem('grade', "B");
}
else if (totalMarks/50 > 6) {
    window.sessionStorage.setItem('grade', "C");
}
else if (totalMarks/50 > 5) {
    window.sessionStorage.setItem('grade', "D");
}
else {
    window.sessionStorage.setItem('grade', "Fail");
}