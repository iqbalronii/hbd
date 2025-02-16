// login page scripts
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  validateForm();
});

function validateForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  //validasi username dan password, username dan password bisa diganti sesuai keinginan
  if (username === "lalabunga" && password === "apakek") {
    Swal.fire({
      icon: "success",
      title: "Cieee bisaaa!",
      text: "Cieee ada yang ultahhh niiiii,cewekuuuu!!",
      showConfirmButton: false,
      timer: 1500,
    }).then(function () {
      window.location.href = "birthday.html";
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Dihhhh!",
      text: "Bisa bisanya salah, Parahhhhhh!!!",
      confirmButtonText: "Coba lagi",
      confirmButtonColor: "#ff7675",
    });
  }
}