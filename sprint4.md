# Sprint 4

## Qué se hizo
Durante el sprint se desarrollaron las siguientes tareas:

- Implementación de la funcionalidad de **búsqueda y filtrado dinámico** de productos.
- Creación de un **campo de búsqueda** en la interfaz del sistema.
- Implementación del **filtrado por nombre** para mostrar únicamente los productos que coincidan con el texto ingresado.
- Actualización dinámica de la lista de productos **sin necesidad de recargar la página**.
- Re-renderización automática de los productos filtrados conforme el usuario escribe en el campo de búsqueda.
- Trabajo mediante **ramas** para el desarrollo de la funcionalidad.
- Creación y revisión de **Pull Request (PR)**.
- Validación del correcto funcionamiento del **filtro de productos** dentro del sistema.

## Quién hizo qué

| Integrante | Actividad |
|---|---|
| Bryan Alexis Rauda Gómez | Definición de requerimientos del Sprint 4 y validación final del sistema de filtrado |
| Bryan Edenilson Quintanilla Alberto | Implementación del campo de búsqueda en la interfaz |
| Anderson Juvini Cisneros Quijada | Desarrollo de la lógica para filtrar productos por nombre |
| Juan Leonidas Villafranco Sibrian | Pruebas del funcionamiento del filtrado dinámico |
| Rocio Marbelly Moreno Erazo | Implementación del renderizado dinámico de los resultados filtrados |
| Josue Aaron Castillo Valdiviezo | Administración de ramas, coordinación del equipo y cierre de Pull Request |

## Problemas encontrados

- Dificultad inicial para que el **filtro se actualizara en tiempo real** mientras el usuario escribía.
- Problemas para mantener sincronizada la **lista original de productos** con la lista filtrada.
- Posibles conflictos al trabajar múltiples integrantes en la misma funcionalidad mediante ramas.

## Solución

- Se implementó un **evento de escucha en el campo de búsqueda** para ejecutar el filtrado automáticamente al escribir.
- Se separó la **lista original de productos** de la lista filtrada para evitar pérdida de información.
- Se siguieron buenas prácticas de **control de versiones**, utilizando ramas y Pull Request para revisar los cambios antes de integrarlos al proyecto principal.
