// ── DATOS INICIALES ──
let categorias = ["Electrónica", "Periféricos", "Accesorios"];
let productos = [
  {
    id: 1,
    nombre: "Laptop Dell",
    descripcion: "Intel i7, 16GB RAM",
    precio: 1200,
    stock: 5,
    disponible: true,
    categoria: "Electrónica",
  },
  {
    id: 2,
    nombre: "Mouse Logitech",
    descripcion: "Inalámbrico",
    precio: 45,
    stock: 15,
    disponible: true,
    categoria: "Periféricos",
  },
];
let nextId = 3;
let editandoId = null;

// ── NAVEGACIÓN (SPA) ──
function mostrarSeccion(id) {
  document.getElementById("seccion-form").style.display =
    id === "seccion-form" ? "block" : "none";
  document.getElementById("seccion-tabla").style.display =
    id === "seccion-tabla" ? "block" : "none";

  document
    .getElementById("link-form")
    .classList.toggle("active", id === "seccion-form");
  document
    .getElementById("link-tabla")
    .classList.toggle("active", id === "seccion-tabla");

  if (id === "seccion-tabla") renderTabla();
}

// ── CRUD PRODUCTOS ──
function guardar() {
  const nombre = document.getElementById("inp-nombre").value.trim();
  const precio = parseFloat(document.getElementById("inp-precio").value);
  const stock = parseInt(document.getElementById("inp-stock").value);
  const categoria = document.getElementById("inp-categoria").value;
  const descripcion = document.getElementById("inp-descripcion").value;
  const disponible = document.getElementById("inp-disponible").checked;

  if (!nombre || isNaN(precio) || isNaN(stock)) {
    Swal.fire("Error", "Completa los campos obligatorios", "error");
    return;
  } else if (precio <= 0) {
    Swal.fire("Error", "El precio debe ser mayor que cero", "error");
    return;
  }

  if (editandoId !== null) {
    const idx = productos.findIndex((p) => p.id === editandoId);
    productos[idx] = {
      id: editandoId,
      nombre,
      descripcion,
      precio,
      stock,
      disponible,
      categoria,
    };
    editandoId = null;
    Swal.fire("¡Éxito!", "Producto actualizado", "success");
  } else {
    productos.push({
      id: nextId++,
      nombre,
      descripcion,
      precio,
      stock,
      disponible,
      categoria,
    });
    Swal.fire("¡Éxito!", "Producto agregado", "success");
  }

  limpiarFormulario();
  mostrarSeccion("seccion-tabla");
}

function editar(id) {
  const p = productos.find((p) => p.id === id);
  if (!p) return;

  editandoId = id;
  document.getElementById("inp-nombre").value = p.nombre;
  document.getElementById("inp-descripcion").value = p.descripcion;
  document.getElementById("inp-precio").value = p.precio;
  document.getElementById("inp-stock").value = p.stock;
  document.getElementById("inp-categoria").value = p.categoria;
  document.getElementById("inp-disponible").checked = p.disponible;

  document.getElementById("form-titulo").innerText = "Editar Producto";
  document.getElementById("form-icono").className = "bi bi-pencil-square";
  console.log(document.getElementById("form-icono"));
  document.getElementById("link-form").innerHTML =
    '<i class="bi bi-pencil-square"></i> Editar Producto'; // ← NUEVO
  document.getElementById("btn-cancelar").style.display = "inline-block";

  mostrarSeccion("seccion-form");
}

function eliminar(id) {
  Swal.fire({
    title: "¿Estás seguro?",
    text: "No podrás revertir esto",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#ef4444",
    confirmButtonText: "Sí, eliminar",
  }).then((result) => {
    if (result.isConfirmed) {
      productos = productos.filter((p) => p.id !== id);
      renderTabla();
      Swal.fire("Eliminado", "El producto ha sido borrado", "success");
    }
  });
}

// ── RENDERIZADO ──
function renderTabla() {
  const container = document.getElementById("tabla-container");
  const buscar = document.getElementById("filtro-buscar").value.toLowerCase();
  const fCat = document.getElementById("filtro-categoria").value;
  const fDisp = document.getElementById("filtro-disponible").value;

  const filtrados = productos.filter((p) => {
    const matchBusca = p.nombre.toLowerCase().includes(buscar);
    const matchCat = !fCat || p.categoria === fCat;
    const matchDisp = fDisp === "" || String(p.disponible) === fDisp;
    return matchBusca && matchCat && matchDisp;
  });

  document.getElementById("total").innerText = filtrados.length;

  let html = `<table><thead><tr><th>ID</th><th>Nombre</th><th>Categoría</th><th>Precio</th><th>Stock</th><th>Estado</th><th>Acciones</th></tr></thead><tbody>`;

  filtrados.forEach((p) => {
    html += `
      <tr>
        <td>#${p.id}</td>
        <td><strong>${p.nombre}</strong></td>
        <td><span class="cat-badge">${p.categoria || "Sin cat."}</span></td>
        <td>$${p.precio.toFixed(2)}</td>
        <td>${p.stock}</td>
        <td><span class="${p.disponible ? "estado-si" : "estado-no"}">${p.disponible ? "Disponible" : "Agotado"}</span></td>
        <td>
          <button style="background:var(--warning); color:#fff;" onclick="editar(${p.id})"><i class="bi bi-pencil-square"></i></button>
          <button style="background:var(--danger); color:#fff;" onclick="eliminar(${p.id})"><i class="bi bi-trash"></i></button>
        </td>
      </tr>`;
  });

  html += `</tbody></table>`;
  container.innerHTML =
    filtrados.length > 0
      ? html
      : '<p style="text-align:center; padding:20px;">No hay productos.</p>';
}

