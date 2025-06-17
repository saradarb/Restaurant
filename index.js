function sendMail(event) {
    event.preventDefault(); // ⛔ Prevent form reload
  
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      date: document.getElementById("date").value,
      time: document.getElementById("time").value,
      guests: document.getElementById("guests").value,
      requests: document.getElementById("requests").value,
    };
  
    const serviceID = "service_r5rj5zm";
    const templateID = "template_2coqgph";
  
    emailjs.send(serviceID, templateID, params)
      .then(res => {
        // Clear fields
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("date").value = "";
        document.getElementById("time").value = "";
        document.getElementById("guests").value = "";
        document.getElementById("requests").value = "";
  
        alert("Thank you for making a reservation with us");
      })
      .catch((err) => console.log(err));
  }
  