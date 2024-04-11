console.log("register validator success!");

const $ = (id) => document.getElementById(id);

//precio
$("price").addEventListener("blur", function () {
  switch (true) {
    case !this.value:
      this.classList.add("is-invalid");
      $("error-price").innerHTML = "La cantidad es obligatorio";
      break;
    default:
      this.classList.remove("is-invalid");
      $("error-price").innerHTML = null;
      break;
  }
});

//nombre
$("name").addEventListener("blur", function () {
  switch (true) {
    case !this.value:
      this.classList.add("is-invalid");
      $("error-name").innerHTML = "La cantidad es obligatorio";
      break;
    default:
      this.classList.remove("is-invalid");
      $("error-name").innerHTML = null;
      break;
  }
});

//cantidad
$("quantityInStock").addEventListener("blur", function () {
  switch (true) {
    case !this.value:
      this.classList.add("is-invalid");
      $("error-quantityInStock").innerHTML = "La cantidad es obligatorio";
      break;
    default:
      this.classList.remove("is-invalid");
      $("error-quantityInStock").innerHTML = null;
      break;
  }
});

//marca
$("brand").addEventListener("blur", function () {
  switch (true) {
    case !this.value:
      this.classList.add("is-invalid");
      $("error-brand").innerHTML = "La marca es obligatoria";
      break;
    default:
      this.classList.remove("is-invalid");
      $("error-brand").innerHTML = null;
      break;
  }
});

//tamaño
$("tamanio").addEventListener("blur", function () {
  switch (true) {
    case !this.value:
      this.classList.add("is-invalid");
      $("error-tamanio").innerHTML = "El tamaño es obligatorio";
      break;
    default:
      this.classList.remove("is-invalid");
      $("error-tamanio").innerHTML = null;
      break;
  }
});

//color
$("color").addEventListener("blur", function () {
  switch (true) {
    case !this.value:
      this.classList.add("is-invalid");
      $("error-color").innerHTML = "El color es obligatorio";
      break;
    default:
      this.classList.remove("is-invalid");
      $("error-color").innerHTML = null;
      break;
  }
});

//descuento
$("discount").addEventListener("blur", function () {
  switch (true) {
    case !this.value:
      this.classList.add("is-invalid");
      $("error-discount").innerHTML = "El tamaño es obligatorio";
      break;
    default:
      this.classList.remove("is-invalid");
      $("error-discount").innerHTML = null;
      break;
  }
});

//descripcion
$("description").addEventListener("blur", function () {
  switch (true) {
    case !this.value:
      this.classList.add("is-invalid");
      $("error-description").innerHTML = "La description es obligatorio";
      break;
    default:
      this.classList.remove("is-invalid");
      $("error-description").innerHTML = null;
      break;
  }
});

//Tipo
$("typeproductsId").addEventListener("blur", function () {
  switch (true) {
    case !this.value:
      this.classList.add("is-invalid");
      $("error-typeproductsId").innerHTML =
        "El tipo de producto es obligatorio";
      break;
    default:
      this.classList.remove("is-invalid");
      $("error-typeproductsId").innerHTML = null;
      break;
  }
});

//Categoria
$("categoryId").addEventListener("blur", function () {
  switch (true) {
    case !this.value:
      this.classList.add("is-invalid");
      $("error-categoryId").innerHTML =
        "La categoria de producto es obligatorio";
      break;
    default:
      this.classList.remove("is-invalid");
      $("error-categoryId").innerHTML = null;
      break;
  }
});

//material
$("materialsId").addEventListener("blur", function () {
  switch (true) {
    case !this.value:
      this.classList.add("is-invalid");
      $("error-materialsId").innerHTML =
        "El material de producto es obligatorio";
      break;
    default:
      this.classList.remove("is-invalid");
      $("error-materialsId").innerHTML = null;
      break;
  }
});

//Capacidad
$("compatibilitieId").addEventListener("blur", function () {
  switch (true) {
    case !this.value:
      this.classList.add("is-invalid");
      $("error-compatibilitieId").innerHTML =
        "La capacidad de producto es obligatorio";
      break;
    default:
      this.classList.remove("is-invalid");
      $("error-compatibilitieId").innerHTML = null;
      break;
  }
});
