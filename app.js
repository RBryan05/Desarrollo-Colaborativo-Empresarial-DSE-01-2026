// ── Array de productos ──────────────────────────────────────────
let productos = [
  { id: 1, nombre: "Laptop Dell", descripcion: "Intel i7, 16GB RAM", precio: 1200, stock: 5, disponible: true },
  { id: 2, nombre: "Mouse Logitech", descripcion: "Inalámbrico ergonómico", precio: 45, stock: 15, disponible: true },
  { id: 3, nombre: "Teclado Mecánico", descripcion: "Switches azules RGB", precio: 90, stock: 0, disponible: false },
];

let nextId = 4;

// ── CREAR / ACTUALIZAR ──────────────────────────────────────────
function guardar() {
  const nombre      = document.getElementById("inp-nombre").value.trim();
  const descripcion = document.getElementById("inp-descripcion").value.trim();
  const precio      = parseFloat(document.getElementById("inp-precio").value);
  const stock       = parseInt(document.getElementById("inp-stock").value);
  const disponible  = document.getElementById("inp-disponible").checked;

  productos.push({ id: nextId++, nombre, descripcion, precio, stock, disponible });

}