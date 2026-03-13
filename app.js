// ── DATOS INICIALES ──
let categorias = ["Electrónica", "Periféricos", "Accesorios"];
let productos = [
  { id: 1, nombre: "Laptop Dell", descripcion: "Intel i7, 16GB RAM", precio: 1200, stock: 5, disponible: true, categoria: "Electrónica" },
  { id: 2, nombre: "Mouse Logitech", descripcion: "Inalámbrico", precio: 45, stock: 15, disponible: true, categoria: "Periféricos" },
  { id: 3, nombre: "Teclado Mecánico Redragon", descripcion: "RGB Switch Blue", precio: 80, stock: 10, disponible: true, categoria: "Periféricos" },
  { id: 4, nombre: "Monitor Samsung 24", descripcion: "Full HD 75Hz", precio: 210, stock: 8, disponible: true, categoria: "Electrónica" },
  { id: 5, nombre: "Audífonos Sony", descripcion: "Cancelación de ruido", precio: 150, stock: 7, disponible: true, categoria: "Accesorios" },
  { id: 6, nombre: "Webcam Logitech C920", descripcion: "Full HD", precio: 95, stock: 12, disponible: true, categoria: "Periféricos" },
  { id: 7, nombre: "Disco Duro Seagate 1TB", descripcion: "USB 3.0", precio: 70, stock: 9, disponible: true, categoria: "Electrónica" },
  { id: 8, nombre: "Memoria USB Kingston 64GB", descripcion: "USB 3.1", precio: 15, stock: 25, disponible: true, categoria: "Accesorios" },
  { id: 9, nombre: "Silla Gamer", descripcion: "Ergonómica", precio: 180, stock: 4, disponible: true, categoria: "Muebles" },
  { id: 10, nombre: "Router TP-Link", descripcion: "WiFi 6", precio: 120, stock: 6, disponible: true, categoria: "Electrónica" },

  { id: 11, nombre: "Tablet Samsung", descripcion: "10 pulgadas", precio: 320, stock: 5, disponible: true, categoria: "Electrónica" },
  { id: 12, nombre: "Laptop HP", descripcion: "Intel i5, 8GB RAM", precio: 850, stock: 6, disponible: true, categoria: "Electrónica" },
  { id: 13, nombre: "Mouse Razer", descripcion: "Gamer RGB", precio: 60, stock: 11, disponible: true, categoria: "Periféricos" },
  { id: 14, nombre: "Teclado Logitech", descripcion: "Inalámbrico", precio: 50, stock: 14, disponible: true, categoria: "Periféricos" },
  { id: 15, nombre: "SSD Kingston 500GB", descripcion: "SATA", precio: 75, stock: 10, disponible: true, categoria: "Electrónica" },
  { id: 16, nombre: "SSD Samsung 1TB", descripcion: "NVMe", precio: 140, stock: 7, disponible: true, categoria: "Electrónica" },
  { id: 17, nombre: "Cámara Logitech", descripcion: "HD 720p", precio: 55, stock: 9, disponible: true, categoria: "Periféricos" },
  { id: 18, nombre: "Microfono Blue Yeti", descripcion: "USB profesional", precio: 130, stock: 5, disponible: true, categoria: "Accesorios" },
  { id: 19, nombre: "Monitor LG 27", descripcion: "IPS Full HD", precio: 260, stock: 6, disponible: true, categoria: "Electrónica" },
  { id: 20, nombre: "Laptop Lenovo", descripcion: "Ryzen 5, 16GB RAM", precio: 980, stock: 4, disponible: true, categoria: "Electrónica" },

  { id: 21, nombre: "Hub USB", descripcion: "4 puertos", precio: 18, stock: 20, disponible: true, categoria: "Accesorios" },
  { id: 22, nombre: "Cargador Laptop Universal", descripcion: "90W", precio: 35, stock: 13, disponible: false, categoria: "Accesorios" },
  { id: 23, nombre: "Base para Laptop", descripcion: "Con ventiladores", precio: 28, stock: 15, disponible: false, categoria: "Accesorios" },
  { id: 24, nombre: "Mouse Pad Gamer", descripcion: "XL RGB", precio: 25, stock: 18, disponible: true, categoria: "Accesorios" },
  { id: 25, nombre: "Teclado Corsair", descripcion: "Mecánico RGB", precio: 120, stock: 6, disponible: false, categoria: "Periféricos" },
  { id: 26, nombre: "Audífonos HyperX", descripcion: "Gamer", precio: 95, stock: 7, disponible: true, categoria: "Accesorios" },
  { id: 27, nombre: "Monitor ASUS 24", descripcion: "144Hz", precio: 310, stock: 4, disponible: true, categoria: "Electrónica" },
  { id: 28, nombre: "Router Huawei", descripcion: "Dual Band", precio: 80, stock: 9, disponible: true, categoria: "Electrónica" },
  { id: 29, nombre: "Smartwatch Xiaomi", descripcion: "Pantalla AMOLED", precio: 110, stock: 10, disponible: false, categoria: "Electrónica" },
  { id: 30, nombre: "Tablet Lenovo", descripcion: "Android 11", precio: 260, stock: 6, disponible: true, categoria: "Electrónica" },

  { id: 31, nombre: "Memoria RAM Kingston 8GB", descripcion: "DDR4", precio: 40, stock: 16, disponible: true, categoria: "Electrónica" },
  { id: 32, nombre: "Memoria RAM Corsair 16GB", descripcion: "DDR4", precio: 75, stock: 12, disponible: true, categoria: "Electrónica" },
  { id: 33, nombre: "Disco Duro WD 2TB", descripcion: "Externo", precio: 95, stock: 7, disponible: true, categoria: "Electrónica" },
  { id: 34, nombre: "UPS APC", descripcion: "1000VA", precio: 150, stock: 5, disponible: true, categoria: "Electrónica" },
  { id: 35, nombre: "Regleta Surge Protector", descripcion: "6 tomas", precio: 22, stock: 20, disponible: false, categoria: "Accesorios" },
  { id: 36, nombre: "Laptop ASUS", descripcion: "Intel i7 12th Gen", precio: 1300, stock: 3, disponible: true, categoria: "Electrónica" },
  { id: 37, nombre: "Mouse Microsoft", descripcion: "Bluetooth", precio: 35, stock: 15, disponible: true, categoria: "Periféricos" },
  { id: 38, nombre: "Teclado HP", descripcion: "USB", precio: 25, stock: 18, disponible: true, categoria: "Periféricos" },
  { id: 39, nombre: "Monitor Acer 22", descripcion: "Full HD", precio: 180, stock: 9, disponible: true, categoria: "Electrónica" },
  { id: 40, nombre: "Tablet Amazon Fire", descripcion: "8 pulgadas", precio: 140, stock: 8, disponible: true, categoria: "Electrónica" },

  { id: 41, nombre: "Cámara Web HD", descripcion: "1080p", precio: 50, stock: 12, disponible: true, categoria: "Periféricos" },
  { id: 42, nombre: "Altavoces Logitech", descripcion: "2.1", precio: 65, stock: 10, disponible: true, categoria: "Accesorios" },
  { id: 43, nombre: "Laptop MSI", descripcion: "Gamer RTX 3050", precio: 1500, stock: 2, disponible: true, categoria: "Electrónica" },
  { id: 44, nombre: "Control Xbox", descripcion: "Inalámbrico", precio: 70, stock: 11, disponible: true, categoria: "Accesorios" },
  { id: 45, nombre: "Control PS5", descripcion: "DualSense", precio: 75, stock: 10, disponible: true, categoria: "Accesorios" },
  { id: 46, nombre: "Cargador USB-C", descripcion: "65W", precio: 30, stock: 15, disponible: true, categoria: "Accesorios" },
  { id: 47, nombre: "Cable HDMI", descripcion: "4K", precio: 12, stock: 30, disponible: true, categoria: "Accesorios" },
  { id: 48, nombre: "Cable Ethernet", descripcion: "Cat6 5m", precio: 10, stock: 25, disponible: true, categoria: "Accesorios" },
  { id: 49, nombre: "Monitor BenQ 27", descripcion: "QHD", precio: 340, stock: 4, disponible: true, categoria: "Electrónica" },
  { id: 50, nombre: "Laptop Acer", descripcion: "Ryzen 7", precio: 1100, stock: 3, disponible: true, categoria: "Electrónica" },

  { id: 51, nombre: "SSD Crucial 1TB", descripcion: "NVMe", precio: 120, stock: 8, disponible: true, categoria: "Electrónica" },
  { id: 52, nombre: "Memoria USB Sandisk 128GB", descripcion: "USB 3.0", precio: 20, stock: 20, disponible: true, categoria: "Accesorios" },
  { id: 53, nombre: "Mouse Gamer SteelSeries", descripcion: "RGB", precio: 65, stock: 9, disponible: true, categoria: "Periféricos" },
  { id: 54, nombre: "Teclado Gamer HyperX", descripcion: "RGB", precio: 110, stock: 6, disponible: true, categoria: "Periféricos" },
  { id: 55, nombre: "Laptop Huawei", descripcion: "Matebook i5", precio: 900, stock: 4, disponible: true, categoria: "Electrónica" },
  { id: 56, nombre: "Tablet Xiaomi", descripcion: "11 pulgadas", precio: 380, stock: 5, disponible: true, categoria: "Electrónica" },
  { id: 57, nombre: "Router Netgear", descripcion: "Gigabit", precio: 95, stock: 7, disponible: true, categoria: "Electrónica" },
  { id: 58, nombre: "Monitor Dell 24", descripcion: "IPS", precio: 230, stock: 8, disponible: true, categoria: "Electrónica" },
  { id: 59, nombre: "Base Monitor", descripcion: "Ajustable", precio: 35, stock: 14, disponible: true, categoria: "Muebles" },
  { id: 60, nombre: "Escritorio Gamer", descripcion: "120cm", precio: 220, stock: 3, disponible: true, categoria: "Muebles" },

  { id: 61, nombre: "Silla Oficina", descripcion: "Ergonómica", precio: 160, stock: 5, disponible: true, categoria: "Muebles" },
  { id: 62, nombre: "Lámpara LED Escritorio", descripcion: "USB", precio: 22, stock: 15, disponible: true, categoria: "Accesorios" },
  { id: 63, nombre: "Laptop Toshiba", descripcion: "Intel i3", precio: 650, stock: 4, disponible: true, categoria: "Electrónica" },
  { id: 64, nombre: "Smartphone Samsung", descripcion: "128GB", precio: 480, stock: 6, disponible: true, categoria: "Electrónica" },
  { id: 65, nombre: "Smartphone Xiaomi", descripcion: "256GB", precio: 420, stock: 7, disponible: true, categoria: "Electrónica" },
  { id: 66, nombre: "Smartphone Motorola", descripcion: "5G", precio: 350, stock: 8, disponible: true, categoria: "Electrónica" },
  { id: 67, nombre: "Power Bank", descripcion: "20000mAh", precio: 40, stock: 18, disponible: true, categoria: "Accesorios" },
  { id: 68, nombre: "Cargador Inalámbrico", descripcion: "15W", precio: 28, stock: 12, disponible: true, categoria: "Accesorios" },
  { id: 69, nombre: "Soporte Celular", descripcion: "Ajustable", precio: 10, stock: 25, disponible: true, categoria: "Accesorios" },
  { id: 70, nombre: "Monitor Viewsonic", descripcion: "24 pulgadas", precio: 215, stock: 6, disponible: true, categoria: "Electrónica" },

  { id: 71, nombre: "SSD WD 500GB", descripcion: "NVMe", precio: 65, stock: 10, disponible: true, categoria: "Electrónica" },
  { id: 72, nombre: "Laptop Gigabyte", descripcion: "RTX 3060", precio: 1600, stock: 2, disponible: true, categoria: "Electrónica" },
  { id: 73, nombre: "Mousepad XXL", descripcion: "Antideslizante", precio: 18, stock: 20, disponible: true, categoria: "Accesorios" },
  { id: 74, nombre: "Teclado Apple", descripcion: "Magic Keyboard", precio: 130, stock: 5, disponible: true, categoria: "Periféricos" },
  { id: 75, nombre: "Mouse Apple", descripcion: "Magic Mouse", precio: 95, stock: 6, disponible: true, categoria: "Periféricos" },
  { id: 76, nombre: "Monitor Apple", descripcion: "Studio Display", precio: 1600, stock: 1, disponible: true, categoria: "Electrónica" },
  { id: 77, nombre: "MacBook Air", descripcion: "M2 16GB RAM", precio: 1450, stock: 3, disponible: true, categoria: "Electrónica" },
  { id: 78, nombre: "MacBook Pro", descripcion: "M3 32GB RAM", precio: 2600, stock: 2, disponible: true, categoria: "Electrónica" },
  { id: 79, nombre: "iPad Pro", descripcion: "12.9 pulgadas", precio: 1200, stock: 4, disponible: true, categoria: "Electrónica" },
  { id: 80, nombre: "Apple Pencil", descripcion: "2da generación", precio: 130, stock: 8, disponible: true, categoria: "Accesorios" },

  { id: 81, nombre: "Teclado Bluetooth", descripcion: "Compacto", precio: 35, stock: 14, disponible: true, categoria: "Periféricos" },
  { id: 82, nombre: "Mouse Bluetooth", descripcion: "Compacto", precio: 30, stock: 16, disponible: true, categoria: "Periféricos" },
  { id: 83, nombre: "Laptop Chuwi", descripcion: "Intel N100", precio: 420, stock: 6, disponible: true, categoria: "Electrónica" },
  { id: 84, nombre: "Tablet Chuwi", descripcion: "10 pulgadas", precio: 210, stock: 7, disponible: true, categoria: "Electrónica" },
  { id: 85, nombre: "Monitor Philips", descripcion: "24 pulgadas", precio: 205, stock: 8, disponible: true, categoria: "Electrónica" },
  { id: 86, nombre: "Router Xiaomi", descripcion: "WiFi 6", precio: 85, stock: 9, disponible: true, categoria: "Electrónica" },
  { id: 87, nombre: "Audífonos JBL", descripcion: "Bluetooth", precio: 70, stock: 12, disponible: true, categoria: "Accesorios" },
  { id: 88, nombre: "Audífonos Beats", descripcion: "Studio", precio: 220, stock: 4, disponible: true, categoria: "Accesorios" },
  { id: 89, nombre: "Laptop Dell XPS", descripcion: "Intel i9", precio: 2200, stock: 2, disponible: true, categoria: "Electrónica" },
  { id: 90, nombre: "Monitor Curvo Samsung", descripcion: "32 pulgadas", precio: 420, stock: 3, disponible: true, categoria: "Electrónica" },

  { id: 91, nombre: "Tarjeta Grafica RTX 4060", descripcion: "8GB GDDR6", precio: 420, stock: 3, disponible: true, categoria: "Electrónica" },
  { id: 92, nombre: "Tarjeta Grafica RTX 4070", descripcion: "12GB GDDR6", precio: 650, stock: 2, disponible: true, categoria: "Electrónica" },
  { id: 93, nombre: "Procesador Ryzen 5", descripcion: "5600X", precio: 210, stock: 5, disponible: true, categoria: "Electrónica" },
  { id: 94, nombre: "Procesador Intel i5", descripcion: "12400F", precio: 200, stock: 6, disponible: true, categoria: "Electrónica" },
  { id: 95, nombre: "Fuente Poder Corsair", descripcion: "750W", precio: 110, stock: 7, disponible: true, categoria: "Electrónica" },
  { id: 96, nombre: "Gabinete Gamer", descripcion: "RGB", precio: 95, stock: 6, disponible: true, categoria: "Electrónica" },
  { id: 97, nombre: "Ventiladores RGB", descripcion: "Pack 3", precio: 45, stock: 10, disponible: true, categoria: "Accesorios" },
  { id: 98, nombre: "Refrigeración Líquida", descripcion: "240mm", precio: 130, stock: 4, disponible: true, categoria: "Electrónica" },
  { id: 99, nombre: "Monitor Gamer ASUS", descripcion: "165Hz", precio: 380, stock: 3, disponible: true, categoria: "Electrónica" },
  { id: 100, nombre: "Laptop Gamer Lenovo", descripcion: "RTX 4060", precio: 1400, stock: 2, disponible: true, categoria: "Electrónica" }
];

