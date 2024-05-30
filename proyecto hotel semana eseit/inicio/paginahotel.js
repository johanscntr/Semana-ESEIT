const formulario = document.getElementById('registroForm');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const ID = document.getElementById('id').value;
    const nombre = document.getElementById('nombre').value;
    const celular = document.getElementById('telefono').value;
    const tipoHabitacion = document.getElementById('habitacion').value;
    const numPersonas = document.getElementById('personas').value;
    const desayuno = document.getElementById('desayuno').value;
    
    // Aquí puedes integrar el resto del código JavaScript para procesar la información del huésped y registrarlo en tu sistema
    
    console.log("ID del Huésped: " + ID);
    console.log("Nombre del Huésped: " + nombre);
    console.log("Número de Teléfono: " + celular);
    console.log("Tipo de Habitación: " + tipoHabitacion);
    console.log("Número de Personas: " + numPersonas);
    console.log("Incluir desayuno: " + desayuno);
    
    // Puedes agregar más lógica aquí para calcular el costo de la reserva y almacenar la información del huésped
    
    alert("Huésped registrado con éxito. Revisa la consola para ver los detalles.");
});