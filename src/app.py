personas = []

def mostrar_menu():
    while True:
        print("\nMenú:")
        print("1. Ingresar nueva persona")
        print("2. Mostrar todos los datos")
        print("3. Filtrar por DNI")
        print("4. Salir")
        opcion = input("Seleccione una opción: ")
        
        if opcion == "1":
            ingresar_persona()
        elif opcion == "2":
            mostrar_datos()
        elif opcion == "3":
            filtrar_por_dni()
        elif opcion == "4":
            break

def ingresar_persona():
    nombre = input("Nombre: ")
    apellido = input("Apellido: ")
    dni = input("DNI: ")
    telefonos = input("Teléfonos (separados por comas): ").split(',')
    hijos = input("Hijos (separados por comas): ").split(',')
    personas.append([nombre, apellido, dni, telefonos, hijos])

def mostrar_datos():
    for p in personas:
        print(f"{p[0]} {p[1]} - DNI: {p[2]}")
        print(f"   Teléfonos: {', '.join(p[3])}")
        print(f"   Hijos: {', '.join(p[4])}")

def filtrar_por_dni():
    dni = input("DNI a buscar: ")
    for p in personas:
        if p[2] == dni:
            print(f"{p[0]} {p[1]} - DNI: {p[2]}")
            print(f"   Teléfonos: {', '.join(p[3])}")
            print(f"   Hijos: {', '.join(p[4])}")
            return
    print("DNI no encontrado.")

mostrar_menu()
