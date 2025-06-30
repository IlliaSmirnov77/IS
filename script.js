
// deployment ID
// AKfycbyzKXN9TywFSRnRvL-e0ppbOcISU_O3rnpvOr0QckkCPV-xonDRoIkODJxsv7uMKlX26w

const scriptURL = 'https://script.google.com/macros/s/AKfycbyzKXN9TywFSRnRvL-e0ppbOcISU_O3rnpvOr0QckkCPV-xonDRoIkODJxsv7uMKlX26w/exec';

const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById('msg');

form.addEventListener('submit', e => {
  e.preventDefault();

  msg.textContent = "Sending...";

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      msg.textContent = "Message sent successfully";
      setTimeout(() => {
        msg.textContent = "";
      }, 3000);
      form.reset();
    })
    .catch(error => {
      msg.textContent = "Something went wrong!";
      setTimeout(() => {
        msg.textContent = "";
      }, 3000);
      form.reset();
    });
});