// ===== Clases (una por tabla) =====
class Cliente {
  constructor(id, nombre, apellido, telefono, email) {
    Object.assign(this, { id, nombre, apellido, telefono, email });
  }
  get full() {
    return this.nombre + " " + this.apellido;
  }
}
class Sala {
  constructor(id, nombre, capacidad) {
    Object.assign(this, { id, nombre, capacidad });
  }
}
class Producto {
  constructor(id, nombre, marca, categoria, precio, stock) {
    Object.assign(this, { id, nombre, marca, categoria, precio, stock });
  }
}
class Venta {
  constructor(id, fecha, id_cliente) {
    Object.assign(this, { id, fecha, id_cliente });
  }
}
class DetalleVenta {
  constructor(id, id_venta, id_producto, cantidad, precio_unitario) {
    Object.assign(this, { id, id_venta, id_producto, cantidad, precio_unitario });
  }
}
class Reserva {
  constructor(id, id_cliente, id_sala, fecha, hi, hf) {
    Object.assign(this, { id, id_cliente, id_sala, fecha, hora_inicio: hi, hora_fin: hf });
  }
}
const L = (a, C) => a.map((r) => new C(...r));
const db = {
  clientes: L(
    [
      [1, "Lucía", "Fernández", "+54 351 555-0101", "lucia.fernandez@mail.com"],
      [2, "Mateo", "Gómez", "+54 351 555-0102", "mateo.gomez@mail.com"],
      [3, "Sofía", "Ramírez", "+54 351 555-0103", "sofia.ramirez@mail.com"],
      [4, "Tomás", "Herrera", "+54 3548 55-0104", "tomas.herrera@mail.com"],
      [5, "Valentina", "Castro", "+54 3548 55-0105", "valen.castro@mail.com"],
      [6, "Joaquín", "Molina", "+54 351 555-0106", "joaquin.molina@mail.com"],
      [7, "Camila", "Torres", "+54 351 555-0107", "camila.torres@mail.com"],
      [8, "Bautista", "Ríos", "+54 351 555-0108", "bauti.rios@mail.com"],
      [9, "Martina", "Acosta", "+54 3548 55-0109", "martina.acosta@mail.com"],
      [10, "Facundo", "Paz", "+54 351 555-0110", "facu.paz@mail.com"],
      [11, "Agustina", "Romero", "+54 351 555-0111", "agus.romero@mail.com"],
      [12, "Nicolás", "Benítez", "+54 351 555-0112", "nico.benitez@mail.com"],
      [13, "Julieta", "Sosa", "+54 3548 55-0113", "julieta.sosa@mail.com"],
      [14, "Lautaro", "Medina", "+54 351 555-0114", "lauti.medina@mail.com"],
      [15, "Florencia", "Díaz", "+54 351 555-0115", "flor.diaz@mail.com"],
      [16, "Santiago", "Ortiz", "+54 351 555-0116", "santi.ortiz@mail.com"],
      [17, "Milagros", "Vega", "+54 3548 55-0117", "mili.vega@mail.com"],
      [18, "Ezequiel", "Cabrera", "+54 351 555-0118", "eze.cabrera@mail.com"],
      [19, "Renata", "Luna", "+54 351 555-0119", "renata.luna@mail.com"],
      [20, "Ignacio", "Peralta", "+54 351 555-0120", "nacho.peralta@mail.com"],
    ],
    Cliente,
  ),
  salas: L(
    [
      [1, "Sala Catan", 6],
      [2, "Sala Mazmorra", 8],
      [3, "Sala Dragón Rojo", 10],
      [4, "Sala Warhammer", 4],
      [5, "Sala Cthulhu", 5],
      [6, "Sala Meeple", 6],
      [7, "Sala Torneo Magic", 16],
      [8, "Sala Taberna", 12],
      [9, "Sala Carcassonne", 4],
      [10, "Sala Gloomhaven", 4],
      [11, "Sala Zen (Abstractos)", 2],
      [12, "Sala Arkham", 6],
      [13, "Sala del Estratega", 8],
      [14, "Sala Party", 14],
      [15, "Sala Hobbit", 6],
      [16, "Sala Galáctica", 8],
      [17, "Sala VIP Dado de Oro", 6],
      [18, "Sala Infantil Mini Meeples", 10],
      [19, "Sala Pandemia", 5],
      [20, "Gran Salón", 30],
    ],
    Sala,
  ),
  productos: L(
    [
      [1, "Catan", "Devir", "Estrategia", 62000, 15],
      [2, "Carcassonne", "Devir", "Estrategia", 38000, 20],
      [3, "D&D: Manual del Jugador", "Wizards of the Coast", "Rol", 78000, 8],
      [4, "Warhammer 40,000: Kill Team Starter", "Games Workshop", "Wargame", 145000, 5],
      [
        5,
        "Magic: The Gathering - Caja de sobres",
        "Wizards of the Coast",
        "Cartas coleccionables",
        210000,
        6,
      ],
      [6, "Exploding Kittens", "Asmodee", "Cartas", 24000, 25],
      [7, "Dixit", "Libellud", "Party", 42000, 12],
      [8, "Gloomhaven: Mandíbulas del León", "Cephalofair Games", "Cooperativo", 185000, 4],
      [9, "Ticket to Ride Europa", "Days of Wonder", "Familiar", 59000, 14],
      [10, "Root", "Leder Games", "Estrategia asimétrica", 98000, 7],
      [11, "Pandemic", "Z-Man Games", "Cooperativo", 48000, 13],
      [12, "Azul", "Next Move Games", "Abstracto", 44000, 18],
      [13, "La Llamada de Cthulhu: Kit de inicio", "Chaosium", "Rol", 69000, 6],
      [14, "Star Wars: Legión - Caja base", "Fantasy Flight Games", "Wargame", 165000, 3],
      [15, "Codenames", "Czech Games Edition", "Party", 31000, 22],
      [16, "Spirit Island", "Greater Than Games", "Cooperativo", 92000, 5],
      [17, "Wingspan", "Stonemaier Games", "Estrategia", 85000, 9],
      [18, "Set de dados poliédricos de resina", "Chessex", "Accesorios", 12000, 40],
      [19, "Fundas para cartas (pack x100)", "Dragon Shield", "Accesorios", 9500, 60],
      [20, "Dobble", "Asmodee", "Cartas", 18000, 30],
    ],
    Producto,
  ),
  ventas: L(
    [
      [1, "2026-09-05", 3],
      [2, "2026-09-07", 12],
      [3, "2026-09-10", 1],
      [4, "2026-09-12", 7],
      [5, "2026-09-14", 15],
      [6, "2026-09-18", 4],
      [7, "2026-09-20", 9],
      [8, "2026-09-23", 18],
      [9, "2026-09-26", 2],
      [10, "2026-09-28", 20],
      [11, "2026-10-01", 6],
      [12, "2026-10-03", 11],
      [13, "2026-10-06", 14],
      [14, "2026-10-09", 5],
      [15, "2026-10-12", 17],
      [16, "2026-10-15", 8],
      [17, "2026-10-18", 3],
      [18, "2026-10-21", 13],
      [19, "2026-10-24", 19],
      [20, "2026-10-27", 10],
    ],
    Venta,
  ),
  detalles: L(
    [
      [1, 1, 1, 1, 62000],
      [2, 2, 19, 3, 9500],
      [3, 3, 5, 1, 199500],
      [4, 4, 6, 2, 24000],
      [5, 5, 3, 1, 78000],
      [6, 6, 18, 4, 12000],
      [7, 7, 12, 1, 44000],
      [8, 8, 14, 1, 165000],
      [9, 9, 20, 2, 18000],
      [10, 10, 8, 1, 185000],
      [11, 11, 15, 1, 31000],
      [12, 12, 17, 1, 85000],
      [13, 13, 4, 1, 145000],
      [14, 14, 10, 1, 98000],
      [15, 15, 13, 1, 69000],
      [16, 16, 9, 1, 59000],
      [17, 17, 7, 2, 42000],
      [18, 18, 16, 1, 92000],
      [19, 19, 2, 1, 38000],
      [20, 20, 11, 1, 48000],
    ],
    DetalleVenta,
  ),
  reservas: L(
    [
      [1, 5, 3, "2026-10-30", "18:00", "22:00"],
      [2, 1, 7, "2026-10-30", "19:00", "23:00"],
      [3, 12, 2, "2026-10-31", "17:00", "21:00"],
      [4, 8, 5, "2026-10-31", "20:00", "23:30"],
      [5, 3, 14, "2026-11-01", "16:00", "20:00"],
      [6, 15, 1, "2026-11-01", "15:00", "18:00"],
      [7, 20, 4, "2026-11-02", "18:30", "22:30"],
      [8, 7, 9, "2026-11-02", "17:00", "19:00"],
      [9, 2, 20, "2026-11-03", "19:00", "23:00"],
      [10, 11, 10, "2026-11-04", "18:00", "21:00"],
      [11, 18, 12, "2026-11-05", "20:00", "23:00"],
      [12, 4, 6, "2026-11-06", "16:00", "19:00"],
      [13, 9, 18, "2026-11-07", "15:00", "18:00"],
      [14, 14, 8, "2026-11-07", "19:00", "23:30"],
      [15, 6, 16, "2026-11-08", "14:00", "18:00"],
      [16, 17, 13, "2026-11-08", "18:00", "21:00"],
      [17, 10, 17, "2026-11-09", "20:00", "23:00"],
      [18, 19, 19, "2026-11-10", "17:30", "20:30"],
      [19, 13, 15, "2026-11-11", "19:00", "22:00"],
      [20, 16, 11, "2026-11-12", "16:00", "18:00"],
    ],
    Reserva,
  ),
};

