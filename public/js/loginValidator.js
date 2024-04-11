console.log("register validator success!");
const exRegEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
const exRegPass =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_=+[\]{}|;:',.<>?]).{8,20}$/;
const $ = (id) => document.getElementById(id);

const checkEmail = async (email) => {
  try {
    const response = await fetch(
      "http://localhost:3000/apis/users/check-email?email=" + email
    );
    const result = await response.json();

    return result.isRegisted;
  } catch (error) {
    console.error;
  }
};

$("email").addEventListener("focus", function () {
  this.classList.remove("is-invalid");
});
$("password").addEventListener("focus", function () {
  this.classList.remove("is-invalid");
});
$("email").addEventListener("blur", async function () {});
$("button-eye").addEventListener("click", function (e) {
  this.classList.toggle("fa-eye");
  this.classList.toggle("fa-eye-slash");
  $("password").type = $("password").type === "password" ? "text" : "password";
});

$("password2").addEventListener("keyup", function () {
  switch (true) {
    case this.value !== $("password").value:
      this.classList.add("is-invalid");
      $("error-password2").innerHTML = "Las contraseñas no coinciden";
      break;
    default:
      this.classList.remove("is-invalid");
      $("error-password2").innerHTML = null;
      break;
  }
});

$("form-register").addEventListener("submit", function (e) {
  e.preventDefault();

  let error = false;

  for (let i = 0; i < this.elements.length - 2; i++) {
    if (!this.elements[i].value) {
      error = true;
      this.elements[i].classList.add("is-invalid");
    }
  }

  if (!$("remember").checked) {
    error = true;
    $("error-remember").innerHTML = "Debes aceptar los terminos y condiciones";
  }

  !error ? this.submit() : ($("msg-error").hidden = false);
});