let nextId = 3;
let editandoId = null;

//variables para la paginacion de productos 
let paginaActual = 1;
const porPagina = 10;

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

//Modificacion del metodo de renderizado de la tabla para poder hacer paginacion 
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

  // ajustar página si el filtro reduce resultados
  const totalPaginas = Math.ceil(filtrados.length / porPagina);
  if (paginaActual > totalPaginas) paginaActual = 1;

  // PAGINACIÓN
  const inicio = (paginaActual - 1) * porPagina;
  const fin = inicio + porPagina;
  const paginados = filtrados.slice(inicio, fin);

  let html = `<table>
  <thead>
  <tr>
  <th>ID</th>
  <th>Nombre</th>
  <th>Categoría</th>
  <th>Precio</th>
  <th>Stock</th>
  <th>Estado</th>
  <th>Acciones</th>
  </tr>
  </thead>
  <tbody>`;

  paginados.forEach((p) => {
    html += `
      <tr>
        <td>#${p.id}</td>
        <td><strong>${p.nombre}</strong></td>
        <td><span class="cat-badge">${p.categoria || "Sin cat."}</span></td>
        <td>$${p.precio.toFixed(2)}</td>
        <td>${p.stock}</td>
        <td>
        <span class="${p.disponible ? "estado-si" : "estado-no"}">
        ${p.disponible ? "Disponible" : "Agotado"}
        </span>
        </td>
        <td>
          <button style="background:var(--warning);color:#fff;" onclick="editar(${p.id})">
          <i class="bi bi-pencil-square"></i>
          </button>

          <button style="background:var(--danger);color:#fff;" onclick="eliminar(${p.id})">
          <i class="bi bi-trash"></i>
          </button>
        </td>
      </tr>`;
  });

  html += `</tbody></table>`;

  container.innerHTML =
    filtrados.length > 0
      ? html
      : '<p style="text-align:center;padding:20px;">No hay productos.</p>';

  renderPagination(filtrados.length);
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

