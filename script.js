/* Add any JavaScript you need to this file. */
window.onload = function(){
    var index = document.querySelector('#mainNav');
}

window.onload = function() {

    document.querySelector('#radioOptions').addEventListener('click', () => {

    if (document.querySelector('#radioOrder').checked) {
      document.querySelector('#OrderNumberBox').removeAttribute('hidden');

    } else {
      document.querySelector('#OrderNumberBox').setAttribute('hidden', 'true');
    }
  });
  
  let form = document.querySelector('#contact-form');
  form.onsubmit = function(event) {
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      event.preventDefault();
      return false;
    }
    return true;
  };
};
