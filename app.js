// ── Array de productos ──────────────────────────────────────────
let productos = [
  {
    id: 1,
    nombre: "Laptop Dell",
    descripcion: "Intel i7, 16GB RAM",
    precio: 1200,
    stock: 5,
    disponible: true,
  },
  {
    id: 2,
    nombre: "Mouse Logitech",
    descripcion: "Inalámbrico ergonómico",
    precio: 45,
    stock: 15,
    disponible: true,
  },
  {
    id: 3,
    nombre: "Teclado Mecánico",
    descripcion: "Switches azules RGB",
    precio: 90,
    stock: 0,
    disponible: false,
  },
];

let nextId = 4;

// ── CREAR / ACTUALIZAR ──────────────────────────────────────────
function guardar() {
  const nombre = document.getElementById("inp-nombre").value.trim();
  const descripcion = document.getElementById("inp-descripcion").value.trim();
  const precio = parseFloat(document.getElementById("inp-precio").value);
  const stock = parseInt(document.getElementById("inp-stock").value);
  const disponible = document.getElementById("inp-disponible").checked;

  productos.push({
    id: nextId++,
    nombre,
    descripcion,
    precio,
    stock,
    disponible,
  });

  renderTabla();
}

// ── LEER / RENDERIZAR TABLA ─────────────────────────────────────
function renderTabla() {
  const container = document.getElementById("tabla-container");
  document.getElementById("total").textContent = productos.length;

  if (productos.length === 0) {
    container.innerHTML = `<p class="sin-datos">No hay productos. ¡Agrega el primero!</p>`;
    return;
  }

  let filas = productos
    .map(
      (p) => `
    <tr>
      <td>${p.id}</td>
      <td>${p.nombre}</td>
      <td>${p.descripcion}</td>
      <td>$${p.precio.toFixed(2)}</td>
      <td>${p.stock}</td>
      <td class="${p.disponible ? "estado-si" : "estado-no"}">${p.disponible ? "Sí" : "No"}</td>
      <td>
        <button class="btn-editar"  onclick="editar(${p.id})">Editar</button>
        <button class="btn-eliminar" onclick="eliminar(${p.id})">Eliminar</button>
      </td>
    </tr>
  `,
    )
    .join("");

  container.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>ID</th><th>Nombre</th><th>Descripción</th>
          <th>Precio</th><th>Stock</th><th>Disponible</th><th>Acciones</th>
        </tr>
      </thead>
      <tbody>${filas}</tbody>
    </table>`;
}

renderTabla();