//===========================================
//New methods for pagination of list products
//===========================================
//renderizado en paginacion 
function renderPagination(totalItems) {
  const pagination = document.getElementById("pagination");
  const totalPaginas = Math.ceil(totalItems / porPagina);

  let html = "";

  html += `
  <li class="page-item ${paginaActual === 1 ? "disabled" : ""}">
    <a class="page-link" href="javascript:void(0)" onclick="cambiarPagina(${paginaActual - 1})">&laquo;</a>
  </li>
  `;

  for (let i = 1; i <= totalPaginas; i++) {
    html += `
    <li class="page-item ${paginaActual === i ? "active" : ""}">
      <a class="page-link" href="javascript:void(0)" onclick="cambiarPagina(${i})">${i}</a>
    </li>
    `;
  }

  html += `
  <li class="page-item ${paginaActual === totalPaginas ? "disabled" : ""}">
    <a class="page-link" href="javascript:void(0)" onclick="cambiarPagina(${paginaActual + 1})">&raquo;</a>
  </li>
  `;

  pagination.innerHTML = html;
}

//new methods
function cambiarPagina(num) {
  const totalPaginas = Math.ceil(productos.length / porPagina);
  if (num < 1 || num > totalPaginas) return;
  paginaActual = num;
  renderTabla();
}

// INICIO
sincronizarSelects();
renderTabla();