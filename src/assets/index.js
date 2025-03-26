import promptSync from 'prompt-sync';
const prompt = promptSync();

const personas = [];

const mostrarMenu = () => {
  while (true) {
    console.log("\nMenú:");
    console.log("1. Ingresar nueva persona");
    console.log("2. Mostrar todos los datos");
    console.log("3. Filtrar por DNI");
    console.log("4. Salir");
    const opcion = prompt("Seleccione una opción: ");

    if (opcion === "1") ingresarPersona();
    else if (opcion === "2") mostrarDatos();
    else if (opcion === "3") filtrarPorDNI();
    else if (opcion === "4") break;
    else console.log("Opción no válida.");
  }
};

const ingresarPersona = () => {
  const nombre = prompt("Nombre: ");
  const apellido = prompt("Apellido: ");
  const dni = prompt("DNI: ");
  const telefonos = prompt("Teléfonos (separados por comas): ").split(',').map(t => t.trim());
  const hijos = prompt("Hijos (separados por comas): ").split(',').map(h => h.trim());
  personas.push([nombre, apellido, dni, telefonos, hijos]);
};

const mostrarDatos = () => {
  personas.forEach(p => {
    console.log(`${p[0]} ${p[1]} : ${p[2]}`);

    console.log(` ${p[3].join(", ")}`);
    
    console.log(` ${p[4].join(", ")}`);
  });
};

const filtrarPorDNI = () => {
  const dni = prompt("DNI a buscar: ");
  const persona = personas.find(p => p[2] === dni);
  if (persona) {
    console.log(`${persona[0]} ${persona[1]} - DNI: ${persona[2]}`);
    console.log(`   Teléfonos: ${persona[3].join(", ")}`);
    console.log(`   Hijos: ${persona[4].join(", ")}`);
  } else {
    console.log("DNI no encontrado.");
  }
};

mostrarMenu();