// ===== Utilidades =====
const $ = (s) => document.querySelector(s),
  money = (n) => "$" + Number(n).toLocaleString("es-AR"),
  by = (k, id) => db[k].find((x) => x.id == id),
  nid = (k) => Math.max(0, ...db[k].map((x) => x.id)) + 1;
const hh = (t) => {
  const [a, b] = t.split(":");
  return +a + b / 60;
};
let cur = "panel",
  q = "",
  day = "2026-11-03";
const tabs = {
  panel: "◈ Panel",
  inv: "⚔ Inventario",
  turn: "☾ Turnero de Salas",
  ven: "✦ Ventas",
  cli: "♛ Clientes",
  res: "⌛ Reservas",
};
$("#nav").innerHTML = Object.entries(tabs)
  .map(([k, v]) => `<button data-k="${k}" onclick="go('${k}')">${v}</button>`)
  .join("");
function go(k) {
  cur = k;
  q = "";
  draw();
}
function draw() {
  document
    .querySelectorAll("nav button")
    .forEach((b) => b.classList.toggle("on", b.dataset.k == cur));
  $("#app").innerHTML = V[cur]();
}
function form(title, fields, ok) {
  $("#frm").innerHTML =
    `<h3 class="cz" style="color:var(--red);margin-top:0">${title}</h3>` +
    fields
      .map(
        (f) =>
          `<label>${f.l}${f.o ? `<select name="${f.k}">${f.o.map((o) => `<option value="${o[0]}" ${o[0] == f.v ? "selected" : ""}>${o[1]}</option>`).join("")}</select>` : `<input name="${f.k}" type="${f.t || "text"}" value="${f.v ?? ""}" ${f.step ? 'step="' + f.step + '"' : ""} ${f.ro ? "readonly" : ""}>`}</label>`,
      )
      .join("") +
    `<div class="err" id="err"></div><div style="display:flex;gap:8px;justify-content:flex-end"><button class="btn g" type="button" onclick="dlg.close()">Cancelar</button><button class="btn" type="submit">Guardar</button></div>`;
  $("#frm").onsubmit = (e) => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData($("#frm")));
    const m = ok(d);
    if (m) $("#err").textContent = m;
    else {
      dlg.close();
      draw();
    }
    return false;
  };
  dlg.showModal();
}
const dlg = $("#dlg");

