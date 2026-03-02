// ── Categorías ───────────────────────────────────────────────────
let categorias = ["Electrónica", "Periféricos", "Accesorios", "Software", "Muebles"];

// ── Productos ────────────────────────────────────────────────────
let productos = [
  { id: 1, nombre: "Laptop Dell",     descripcion: "Intel i7, 16GB RAM",    precio: 1200, stock: 5,  disponible: true,  categoria: "Electrónica" },
  { id: 2, nombre: "Mouse Logitech",  descripcion: "Inalámbrico ergonómico", precio: 45,   stock: 15, disponible: true,  categoria: "Periféricos" },
  { id: 3, nombre: "Teclado Mecánico",descripcion: "Switches azules RGB",    precio: 90,   stock: 0,  disponible: false, categoria: "Periféricos" },
];

let nextId    = 4;
let editandoId = null;

// ════════════════════════════════════════════════════════════════
//  MODAL CATEGORÍAS
// ════════════════════════════════════════════════════════════════
function abrirModal() {
  renderCatLista();
  document.getElementById("modal-cats").classList.add("open");
  setTimeout(() => document.getElementById("inp-nueva-cat").focus(), 80);
}

function cerrarModal() {
  document.getElementById("modal-cats").classList.remove("open");
  document.getElementById("inp-nueva-cat").value = "";
}

function clickOverlay(e) {
  if (e.target === document.getElementById("modal-cats")) cerrarModal();
}

// ── Renderizar lista dentro del modal ───────────────────────────
function renderCatLista() {
  const lista = document.getElementById("lista-categorias");

  if (categorias.length === 0) {
    lista.innerHTML = '<p class="cat-empty">No hay categorías. ¡Crea la primera!</p>';
    return;
  }

  lista.innerHTML = categorias.map((c, i) => {
    const count = productos.filter(p => p.categoria === c).length;
    return `
      <div class="cat-item" id="cat-item-${i}">
        <span class="cat-item-name" id="cat-name-${i}">${c}</span>
        <span class="cat-count">${count} prod.</span>
        <div class="cat-actions">
          <button class="btn-ce edit" onclick="iniciarEditCat(${i})">✏️</button>
          <button class="btn-ce del"  onclick="eliminarCategoria('${c}')">🗑️</button>
        </div>
      </div>`;
  }).join("");
}

// ── Agregar ──────────────────────────────────────────────────────
function agregarCategoria() {
  const inp    = document.getElementById("inp-nueva-cat");
  const nombre = inp.value.trim();

  if (!nombre) {
    Swal.fire({ icon: 'warning', title: 'Campo vacío', text: 'Escribe el nombre de la categoría.', confirmButtonColor: '#4f46e5' });
    return;
  }
  if (categorias.map(c => c.toLowerCase()).includes(nombre.toLowerCase())) {
    Swal.fire({ icon: 'info', title: 'Ya existe', text: `"${nombre}" ya está registrada.`, confirmButtonColor: '#4f46e5' });
    return;
  }

  categorias.push(nombre);
  inp.value = "";
  inp.focus();
  renderCatLista();
  sincronizarSelectsCategorias();

  Swal.fire({ icon: 'success', title: '¡Categoría creada!', text: `"${nombre}" fue agregada.`, timer: 1500, showConfirmButton: false });
}

// ── Editar inline ────────────────────────────────────────────────
function iniciarEditCat(i) {
  const item    = document.getElementById(`cat-item-${i}`);
  const nombre  = categorias[i];

  item.innerHTML = `
    <div class="cat-edit-row">
      <input type="text" id="cat-edit-inp-${i}" value="${nombre}"
             onkeydown="if(event.key==='Enter') guardarEditCat(${i}); if(event.key==='Escape') renderCatLista();">
    </div>
    <div class="cat-actions">
      <button class="btn-ce save"   onclick="guardarEditCat(${i})">✔</button>
      <button class="btn-ce cancel" onclick="renderCatLista()">✕</button>
    </div>`;

  document.getElementById(`cat-edit-inp-${i}`).focus();
}