// ── CATEGORÍAS ──
function abrirModal() {
  document.getElementById("modal-cats").classList.add("open");
  renderCatLista();
}
function cerrarModal() {
  document.getElementById("modal-cats").classList.remove("open");
}

function renderCatLista() {
  const lista = document.getElementById("lista-categorias");

  if (categorias.length === 0) {
    lista.innerHTML =
      '<p class="cat-empty">No hay categorías. ¡Crea la primera!</p>';
    return;
  }

  lista.innerHTML = categorias
    .map((c, i) => {
      const count = productos.filter((p) => p.categoria === c).length;
      return `
      <div class="cat-item" id="cat-item-${i}">
        <span class="cat-item-name" id="cat-name-${i}">${c}</span>
        <span class="cat-count">${count} prod.</span>
        <div class="cat-actions">
          <button class="btn-ce edit" onclick="iniciarEditCat(${i})"><i class="bi bi-pencil-square"></i></button>
          <button class="btn-ce del"  onclick="eliminarCategoria('${c}')"><i class="bi bi-trash3"></i></button>
        </div>
      </div>`;
    })
    .join("");
}

function agregarCategoria() {
  const nombre = document.getElementById("inp-nueva-cat").value.trim();
  if (nombre && !categorias.includes(nombre)) {
    categorias.push(nombre);
    document.getElementById("inp-nueva-cat").value = "";
    renderCatLista();
    sincronizarSelects();
  }
}

function iniciarEditCat(i) {
  const item = document.getElementById(`cat-item-${i}`);
  const nombre = categorias[i];

  item.innerHTML = `
    <div class="cat-edit-row">
      <input type="text" id="cat-edit-inp-${i}" value="${nombre}"
             onkeydown="if(event.key==='Enter') guardarEditCat(${i}); if(event.key==='Escape') renderCatLista();">
    </div>
    <div class="cat-actions">
      <button class="btn-ce save"   onclick="guardarEditCat(${i})"><i class="bi bi-check2"></i></button>
      <button class="btn-ce cancel" onclick="renderCatLista()"><i class="bi bi-x-lg"></i></button>
    </div>`;

  document.getElementById(`cat-edit-inp-${i}`).focus();
}

function guardarEditCat(i) {
  const inp = document.getElementById(`cat-edit-inp-${i}`);
  const nuevo = inp.value.trim();
  const anterior = categorias[i];

  if (!nuevo) {
    Swal.fire({
      icon: "warning",
      title: "Campo vacío",
      text: "El nombre no puede estar vacío.",
      confirmButtonColor: "#4f46e5",
    });
    return;
  }

  const duplicado = categorias.some(
    (c, idx) => idx !== i && c.toLowerCase() === nuevo.toLowerCase(),
  );
  if (duplicado) {
    Swal.fire({
      icon: "info",
      title: "Ya existe",
      text: `"${nuevo}" ya está registrada.`,
      confirmButtonColor: "#4f46e5",
    });
    return;
  }

  productos.forEach((p) => {
    if (p.categoria === anterior) p.categoria = nuevo;
  });
  categorias[i] = nuevo;

  renderCatLista();
  sincronizarSelects();
  renderTabla();

  Swal.fire({
    icon: "success",
    title: "Actualizada",
    text: `Renombrada a "${nuevo}".`,
    timer: 1400,
    showConfirmButton: false,
  });
}

// ── ELIMINAR CATEGORÍA (añadida) ──
function eliminarCategoria(nombre) {
  const count = productos.filter((p) => p.categoria === nombre).length;
  const aviso =
    count > 0
      ? `<br><small style="color:#ef4444;">⚠️ ${count} producto(s) quedarán sin categoría.</small>`
      : "";

  Swal.fire({
    title: "¿Eliminar categoría?",
    html: `<b>${nombre}</b>${aviso}`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#ef4444",
    cancelButtonColor: "#94a3b8",
    confirmButtonText: "Sí, eliminar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (!result.isConfirmed) return;
    productos.forEach((p) => {
      if (p.categoria === nombre) p.categoria = "";
    });
    categorias = categorias.filter((c) => c !== nombre);
    renderCatLista();
    sincronizarSelects();
    renderTabla();
    Swal.fire({
      icon: "success",
      title: "Eliminada",
      timer: 1400,
      showConfirmButton: false,
    });
  });
}

function sincronizarSelects() {
  const selects = [
    document.getElementById("inp-categoria"),
    document.getElementById("filtro-categoria"),
  ];
  selects.forEach((sel, i) => {
    const placeholder =
      i === 0
        ? '<option value="">— Seleccionar —</option>'
        : '<option value="">Todas las categorías</option>';
    sel.innerHTML =
      placeholder +
      categorias.map((c) => `<option value="${c}">${c}</option>`).join("");
  });
}

function limpiarFormulario() {
  document.getElementById("inp-nombre").value = "";
  document.getElementById("inp-precio").value = "";
  document.getElementById("inp-stock").value = "";
  document.getElementById("inp-descripcion").value = "";
  document.getElementById("form-titulo").innerText = "Agregar Producto";
  document.getElementById("link-form").innerHTML =
    '<i class="bi bi-plus-square"></i> Nuevo Producto'; // ← NUEVO
  document.getElementById("btn-cancelar").style.display = "none";
  document.getElementById("form-icono").className = "bi bi-plus-circle";
}

function cancelar() {
  limpiarFormulario();
  editandoId = null;
  mostrarSeccion("seccion-tabla");
}

// INICIO
sincronizarSelects();
renderTabla();