// ===== Orden y filtros de tablas =====
const S = {
  inv: { k: "nombre", d: 1, f: "" },
  cli: { k: "nombre", d: 1, f: "" },
  res: { k: "fecha", d: -1, f: "" },
  ven: { k: "id", d: -1, f: "" },
};
const cmp = (a, b) =>
  typeof a == "number" && typeof b == "number"
    ? a - b
    : String(a).localeCompare(String(b), "es", { sensitivity: "base", numeric: true });
const uniq = (a) => [...new Set(a)].sort(cmp);
const ord = (t, a, get) => [...a].sort((x, y) => S[t].d * cmp(get(x, S[t].k), get(y, S[t].k)));
function sortBy(t, k) {
  const s = S[t];
  if (s.k == k) s.d *= -1;
  else {
    s.k = k;
    s.d = 1;
  }
  draw();
}
function filt(t, v) {
  S[t].f = v;
  draw();
}
const th = (t, k, l) =>
  `<th class="sr" onclick="sortBy('${t}','${k}')" title="Ordenar A→Z / Z→A">${l}${S[t].k == k ? (S[t].d > 0 ? " ▲" : " ▼") : ""}</th>`;
const sel = (t, opts, all) =>
  `<select onchange="filt('${t}',this.value)"><option value="">${all}</option>${opts.map((o) => `<option ${o == S[t].f ? "selected" : ""}>${o}</option>`).join("")}</select>`;
