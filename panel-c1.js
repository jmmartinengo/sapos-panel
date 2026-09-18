/* ============================================================
   PANEL DE CONTROL — editá SOLO este bloque cada semana.
   Nada se calcula solo: lo que ponés acá es lo que se ve.

   revelado : true  -> muestra consultora e integrantes
              false -> deja la tarjeta con el candado
   current  : true  -> borde marcado + "Clase en curso"
              (poné true en una sola fila)
   estado   : "pendiente" | "realizada" | "retrasada"
              ("especial" es fijo para clases sin exposición,
               no lo cambies)
   ============================================================ */
var PANEL = {
  "INTRO": {revelado:false, current:false, estado:"especial"},
  "DEMO":  {revelado:false, current:false, estado:"especial"},
  1:       {revelado:true, current:false, estado:"retrasada"},
  2:       {revelado:true, current:false, estado:"realizada"},
  3:       {revelado:true, current:true, estado:"pendiente"},
  4:       {revelado:false, current:false, estado:"pendiente"},
  "EXPR":  {revelado:false, current:false, estado:"especial"},
  5:       {revelado:false, current:false, estado:"pendiente"},
  6:       {revelado:false, current:false, estado:"pendiente"},
  7:       {revelado:false, current:false, estado:"pendiente"},
  8:       {revelado:false, current:false, estado:"pendiente"},
  "PARC":  {revelado:false, current:false, estado:"especial"},
  "RECU":  {revelado:false, current:false, estado:"especial"}
};
/* ------------------------------------------------------------
   Los INTEGRANTES y los NOMBRES de los grupos viven en
   consultoras-c1.js, que es la única fuente. Este archivo solo
   dice qué semana expone cada consultora.

   Para revelar una semana: poné revelado:true arriba y escribí
   el id del grupo en su "grupo" (ga, gb, ... gh). El nombre
   y el enlace se arman solos, así que si el grupo se rebautiza
   no hace falta tocar nada acá.

   Mientras "grupo" siga vacío, nadie puede deducir a quién le
   toca esa fecha, ni mirando el código fuente.
   ------------------------------------------------------------ */

var data = [
  {slot:"INTRO", fecha:"2026-08-24", ep:"El Piloto de la Serie: Bienvenidos a Monte Macondo", unidad:"", nota:"Clase suspendida", grupo:""},
  {slot:"DEMO",  fecha:"2026-08-31", ep:"", unidad:"", nota:"1° Clase de Demostración", grupo:""},

  {slot:1,  fecha:"2026-09-07", ep:"T1E1: SOPs del Barro 🐸", unidad:"Unidad 1: Drive y Docs", grupo:"gd"},
  {slot:2,  fecha:"2026-09-14", ep:"T1E2: La Agenda de un Loco", unidad:"Unidad 2: Calendar", grupo:"gh"},
  {slot:3,  fecha:"2026-09-21", ep:"T1E3: SUMA y Sigue", unidad:"Unidad 3: Sheets", grupo:"gc"},
  {slot:4,  fecha:"2026-09-28", ep:"T1E4: Se BUSCARV al Culpable", unidad:"Unidad 3: Sheets", grupo:""},

  {slot:"EXPR",  fecha:"2026-10-05", ep:"EXAMEN PRÁCTICO", unidad:"", nota:"Examen Práctico", grupo:""},

  {slot:5,  fecha:"2026-10-12", ep:"T1E5: Guardar las FORMas", unidad:"Unidad 4: Forms", grupo:""},
  {slot:6,  fecha:"2026-10-19", ep:"T1E6: Poniendo a Macondo en el Mapa", unidad:"Unidad 5.1: Maps y MyMaps", grupo:""},
  {slot:7,  fecha:"2026-10-26", ep:"T1E7: ¡Prompt-o Socorro!", unidad:"Unidad 5.2: AI Generativa", grupo:""},
  {slot:8,  fecha:"2026-11-02", ep:"T1E8: Un Pitch Vale Más que Mil Palabras", unidad:"Unidad 5.3: Slides", grupo:""},

  {slot:"PARC",  fecha:"2026-11-09", ep:"PARCIAL", unidad:"", nota:"Examen Parcial", grupo:""},
  {slot:"RECU",  fecha:"2026-11-16", ep:"RECUPERATORIOS", unidad:"", nota:"Examen Recuperatorio", grupo:""}
];
