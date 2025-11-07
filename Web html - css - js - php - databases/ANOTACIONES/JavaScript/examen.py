import uuid

class Libro:

  def __init__(self, titulo, autor, categoria, paginas, anio):
    self.titulo = titulo
    self.autor = autor
    self.categoria = categoria
    self.paginas = paginas
    self.anio = anio
    self.id = uuid.uuid4()

  def __str__(self):
    return f"Titulo: '{self.titulo}'\nAutor: '{self.autor}'\nCategoria: '{self.categoria}'\nPaginas: '{self.paginas}' \nAño: '{self.anio}' \nId: '{self.id}'\n"


class Biblioteca :
  def __init__(self, nombre):
    self.nombre = nombre
    self.catalogo = []
    self.lista_fav = {}

  def agregar_libro(self, libro):
    for e in self.catalogo:
      if libro.id == e.id:
        return f"El libro '{e.titulo}' existe"
      
    self.catalogo.append(libro)
    return f"El libro '{libro.titulo}' fue agregado exitosamente"


  def mostrar_catalogo(self):
    if not self.catalogo:
      return "Catalogo está vacío"
    for libro in self.catalogo:
      print(libro)

  def crear_favoritos(self,catalogo,*ids):
    if catalogo not in self.lista_fav:
      self.lista_fav[catalogo] = []

    for id in ids:
      libro_fav = [libro for libro in self.catalogo if libro.id == id]
      self.lista_fav[catalogo].extend(libro_fav)

  def ver_favoritos(self, nombre_catalogo):
    favoritos = self.lista_fav.get(nombre_catalogo, "Nombre de Catalogo incorrecto")
    print("Esta es la lista de favoritos")
    # print(self.lista_fav)
    for favorito in favoritos:
      print(favorito)

def mostrar_menu():
    print("\n*** Menú Principal ***")
    print("1. Agregar un libro")
    print("2. Mostrar el catálogo")
    print("3. Eliminar un libro")
    print("4. Ver favoritos")
    print("5. Salir")


def menu():
    libreria = Biblioteca("Magic Books")

    while True:
        mostrar_menu()
        opcion = input("Selecciona una opción: ")

        if opcion == "1":
            titulo = input("Ingrese el título del libro: ")
            autor = input("Ingrese el autor del libro: ")
            categoria = input("Ingrese la categoría del libro: ")
            paginas = int(input("Ingrese el número de páginas del libro: "))
            anio = int(input("Ingrese el año del libro: "))

            libro = Libro(titulo, autor, categoria, paginas, anio)
            print(libreria.agregar_libro(libro))

        elif opcion == "2":
            print("\nCatálogo:")
            print(libreria.mostrar_catalogo())

        elif opcion == "3":
            libro_id = input("Ingrese el ID del libro a eliminar: ")
            try:
                libro_id = uuid.UUID(libro_id) 
                print(libreria.eliminar_libro(libro_id))
            except ValueError:
                print("ID no válido. Intente de nuevo.")

        elif opcion == "4":
            catalogo_nombre = input("Ingrese el nombre del catálogo de favoritos: ")
            libreria.ver_favoritos(catalogo_nombre)

        elif opcion == "5":
            print("Gracias por usar el sistema de gestión de libros. ¡Hasta luego!")
            break

        else:
            print("Opción inválida. Por favor, selecciona una opción válida.")


if __name__ == "__menu__":
    menu()