const zona = (c) => "Zona " + c.telefono.split(" ")[1];
const totV = (v) =>
  db.detalles
    .filter((x) => x.id_venta == v.id)
    .reduce((s, x) => s + x.cantidad * x.precio_unitario, 0);

// ===== Vistas =====
const V = {
  panel() {
    const tot = db.detalles.reduce((s, d) => s + d.cantidad * d.precio_unitario, 0),
      low = db.productos.filter((p) => p.stock <= 5),
      hoy = db.reservas
        .filter((r) => r.fecha >= day)
        .sort((a, b) => (a.fecha + a.hora_inicio < b.fecha + b.hora_inicio ? -1 : 1))
        .slice(0, 6);
    return `<div class="grid">
        <div class="card stat"><b>${money(tot)}</b><span>Ingresos por ventas</span></div>
        <div class="card stat">
          <b>${db.productos.reduce((s, p) => s + p.stock, 0)}</b><span>Unidades en stock</span>
        </div>
        <div class="card stat"><b class="low">${low.length}</b><span>Stock crítico (≤5)</span></div>
        <div class="card stat">
          <b>${db.reservas.filter((r) => r.fecha >= day).length}</b><span>Reservas próximas</span>
        </div>
      </div>
      <div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(300px,1fr))">
        <div class="card">
          <h3 class="cz" style="color:var(--red)">☠ Reabastecer</h3>
          ${low.map((p) => `<p>${p.nombre} <span class="low">· ${p.stock} u.</span></p>`).join("") || "Todo en orden"}
        </div>
        <div class="card">
          <h3 class="cz" style="color:var(--red)">☾ Próximas reservas</h3>
          ${hoy.map((r) => `<p><span class="tag">${r.fecha.slice(5)}</span> ${r.hora_inicio}–${r.hora_fin} · ${by("salas", r.id_sala).nombre}<br><small style="color:var(--mu)">${by("clientes", r.id_cliente).full}</small></p>`).join("")}
        </div>
      </div>`;
  },
  inv() {
    const s = S.inv,
      l = ord(
        "inv",
        db.productos.filter(
          (p) =>
            (!s.f || p.categoria == s.f) &&
            (p.nombre + p.marca + p.categoria).toLowerCase().includes(q.toLowerCase()),
        ),
        (p, k) => p[k],
      );
    return `<div class="bar">
        <h2>Inventario</h2>
        <input
          placeholder="Buscar…"
          value="${q}"
          oninput="q=this.value;draw();const i=document.querySelector('.bar input');i.focus();i.setSelectionRange(99,99)"
        />${sel("inv", uniq(db.productos.map((p) => p.categoria)), "Todas las categorías")}<button
          class="btn"
          onclick="editP()"
        >
          + Cargar producto
        </button>
      </div>
      <div class="card tw">
        <table>
          <tr>
            ${th("inv", "nombre", "Producto")}${th("inv", "marca", "Marca")}${th("inv", "categoria", "Categoría")}${th("inv", "precio", "Precio")}${th("inv", "stock", "Stock")}
            <th></th>
          </tr>
          ${
            l
              .map(
                (p) =>
                  `<tr>
                    <td>${p.nombre}</td>
                    <td>${p.marca}</td>
                    <td><span class="tag">${p.categoria}</span></td>
                    <td>${money(p.precio)}</td>
                    <td class="${p.stock <= 5 ? "low" : "okc"}" style="white-space:nowrap">
                      <button class="btn g s" onclick="stk(${p.id},-1)">−</button> ${p.stock}
                      <button class="btn g s" onclick="stk(${p.id},1)">+</button>
                    </td>
                    <td style="white-space:nowrap">
                      <button class="btn g s" onclick="editP(${p.id})">Editar</button>
                      <button class="btn g s" onclick="delP(${p.id})">✕</button>
                    </td>
                  </tr>`,
              )
              .join("") || '<tr><td colspan="6">Sin resultados</td></tr>'
          }
        </table>
      </div>`;
  },
  turn() {
    const hs = Array.from({ length: 10 }, (_, i) => `<span>${14 + i}h</span>`).join("");
    return `<div class="bar">
        <h2>Turnero de Salas</h2>
        <button class="btn g" onclick="mv(-1)">◀</button
        ><input type="date" value="${day}" onchange="day=this.value;draw()" /><button
          class="btn g"
          onclick="mv(1)"
        >
          ▶</button
        ><button class="btn" onclick="book()">+ Cargar reserva</button>
      </div>
      <div class="card tw">
        <div class="hrs">${hs}</div>
        ${db.salas
          .map(
            (s) =>
              `<div class="tl"><div>${s.nombre} <small style="color:var(--mu)">(${s.capacidad})</small></div><div class="tk" onclick="book(${s.id})">${db.reservas
                .filter((r) => r.id_sala == s.id && r.fecha == day)
                .map(
                  (r) =>
                    `<div class="rv" style="left:${(hh(r.hora_inicio) - 14) * 10}%;width:${(hh(r.hora_fin) - hh(r.hora_inicio)) * 10}%" onclick="event.stopPropagation();delR(${r.id})" title="Click para cancelar">${r.hora_inicio}–${r.hora_fin} ${by("clientes", r.id_cliente).apellido}</div>`,
                )
                .join("")}</div></div>`,
          )
          .join("")}<small style="color:var(--mu)"
          >Click en una sala libre para reservar · click en una reserva para cancelarla</small
        >
      </div>`;
  },
  res() {
    const s = S.res,
      g = (r, k) =>
        k == "cliente"
          ? by("clientes", r.id_cliente).full
          : k == "sala"
            ? by("salas", r.id_sala).nombre
            : r[k],
      l = ord(
        "res",
        db.reservas.filter((r) => !s.f || g(r, "sala") == s.f),
        g,
      );
    return `<div class="bar">
        <h2>Reservas</h2>
        ${sel("res", uniq(db.salas.map((x) => x.nombre)), "Todas las salas")}<button
          class="btn"
          onclick="book()"
        >
          + Cargar reserva
        </button>
      </div>
      <div class="card tw">
        <table>
          <tr>
            ${th("res", "id", "id_reserva")}${th("res", "cliente", "Cliente")}${th("res", "sala", "Sala")}${th("res", "fecha", "Fecha")}${th("res", "hora_inicio", "Inicio")}${th("res", "hora_fin", "Fin")}
            <th></th>
          </tr>
          ${
            l
              .map(
                (r) =>
                  `<tr>
                    <td>${r.id}</td>
                    <td>${g(r, "cliente")}</td>
                    <td>${g(r, "sala")}</td>
                    <td>${r.fecha}</td>
                    <td>${r.hora_inicio}</td>
                    <td>${r.hora_fin}</td>
                    <td><button class="btn g s" onclick="delR(${r.id})">Cancelar</button></td>
                  </tr>`,
              )
              .join("") || '<tr><td colspan="7">Sin resultados</td></tr>'
          }
        </table>
      </div>`;
  },
  ven() {
    const s = S.ven,
      g = (v, k) =>
        k == "cliente" ? by("clientes", v.id_cliente).full : k == "total" ? totV(v) : v[k],
      l = ord(
        "ven",
        db.ventas.filter((v) => !s.f || v.fecha.slice(0, 7) == s.f),
        g,
      );
    return `<div class="bar">
        <h2>Ventas</h2>
        ${sel("ven", uniq(db.ventas.map((v) => v.fecha.slice(0, 7))), "Todos los meses")}<button
          class="btn"
          onclick="sell()"
        >
          + Nueva venta
        </button>
      </div>
      <div class="card tw">
        <table>
          <tr>
            ${th("ven", "id", "#")}${th("ven", "fecha", "Fecha")}${th("ven", "cliente", "Cliente")}
            <th>Detalle</th>
            ${th("ven", "total", "Total")}
          </tr>
          ${
            l
              .map(
                (v) =>
                  `<tr>
                    <td>${v.id}</td>
                    <td>${v.fecha}</td>
                    <td>${g(v, "cliente")}</td>
                    <td>
                      ${db.detalles
                        .filter((x) => x.id_venta == v.id)
                        .map((x) => x.cantidad + "× " + by("productos", x.id_producto).nombre)
                        .join(", ")}
                    </td>
                    <td>${money(totV(v))}</td>
                  </tr>`,
              )
              .join("") || '<tr><td colspan="5">Sin resultados</td></tr>'
          }
        </table>
      </div>`;
  },
  cli() {
    const s = S.cli,
      g = (c, k) => (k == "n" ? db.reservas.filter((r) => r.id_cliente == c.id).length : c[k]),
      l = ord(
        "cli",
        db.clientes.filter((c) => !s.f || zona(c) == s.f),
        g,
      );
    return `<div class="bar">
        <h2>Clientes</h2>
        ${sel("cli", uniq(db.clientes.map(zona)), "Todas las zonas")}<button
          class="btn"
          onclick="addC()"
        >
          + Cargar cliente
        </button>
      </div>
      <div class="card tw">
        <table>
          <tr>
            ${th("cli", "id", "id_cliente")}${th("cli", "nombre", "Nombre")}${th("cli", "apellido", "Apellido")}${th("cli", "telefono", "Teléfono")}${th("cli", "email", "Email")}${th("cli", "n", "Reservas")}
          </tr>
          ${
            l
              .map(
                (c) =>
                  `<tr>
                    <td>${c.id}</td>
                    <td>${c.nombre}</td>
                    <td>${c.apellido}</td>
                    <td>${c.telefono}</td>
                    <td>${c.email}</td>
                    <td>${g(c, "n")}</td>
                  </tr>`,
              )
              .join("") || '<tr><td colspan="6">Sin resultados</td></tr>'
          }
        </table>
      </div>`;
  },
};

