function sueldoTrabajador() {
  let sueldo = 1501;
  let porcentaje;

  if (sueldo >= 0 && sueldo <= 1000) {
    porcentaje = 0.15;
    sueldo = sueldo + (sueldo * porcentaje);

    return sueldo;
  } else if (sueldo > 1000 && sueldo <= 1200) {
    porcentaje = 0.12;
    sueldo = sueldo + (sueldo * porcentaje);

    return sueldo;
  } else if (sueldo > 1200 && sueldo <= 1400) {
    porcentaje = 0.1;
    sueldo = sueldo + (sueldo * porcentaje);

    return sueldo;
  } else if (sueldo > 1400 && sueldo <= 1500) {
    porcentaje = 0.08;
    sueldo = sueldo + (sueldo * porcentaje);

    return sueldo;
  } else if (sueldo > 1500) {
    porcentaje = 0.05;
    sueldo = sueldo + (sueldo * porcentaje);

    return sueldo;
  } else {
    console.log('Error! Sueldo no valido');

    return;
  }
}

console.log(sueldoTrabajador());
