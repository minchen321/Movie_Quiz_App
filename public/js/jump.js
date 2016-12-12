function jump() {
    var selected = document.getElementsByName('question_2');

    for(var i=0; i<selected.length; i++) {
    var value = selected[i].value;
      if (selected[i].checked) {
          if (value === 'C') {
          window.location.href = '/pass';
          } else {
          window.location.href = '/result_2';
          }
      }
    }

    var selected_1 = document.getElementsByName('question_1');

    for(var i=0; i<selected_1.length; i++) {
    var value = selected_1[i].value;
      if (selected_1[i].checked) {
          if (value === 'A') {
          window.location.href = '/pass_transition';
          } else {
          window.location.href = '/result';
          }
      }
    }
}
