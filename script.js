(function () {
  emailjs.init("1xwErdOOlU7ACB7ox");
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm("service_1qihv2c", "template_ql06akr", this).then(
      function () {
        alert("Mensaje enviado con éxito!");
        document.getElementById("contact-form").reset();
      },
      function (error) {
        alert("Error al enviar el mensaje: " + JSON.stringify(error));
      }
    );
  });

  document.getElementById("hamburger").addEventListener("click", function() {
    const navList = document.querySelector(".nav-list");
    navList.classList.toggle("active");
  });
