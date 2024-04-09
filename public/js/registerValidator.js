console.log("register validator success!");
const exRegEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

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

$("name").addEventListener("focus", function () {
  this.classList.remove("is-invalid");
});
$("surname").addEventListener("focus", function () {
  this.classList.remove("is-invalid");
});
$("email").addEventListener("focus", function () {
  this.classList.remove("is-invalid");
});
$("password").addEventListener("focus", function () {
  this.classList.remove("is-invalid");
});
$("password2").addEventListener("focus", function () {
  this.classList.remove("is-invalid");
});

$("name").addEventListener("blur", function () {
  switch (true) {
    case !this.value:
      this.classList.add("is-invalid");
      $("error-name").innerHTML = "El nombre es obligatorio";
      break;
    case this.value.length < 2:
      this.classList.add("is-invalid");
      $("error-name").innerHTML = "Minimo dos caracteres";
      break;
    default:
      this.classList.remove("is-invalid");
      $("error-name").innerHTML = null;
      break;
  }
});
$("surname").addEventListener("blur", function () {
  switch (true) {
    case !this.value:
      this.classList.add("is-invalid");
      $("error-surname").innerHTML = "El apellido es obligatorio";
      break;
    case this.value.length < 2:
      this.classList.add("is-invalid");
      $("error-surname").innerHTML = "Minimo dos caracteres";
      break;
    default:
      this.classList.remove("is-invalid");
      $("error-surname").innerHTML = null;
      break;
  }
});
$("email").addEventListener("blur", async function () {
  switch (true) {
    case !this.value:
      this.classList.add("is-invalid");
      $("error-email").innerHTML = "El email es obligatorio";
      break;
    case !exRegEmail.test(this.value):
      this.classList.add("is-invalid");
      $("error-email").innerHTML = "Formato de email invalido";
      break;
    case await checkEmail(this.value): {
      this.classList.add("is-invalid");
      $("error-email").innerHTML = "El email ya se encuentra registrado";
      break;
    }
    default:
      this.classList.remove("is-invalid");
      $("error-email").innerHTML = null;
      break;
  }
});
$("password").addEventListener("blur", function () {
  this.classList.remove("is-invalid");
});
$("password2").addEventListener("blur", function () {
  this.classList.remove("is-invalid");
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

  !error ? this.submit() : ($("msg-error").hidden = false);
});
