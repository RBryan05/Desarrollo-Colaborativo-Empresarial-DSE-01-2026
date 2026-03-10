# Sprint 3

## Qué se hizo
Durante el sprint se desarrollaron las siguientes tareas:

- Implementación de la funcionalidad para eliminar productos.
- Creación del botón **Eliminar** en cada producto.
- Implementación de una confirmación antes de eliminar el producto (confirmación opcional).
- Actualización del **array de productos** después de eliminar un elemento.
- Re-renderización de la lista de productos para reflejar los cambios en la interfaz.
- Trabajo mediante **ramas** para el desarrollo de la funcionalidad.
- Creación y revisión de **Pull Request (PR)**.
- Validación del correcto funcionamiento del **Delete** dentro del sistema.

## Quién hizo qué

| Integrante | Actividad |
|---|---|
| Bryan Alexis Rauda Gómez | Definición de requerimientos del Sprint 3 y validación final de la funcionalidad de eliminación |
| Bryan Edenilson Quintanilla Alberto | Implementación del botón eliminar en la interfaz |
| Anderson Juvini Cisneros Quijada | Desarrollo de la confirmación antes de eliminar un producto |
| Juan Leonidas Villafranco Sibrian | Pruebas de funcionamiento del proceso de eliminación |
| Rocio Marbelly Moreno Erazo | Actualización del array de productos después de eliminar |
| Josue Aaron Castillo Valdiviezo | Administración de ramas, coordinación del equipo y cierre de Pull Request |

## Problemas encontrados

- Dificultad inicial para actualizar correctamente el **array de productos** después de eliminar un elemento.
- Problemas al **re-renderizar la lista** para que reflejara inmediatamente los cambios.
- Posibles conflictos al trabajar múltiples integrantes en la misma funcionalidad mediante ramas.

## Solución

- Se revisó la lógica de manipulación del **array de productos** para asegurar que el elemento eliminado no permaneciera en memoria.
- Se ajustó la función de **renderizado** para que se ejecutara nuevamente después de cada eliminación.
- Se siguieron buenas prácticas de **control de versiones**, utilizando ramas y Pull Request para revisar los cambios antes de integrarlos al proyecto principal.
