
document.getElementById('formulario-contacto').addEventListener('submit', function(event) {
    event.preventDefault();

    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var asunto = document.getElementById('asunto').value;
    var mensaje = document.getElementById('mensaje').value;

    var data = {
        nombre: nombre,
        email: email,
        asunto: asunto,
        mensaje: mensaje
    };

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'enviar_formulario.php', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            alert('¡Gracias por tu consulta! Nos pondremos en contacto contigo pronto.');
        } else {
            alert('Ha ocurrido un error al enviar la consulta. Por favor, inténtalo de nuevo.');
        }
    };

    xhr.send(JSON.stringify(data));
});