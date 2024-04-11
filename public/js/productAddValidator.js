console.log("product validator success!");

const $ = (id) => document.getElementById(id);
const omitFields = [14, 13, 5];
$("");

$("form-add-product").addEventListener("submit", function (e) {
  e.preventDefault();

  console.log(this.elements);

  let error = false;

  for (let i = 0; i < this.elements.length - 2; i++) {
    if (!this.elements[i].value && !omitFields.includes(i)) {
      error = true;
      this.elements[i].classList.add("is-invalid");
    }
  }

  !error ? this.submit() : ($("msg-error").hidden = false);
});
