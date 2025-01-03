
  function presionarBoton() {
    // capturar los valores de los inputs
    let nombre = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let mensaje = document.getElementById('message').value;
    // enviar los valores en un objeto a la consola
    

    if(nombre === '' || email === '' || mensaje === '') {
      alert('Por favor, complete todos los campos');
      return;
    }

    // mostrar un mensaje de alerta
    alert('Gracias por enviar tu mensaje, revisa la consola por favor');
    console.log({nombre, email, mensaje});
    // limpiar los inputs
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  }

  function scrollToForm() {
    let formElement = document.getElementById('form');
    if (formElement) { // Check if the element exists
        formElement.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error("Form element with ID 'form' not found.");
    }
}