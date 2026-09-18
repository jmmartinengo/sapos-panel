/* ============================================================
   PANEL DE CONTROL — editá SOLO este bloque cada semana.
   Nada se calcula solo: lo que ponés acá es lo que se ve.

   revelado : true  -> muestra consultora e integrantes
              false -> deja la tarjeta con el candado
   current  : true  -> borde marcado + "Estadía en curso"
              (poné true en una sola fila)
   estado   : "pendiente" | "realizada" | "retrasada"
              ("tp" y "reservado" son fijos, no los toques)
   ============================================================ */
var PANEL = {
  "DEMO": {revelado:false, current:false, estado:"tp"},
  1:      {revelado:true,  current:false, estado:"realizada"},
  2:      {revelado:true,  current:true,  estado:"pendiente"},
  3:      {revelado:false, current:false, estado:"pendiente"},
  "TP":   {revelado:false, current:false, estado:"tp"},
  4:      {revelado:false, current:false, estado:"pendiente"},
  5:      {revelado:false, current:false, estado:"pendiente"},
  6:      {revelado:false, current:false, estado:"pendiente"},
  7:      {revelado:false, current:false, estado:"pendiente"},
  8:      {revelado:false, current:false, estado:"pendiente"}
};

/* De acá para abajo no hace falta tocar nada. */

/* ------------------------------------------------------------
   Los INTEGRANTES y los NOMBRES de los grupos viven en
   consultoras-c2.js, que es la única fuente. Este archivo solo
   dice qué semana expone cada consultora.

   Para revelar una semana: poné revelado:true arriba y escribí
   el id del grupo en su "grupo" (ga, gb, ... gh). El nombre y
   el enlace se arman solos, así que si el grupo se rebautiza
   no hace falta tocar nada acá.

   Mientras "grupo" siga vacío, nadie puede deducir a quién le
   toca esa fecha, ni mirando el código fuente.
   ------------------------------------------------------------ */

var data = [
  {slot:"DEMO", fecha:"2026-09-01", ep:"T1E1: SOPs del Barro", nota:"Demostración a cargo del profesor", grupo:""},

  {slot:1, fecha:"2026-09-08", ep:"T1E2: La Agenda de un Loco", grupo:"ge"},
  {slot:2, fecha:"2026-09-15", ep:"T1E3: SUMA y Sigue", grupo:"gb"},
  {slot:3, fecha:"2026-09-22", ep:"T1E4: Se BUSCARV al Culpable", grupo:"ga"},

  {slot:"TP", fecha:"2026-09-29", ep:"EXAMEN PRÁCTICO", grupo:""},

  {slot:4, fecha:"2026-10-06", ep:"T1E5: Guardar las FORMas", grupo:"gc"},
  {slot:5, fecha:"2026-10-13", ep:"T1E6: ¡Prompt-o Socorro!", grupo:"gd"},
  {slot:6, fecha:"2026-10-20", ep:"T1E7: Atrayendo Nuevos Aliados", grupo:"gf"},
  {slot:7, fecha:"2026-10-27", ep:"T1E8+E9: La Gran Migración", grupo:"gg"},
  {slot:8, fecha:"2026-10-27", ep:"T1E8+E9: La Gran Migración", grupo:"gh"}
];
