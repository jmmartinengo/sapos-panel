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
  "PILOTO": {revelado:false, current:false, estado:"tp"},
  "DEMO":   {revelado:false, current:false, estado:"tp"},
  1:        {revelado:true,  current:false, estado:"realizada"},
  2:        {revelado:true,  current:true,  estado:"pendiente"},
  3:        {revelado:false, current:false, estado:"pendiente"},
  4:        {revelado:false, current:false, estado:"pendiente"},
  5:        {revelado:false, current:false, estado:"pendiente"},
  6:        {revelado:false, current:false, estado:"pendiente"},
  7:        {revelado:false, current:false, estado:"pendiente"},
  8:        {revelado:false, current:false, estado:"pendiente"},
  "PARC":   {revelado:false, current:false, estado:"tp"},
  "FER":    {revelado:false, current:false, estado:"tp"},
  "RECU":   {revelado:false, current:false, estado:"tp"}
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
  {slot:"PILOTO", fecha:"2026-08-18", modalidad:"Presencial", ep:"Piloto: Bienvenidos a Monte Macondo", unidad:"", grupo:""},
  {slot:"DEMO",   fecha:"2026-09-01", modalidad:"Virtual", ep:"T1E1: SOPs del Barro 🐸", unidad:"Unidad 1: Drive y Docs", nota:"Demostración a cargo del profesor", grupo:""},

  {slot:1, fecha:"2026-09-08", modalidad:"Virtual", ep:"T1E2: La Agenda de un Loco", unidad:"Unidad 2: Calendar", grupo:"ge"},
  {slot:2, fecha:"2026-09-15", modalidad:"Virtual", ep:"T1E3: SUMA y Sigue", unidad:"Unidad 3: Sheets", grupo:"gb"},
  {slot:3, fecha:"2026-09-22", modalidad:"Presencial", ep:"T1E4: Se BUSCARV al Culpable", unidad:"Unidad 3: Sheets", grupo:"ga"},
  {slot:4, fecha:"2026-09-29", modalidad:"Virtual", ep:"T1E5: Guardar las FORMas", unidad:"Unidad 4: Forms", grupo:"gc"},
  {slot:5, fecha:"2026-10-06", modalidad:"Presencial", ep:"TRABAJO PRÁCTICO OBLIGATORIO", unidad:"", grupo:"gh"},
  {slot:6, fecha:"2026-10-13", modalidad:"Virtual", ep:"T1E6: ¡Prompt-o Socorro!", unidad:"Unidad 5.1: AI Generativa", grupo:"gg"},
  {slot:7, fecha:"2026-10-20", modalidad:"Virtual", ep:"T1E7: Poniendo a Macondo en el Mapa · T1E8: Atrayendo Nuevos Aliados", unidad:"Unidades 5.2 y 5.3: Maps, MyMaps y Slides", grupo:"gf"},
  {slot:8, fecha:"2026-10-27", modalidad:"Virtual", ep:"T1E9: La Gran Migración (PMS Parte 1)", unidad:"Unidad 6: PMS", grupo:"gd"},

  {slot:"PARC", fecha:"2026-11-03", modalidad:"Presencial", ep:"EVALUACIÓN PARCIAL", unidad:"", nota:"Examen Parcial", grupo:""},
  {slot:"FER",  fecha:"2026-11-10", modalidad:"", ep:"", unidad:"", nota:"Feriado", grupo:""},
  {slot:"RECU", fecha:"2026-11-17", modalidad:"Presencial", ep:"RECUPERATORIOS", unidad:"", nota:"Examen Recuperatorio", grupo:""}
];