function guardarEditCat(i) {
  const inp       = document.getElementById(`cat-edit-inp-${i}`);
  const nuevo     = inp.value.trim();
  const anterior  = categorias[i];

  if (!nuevo) {
    Swal.fire({ icon: 'warning', title: 'Campo vacío', text: 'El nombre no puede estar vacío.', confirmButtonColor: '#4f46e5' });
    return;
  }

  const duplicado = categorias.some((c, idx) => idx !== i && c.toLowerCase() === nuevo.toLowerCase());
  if (duplicado) {
    Swal.fire({ icon: 'info', title: 'Ya existe', text: `"${nuevo}" ya está registrada.`, confirmButtonColor: '#4f46e5' });
    return;
  }

  // Actualizar en productos
  productos.forEach(p => { if (p.categoria === anterior) p.categoria = nuevo; });
  categorias[i] = nuevo;

  renderCatLista();
  sincronizarSelectsCategorias();
  renderTabla();

  Swal.fire({ icon: 'success', title: 'Actualizada', text: `Renombrada a "${nuevo}".`, timer: 1400, showConfirmButton: false });
}

// ── Eliminar ─────────────────────────────────────────────────────
function eliminarCategoria(nombre) {
  const count = productos.filter(p => p.categoria === nombre).length;
  const aviso = count > 0 ? `<br><small style="color:#ef4444;"> ${count} producto(s) quedarán sin categoría.</small>` : '';

  Swal.fire({
    title: '¿Eliminar categoría?',
    html: `<b>${nombre}</b>${aviso}`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#ef4444',
    cancelButtonColor: '#94a3b8',
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'Cancelar'
  }).then(result => {
    if (!result.isConfirmed) return;
    productos.forEach(p => { if (p.categoria === nombre) p.categoria = ""; });
    categorias = categorias.filter(c => c !== nombre);
    renderCatLista();
    sincronizarSelectsCategorias();
    renderTabla();
    Swal.fire({ icon: 'success', title: 'Eliminada', timer: 1400, showConfirmButton: false });
  });
}

// ── Sincronizar selects de categorías ────────────────────────────
function sincronizarSelectsCategorias() {
  const selForm   = document.getElementById("inp-categoria");
  const selFiltro = document.getElementById("filtro-categoria");
  const valForm   = selForm.value;
  const valFiltro = selFiltro.value;

  const opts = categorias.map(c => `<option value="${c}">${c}</option>`).join("");

  selForm.innerHTML   = `<option value="">— Sin categoría —</option>${opts}`;
  selFiltro.innerHTML = `<option value="">Todas las categorías</option>${opts}`;

  selForm.value   = valForm;
  selFiltro.value = valFiltro;
}

// ════════════════════════════════════════════════════════════════
//  CRUD PRODUCTOS
// ════════════════════════════════════════════════════════════════

// ── Guardar (crear / actualizar) ─────────────────────────────────
function guardar() {
  const nombre      = document.getElementById("inp-nombre").value.trim();
  const descripcion = document.getElementById("inp-descripcion").value.trim();
  const precio      = parseFloat(document.getElementById("inp-precio").value);
  const stock       = parseInt(document.getElementById("inp-stock").value);
  const disponible  = document.getElementById("inp-disponible").checked;
  const categoria   = document.getElementById("inp-categoria").value;

  if (!nombre) {
    Swal.fire({ icon: 'warning', title: 'Campo requerido', text: 'El nombre del producto es obligatorio.', confirmButtonColor: '#4f46e5' });
    return;
  }
  if (isNaN(precio) || precio < 0) {
    Swal.fire({ icon: 'warning', title: 'Precio inválido', text: 'Ingresa un precio válido (≥ 0).', confirmButtonColor: '#4f46e5' });
    return;
  }
  if (isNaN(stock) || stock < 0) {
    Swal.fire({ icon: 'warning', title: 'Stock inválido', text: 'Ingresa un stock válido (≥ 0).', confirmButtonColor: '#4f46e5' });
    return;
  }

  if (editandoId !== null) {
    const idx = productos.findIndex(p => p.id === editandoId);
    productos[idx] = { id: editandoId, nombre, descripcion, precio, stock, disponible, categoria };
    cancelar();
    Swal.fire({ icon: 'success', title: '¡Actualizado!', text: `"${nombre}" fue actualizado.`, timer: 1600, showConfirmButton: false });
  } else {
    productos.push({ id: nextId++, nombre, descripcion, precio, stock, disponible, categoria });
    limpiarFormulario();
    Swal.fire({ icon: 'success', title: '¡Producto creado!', text: `"${nombre}" fue agregado.`, timer: 1600, showConfirmButton: false });
  }

  renderTabla();
}

