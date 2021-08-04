

// let's place the selected streams subject inthe table

function streamSubjectsFunc(subject) {
  document.getElementById('subject1').innerHTML = subject[0];
  document.getElementById('subject2').innerHTML = subject[1];
  document.getElementById('subject3').innerHTML = subject[2];
  document.getElementById('subject4').innerHTML = subject[3];
  document.getElementById('subject5').innerHTML = subject[4];
}

function streamSubjectsMarks(subject) {
  // storing subject names
  window.sessionStorage.setItem('subject1', subject[0]);
  window.sessionStorage.setItem('subject2', subject[1]);
  window.sessionStorage.setItem('subject3', subject[2]);
  window.sessionStorage.setItem('subject4', subject[3]);
  window.sessionStorage.setItem('subject5', subject[4]);

  alert(document.getElementById('marks1').value);

  // storing subject marks
  window.sessionStorage.setItem('marks1', document.getElementById('marks1').value);
  window.sessionStorage.setItem('marks2', document.getElementById('marks2').value);
  window.sessionStorage.setItem('marks3', document.getElementById('marks3').value);
  window.sessionStorage.setItem('marks4', document.getElementById('marks4').value);
  window.sessionStorage.setItem('marks5', document.getElementById('marks5').value);
}

function onStreamSelection() {
  let username = window.sessionStorage.getItem('nameId');
  let streams = window.sessionStorage.getItem('streamId');

  // window.sessionStorage.setItem('nameId', username);
  // window.sessionStorage.setItem('streamId', streams);

  // setting value for name and stream in datasheet page

  document.getElementById('usernameId').value = window.sessionStorage.getItem('nameId');
  document.getElementById('streamId').value = window.sessionStorage.getItem('streamId');
  switch (streams) {
    case 'Computer':
      streamSubjectsFunc(streamSubjects.Computer);
      break;
    case 'IT':
      streamSubjectsFunc(streamSubjects.IT);
      break;
    case 'Electronics':
      streamSubjectsFunc(streamSubjects.Electronics);
      break;
    case 'Electrical':
      streamSubjectsFunc(streamSubjects.Electrical);
      break;
    case 'Mechanics':
      streamSubjectsFunc(streamSubjects.Mechanics);
  };
}

function onLoadStream() {
  let streams = window.sessionStorage.getItem('streamId');


  //console.log(document.getElementById('usernameId').value);

  // we will store subjects locally here

  let streamSubjects = {
    Computer: ['Java', 'DSA', 'Python', 'COA', 'Database'],
    IT: ['OS', 'CN', 'SE', 'Web Design', 'Cloud'],
    Electronics: ['Antenna System Design', 'Wireless Networks', 'Signal Processing', 'Digital Communication Techniques', 'VLSI Signal Processing'],
    Electrical: ['Electro-magnetism', 'Control systems', 'Circuit Analysis', 'Instrumentation', 'Transmission & Distribution'],
    Mechanics: ['Statics and dynamics', 'Engineering Physics', 'Mechanics', 'Thermodynamics', 'Workshop'],
  };

  switch (streams) {
    case 'Computer':

      streamSubjectsMarks(streamSubjects.Computer);
      break;
    case 'IT':

      streamSubjectsMarks(streamSubjects.IT);
      break;
    case 'Electronics':

      streamSubjectsMarks(streamSubjects.Electronics);
      break;
    case 'Electrical':

      streamSubjectsMarks(streamSubjects.Electrical);
      break;
    case 'Mechanics':

      streamSubjectsMarks(streamSubjects.Mechanics);
  };

  let totalMarks = window.sessionStorage.getItem('totalM');

  window.sessionStorage.setItem('Grade', "Grade");

  if (totalMarks / 50 >= 8) {
    window.sessionStorage.setItem('grade', "A");
  }
  else if (totalMarks / 50 >= 7) {
    window.sessionStorage.setItem('grade', "B");
  }
  else if (totalMarks / 50 > 6) {
    window.sessionStorage.setItem('grade', "C");
  }
  else if (totalMarks / 50 > 5) {
    window.sessionStorage.setItem('grade', "D");
  }
  else {
    window.sessionStorage.setItem('grade', "Fail");
  }

  //alert(window.sessionStorage.getItem('grade'));
}
//}