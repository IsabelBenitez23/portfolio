document.getElementById('viewAlerta').addEventListener('click', function() {
    var names = document.getElementById('names').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementsByName('mensaje')[0].value;
  
    if (names.trim() === '' || email.trim() === '' || mensaje.trim() === '') {
      alert('(*) Todos los campos son obligatorios');
    } else if (!isValidEmail(email)) {
      alert('¡Ingrese un correo válido!');
    } else {
      alert('Mensaje enviado, ¡Gracias por contactarme!');
    }
  });

  function isValidEmail(email) {
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  }

  


  