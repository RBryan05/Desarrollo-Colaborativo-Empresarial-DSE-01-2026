//Array de productos
let productos = [
  {
    id: 1,
    nombre: "Laptop Dell",
    descripcion: "Intel i7, 16GB RAM",
    precio: 1200,
    stock: 5,
    categoria:"Electrónica",
    disponible: true,
  },
  {
    id: 2,
    nombre: "Mouse Logitech",
    descripcion: "Inalámbrico ergonómico",
    precio: 45,
    stock: 15,
    categoria:"Electrónica",
    disponible: true,
  },
  {
    id: 3,
    nombre: "Teclado Mecánico",
    descripcion: "Switches azules RGB",
    precio: 90,
    stock: 0,
    categoria:"Electrónica",
    disponible: false,
  },
];
 //Observacion areglada 
let categorias = ["Electrónica", "Periféricos", "Accesorios"];

let nextId = 4;
let editandoId = null;

//CREAR / ACTUALIZAR 
function guardar() {
  const nombre = document.getElementById("inp-nombre").value.trim();
  const descripcion = document.getElementById("inp-descripcion").value.trim();
  const precio = parseFloat(document.getElementById("inp-precio").value);
  const stock = parseInt(document.getElementById("inp-stock").value);
  const categoria = document.getElementById("inp-categoria").value;
  const disponible = document.getElementById("inp-disponible").checked;

  // Validaciones básicas
  if (!nombre)               return alert("El nombre es obligatorio.");
  if (isNaN(precio) || precio < 0) return alert("Ingresa un precio válido.");
  if (isNaN(stock)  || stock < 0)  return alert("Ingresa un stock válido.");

  if (editandoId !== null) {
    // ACTUALIZAR
    const indice = productos.findIndex(p => p.id === editandoId);
    productos[indice] = { id: editandoId, nombre, descripcion, precio, stock,categoria, disponible };
    cancelar();
  } else {
    // CREAR
    productos.push({ id: nextId++, nombre, descripcion, precio, stock,categoria, disponible });
    alert("Producto agregado exitosamente.");
    limpiarFormulario();
  }

  renderTabla();
}

function renderTabla(){

const container=document.getElementById("tabla-container");
if(!container)return;

const buscar=(document.getElementById("filtro-buscar")?.value||"").toLowerCase();
const filtroCat=document.getElementById("filtro-categoria")?.value||"";
const filtroDisp=document.getElementById("filtro-disponible")?.value||"";

const filtrados=productos.filter(p=>{

const m1=p.nombre.toLowerCase().includes(buscar);
const m2=!filtroCat||p.categoria===filtroCat;
const m3=filtroDisp===""||String(p.disponible)===filtroDisp;

return m1&&m2&&m3;

});

document.getElementById("total").textContent=filtrados.length;

if(filtrados.length===0){
container.innerHTML=`<p class="sin-datos">
<i class="fa-solid fa-face-frown"></i>
No hay productos
</p>`;
return;
}

const filas=filtrados.map(p=>`
<tr>
<td>${p.id}</td>
<td>${p.nombre}</td>
<td>${p.descripcion}</td>
<td>${p.categoria?`<span class="cat-badge">${p.categoria}</span>`:"-"}</td>
<td>$${p.precio}</td>
<td>${p.stock}</td>
<td>
<span class="${p.disponible?'estado-si':'estado-no'}">
${p.disponible?"Sí":"No"}
</span>
</td>
<td>
<button class="btn-editar" onclick="editar(${p.id})">
<i class="fa-solid fa-pen"></i>
</button>
<button class="btn-eliminar" onclick="eliminar(${p.id})">
<i class="fa-solid fa-trash"></i>
</button>
</td>
</tr>
`).join("");

container.innerHTML=`
<table width="100%">
<thead>
<tr>
<th>ID</th>
<th>Nombre</th>
<th>Descripción</th>
<th>Categoría</th>
<th>Precio</th>
<th>Stock</th>
<th>Disp.</th>
<th>Acciones</th>
</tr>
</thead>
<tbody>${filas}</tbody>document.getElementById("inp-categoria").value = p.categoria;
</table>
`;

}
//HELPERS
function limpiarFormulario() {
  document.getElementById("inp-nombre").value      = "";
  document.getElementById("inp-descripcion").value = "";
  document.getElementById("inp-precio").value      = "";
  document.getElementById("inp-stock").value       = "";
  document.getElementById("inp-disponible").checked = true;
}


//Nueva observacion select categorrias
function sincronizarSelectsCategorias(){
  const selForm   = document.getElementById("inp-categoria");
  const selFiltro = document.getElementById("filtro-categoria");
  if(!selForm || !selFiltro) return;
  const opts = categorias.map(c=>`<option value="${c}">${c}</option>`).join("");
  selForm.innerHTML   = `<option value="">Sin categoría</option>${opts}`;
  selFiltro.innerHTML = `<option value="">Todas</option>${opts}`;
}



// Después:
document.addEventListener("DOMContentLoaded", () => {
  sincronizarSelectsCategorias();
  renderTabla();
});