// ── Renderizar tabla ─────────────────────────────────────────────
function renderTabla() {
  const container  = document.getElementById("tabla-container");
  const buscar     = (document.getElementById("filtro-buscar")?.value || "").toLowerCase();
  const filtroCat  = document.getElementById("filtro-categoria")?.value || "";
  const filtroDisp = document.getElementById("filtro-disponible")?.value || "";

  const filtrados = productos.filter(p => {
    const matchBuscar = p.nombre.toLowerCase().includes(buscar) || p.descripcion.toLowerCase().includes(buscar);
    const matchCat    = !filtroCat || p.categoria === filtroCat;
    const matchDisp   = filtroDisp === "" || String(p.disponible) === filtroDisp;
    return matchBuscar && matchCat && matchDisp;
  });

  document.getElementById("total").textContent = filtrados.length;

  if (filtrados.length === 0) {
    container.innerHTML = `<p class="sin-datos"> No se encontraron productos con esos filtros.</p>`;
    return;
  }

  const filas = filtrados.map(p => `
    <tr>
      <td style="font-weight:700;color:#4f46e5;">#${p.id}</td>
      <td style="font-weight:700;">${p.nombre}</td>
      <td style="color:#64748b;">${p.descripcion}</td>
      <td>${p.categoria ? `<span class="cat-badge">${p.categoria}</span>` : '<span style="color:#cbd5e1;">—</span>'}</td>
      <td style="font-weight:800;">$${p.precio.toFixed(2)}</td>
      <td style="font-weight:700;">${p.stock}</td>
      <td><span class="${p.disponible ? 'estado-si' : 'estado-no'}">${p.disponible ? " Sí" : " No"}</span></td>
      <td>
        <button class="btn-editar"   onclick="editar(${p.id})">✏️ Editar</button>
        <button class="btn-eliminar" onclick="eliminar(${p.id})">🗑️</button>
      </td>
    </tr>`).join("");

  container.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>ID</th><th>Nombre</th><th>Descripción</th><th>Categoría</th>
          <th>Precio</th><th>Stock</th><th>Disponible</th><th>Acciones</th>
        </tr>
      </thead>
      <tbody>${filas}</tbody>
    </table>`;
}

// ── Editar ───────────────────────────────────────────────────────
function editar(id) {
  const p = productos.find(p => p.id === id);
  if (!p) return;

  editandoId = id;
  document.getElementById("inp-nombre").value       = p.nombre;
  document.getElementById("inp-descripcion").value  = p.descripcion;
  document.getElementById("inp-precio").value       = p.precio;
  document.getElementById("inp-stock").value        = p.stock;
  document.getElementById("inp-disponible").checked = p.disponible;
  document.getElementById("inp-categoria").value    = p.categoria || "";

  document.getElementById("form-titulo").textContent    = "Editar Producto";
  document.getElementById("btn-cancelar").style.display = "inline-block";

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ── Eliminar ─────────────────────────────────────────────────────
function eliminar(id) {
  const p = productos.find(p => p.id === id);
  if (!p) return;

  Swal.fire({
    title: '¿Eliminar producto?',
    html: `¿Seguro que deseas eliminar <b>"${p.nombre}"</b>?`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#ef4444',
    cancelButtonColor: '#94a3b8',
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'Cancelar'
  }).then(result => {
    if (!result.isConfirmed) return;
    productos = productos.filter(pr => pr.id !== id);
    if (editandoId === id) cancelar();
    renderTabla();
    Swal.fire({ icon: 'success', title: 'Eliminado', text: `"${p.nombre}" fue eliminado.`, timer: 1500, showConfirmButton: false });
  });
}

// ── Helpers ──────────────────────────────────────────────────────
function limpiarFormulario() {
  document.getElementById("inp-nombre").value       = "";
  document.getElementById("inp-descripcion").value  = "";
  document.getElementById("inp-precio").value       = "";
  document.getElementById("inp-stock").value        = "";
  document.getElementById("inp-disponible").checked = true;
  document.getElementById("inp-categoria").value    = "";
}

function cancelar() {
  editandoId = null;
  limpiarFormulario();
  document.getElementById("form-titulo").textContent    = "Agregar Producto";
  document.getElementById("btn-cancelar").style.display = "none";
}

// ── Inicio ───────────────────────────────────────────────────────
sincronizarSelectsCategorias();
renderTabla();
