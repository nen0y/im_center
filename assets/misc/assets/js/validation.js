
$(document).ready(function() {

  //validation
  var form = document.querySelector('.registration_block .form form');
  var password = form.querySelector('input[name="pas"]');
  var passwordConfirmation = form.querySelector('input[name="conf"]');
  var fields = form.querySelectorAll('.required');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var errors = form.querySelectorAll('.help-text');

    for (var i = 0; i < errors.length; i++) {
      errors[i].remove();
      fields[i].className = '';
    }
    for (var i = 0; i < fields.length; i++) {

      if (!fields[i].value) {
        fields[i].className='';
        var error = document.createElement('span');
        error.className='help-text';
        error.innerHTML = 'Заповніть поле';
        fields[i].className = 'wrong';
        form[i].parentElement.insertBefore(error, fields[i]);
      }
    }

    if (password.value !== passwordConfirmation.value) {
      console.log('not equals')
      var error = document.createElement('span');
      error.className = 'help-text';
      error.innerHTML = 'Паролі не співпадають';
      password.className = 'wrong';
      passwordConfirmation.className = 'wrong';
      password.parentElement.insertBefore(error, password);
    }
  })

});