// ===== Acciones =====
function stk(id, n) {
  const p = by("productos", id);
  p.stock = Math.max(0, p.stock + n);
  draw();
}
function delP(id) {
  if (confirm("¿Eliminar producto?")) {
    db.productos = db.productos.filter((p) => p.id != id);
    draw();
  }
}
const chkId = (k, d, cur) => {
  const n = +d.id;
  if (!Number.isInteger(n) || n <= 0) return "ID inválido";
  if (!cur && by(k, n)) return "Ese ID ya existe";
};
// Cargar / editar producto: columnas id_producto, nombre, marca, categoria, precio, stock
function editP(id) {
  const p = id ? by("productos", id) : new Producto(nid("productos"), "", "", "", 0, 0);
  form(
    id ? "Editar producto" : "Cargar producto",
    [
      { k: "id", l: "id_producto", t: "number", v: p.id, ro: !!id },
      { k: "nombre", l: "nombre (máx. 100)", v: p.nombre },
      { k: "marca", l: "marca (máx. 50)", v: p.marca },
      { k: "categoria", l: "categoria (máx. 50)", v: p.categoria },
      { k: "precio", l: "precio (DECIMAL 10,2)", t: "number", step: "0.01", v: p.precio },
      { k: "stock", l: "stock", t: "number", v: p.stock },
    ],
    (d) => {
      const e = chkId("productos", d, id);
      if (e) return e;
      if (!d.nombre.trim()) return "Falta el nombre";
      if (d.nombre.length > 100 || d.marca.length > 50 || d.categoria.length > 50)
        return "Texto demasiado largo";
      if (!(+d.precio >= 0) || !Number.isInteger(+d.stock) || +d.stock < 0)
        return "Precio o stock inválido";
      const o = {
        nombre: d.nombre.trim(),
        marca: d.marca,
        categoria: d.categoria,
        precio: +d.precio,
        stock: +d.stock,
      };
      if (id) Object.assign(p, o);
      else
        db.productos.push(new Producto(+d.id, o.nombre, o.marca, o.categoria, o.precio, o.stock));
    },
  );
}
// Cargar cliente: id_cliente, nombre, apellido, telefono, email
function addC() {
  form(
    "Cargar cliente",
    [
      { k: "id", l: "id_cliente", t: "number", v: nid("clientes") },
      { k: "n", l: "nombre (máx. 50)" },
      { k: "a", l: "apellido (máx. 50)" },
      { k: "t", l: "telefono (máx. 20)" },
      { k: "e", l: "email (máx. 100)", t: "email" },
    ],
    (d) => {
      const e = chkId("clientes", d);
      if (e) return e;
      if (!d.n.trim()) return "Falta el nombre";
      if (d.n.length > 50 || d.a.length > 50 || d.t.length > 20 || d.e.length > 100)
        return "Algún texto supera el largo permitido";
      db.clientes.push(new Cliente(+d.id, d.n.trim(), d.a, d.t, d.e));
    },
  );
}
function mv(n) {
  const d = new Date(day + "T12:00");
  d.setDate(d.getDate() + n);
  day = d.toISOString().slice(0, 10);
  draw();
}
function delR(id) {
  const r = by("reservas", id);
  if (confirm(`¿Cancelar reserva de ${by("clientes", r.id_cliente).full}?`)) {
    db.reservas = db.reservas.filter((x) => x.id != id);
    draw();
  }
}
// Cargar reserva: id_reserva, id_cliente, id_sala, fecha, hora_inicio, hora_fin
function book(sid) {
  form(
    "Cargar reserva",
    [
      { k: "id", l: "id_reserva", t: "number", v: nid("reservas") },
      { k: "c", l: "id_cliente", o: db.clientes.map((c) => [c.id, `${c.id} · ${c.full}`]) },
      {
        k: "s",
        l: "id_sala",
        v: sid,
        o: db.salas.map((s) => [s.id, `${s.id} · ${s.nombre} (cap. ${s.capacidad})`]),
      },
      { k: "f", l: "fecha", t: "date", v: day },
      { k: "hi", l: "hora_inicio", t: "time", v: "18:00" },
      { k: "hf", l: "hora_fin", t: "time", v: "21:00" },
    ],
    (d) => {
      const e = chkId("reservas", d);
      if (e) return e;
      if (!d.f || !d.hi || !d.hf) return "Completá todos los campos";
      if (hh(d.hf) <= hh(d.hi)) return "La hora de fin debe ser posterior al inicio";
      const x = db.reservas.find(
        (r) =>
          r.id_sala == d.s &&
          r.fecha == d.f &&
          hh(r.hora_inicio) < hh(d.hf) &&
          hh(r.hora_fin) > hh(d.hi),
      );
      if (x) return `Sala ocupada: ${x.hora_inicio}–${x.hora_fin}`;
      db.reservas.push(new Reserva(+d.id, +d.c, +d.s, d.f, d.hi, d.hf));
      day = d.f;
    },
  );
}
function sell() {
  form(
    "Nueva venta",
    [
      { k: "c", l: "Cliente", o: db.clientes.map((c) => [c.id, c.full]) },
      {
        k: "p",
        l: "Producto",
        o: db.productos.map((p) => [p.id, `${p.nombre} — ${money(p.precio)} (stock ${p.stock})`]),
      },
      { k: "n", l: "Cantidad", t: "number", v: 1 },
    ],
    (d) => {
      const p = by("productos", d.p),
        n = +d.n;
      if (!(n > 0)) return "Cantidad inválida";
      if (n > p.stock) return `Stock insuficiente (${p.stock})`;
      const id = nid("ventas");
      db.ventas.push(new Venta(id, new Date().toISOString().slice(0, 10), +d.c));
      db.detalles.push(new DetalleVenta(nid("detalles"), id, p.id, n, p.precio));
      p.stock -= n;
    },
  );
}
draw();
