function RegHuesped() {
    const nombre = document.getElementById('nombre').value;
    const celular = document.getElementById('celular').value;
    const cedula = document.getElementById('cedula').value;
    const habitacion = document.getElementById('habitacion').value;
    
    let tipoHabitacionString = "";
    let precioHabitacion = 0;
  
    // precio de las habitaciones(corregir precios )
    const precioSencilla = 100;
    const precioDoble = 150;
    const precioFamiliar = 200;
    const precioDesayuno = 10;
  
    switch (tipoHabitacion) {
        case 1:
            tipoHabitacionString = "Habitación Sencilla";
            precioHabitacion = precioSencilla;
            break;
        case 2:
            tipoHabitacionString = "Habitación Doble";
            precioHabitacion = precioDoble;
            break;
        case 3:
            tipoHabitacionString = "Habitación Familiar";
            precioHabitacion = precioFamiliar;
            break;
        default:
            console.log("Opción inválida. Registro fallido.");
            return;
    }
  
    const maxPersonas = tipoHabitacion === 2 ? 2 : 4;
    const numPersonas = parseInt(document.getElementById("numPersonas").value);
  
    if (numPersonas > maxPersonas) {
        console.log(`El número de personas excede el límite para este tipo de habitación (máx. ${maxPersonas}).`);
        return;
    }

    const desayuno = document.getElementById("desayuno").value === "1" ? "Sí" : "No";
    let costoReserva = precioHabitacion;

    if (desayuno === "Sí") {
        costoReserva += precioDesayuno * numPersonas;
    }
    const reserva = {
        nombre: nombre,
        celular: celular,
        cedula: cedula,
        habitacion: habitacion,
        numPersonas: numPersonas,
        desayuno: desayuno
    };

    localStorage.setItem('reserva', JSON.stringify(reserva));
    console.log("Reserva registrada con éxito. Costo total: " + costoReserva + " COP");

    // Redireccionar a la página mostrar.html
    window.location.href = 'mostrar.html';
}


//En JavaScript, un objeto es una colección de propiedades, donde cada propiedad tiene un nombre (clave) y un valor asociado. Los objetos en JavaScript se definen utilizando llaves  {}  y pueden contener tanto propiedades como métodos (funciones). 