/* ============================================================
   CONSULTORAS DE LA COMISIÓN 1
   Única fuente de los grupos. Lo usan las dos páginas:
   consultoras-c1.html (para mostrarlos) y comision1.html
   (para decir qué consultora expone cada semana).

   - "id" es fijo y NO se toca nunca. Es lo que une este
     archivo con el panel de estadías.
   - "nombre" es libre: cuando el grupo elija el suyo,
     cambiás solo este campo y se actualiza en todas partes.
     Las letras de ahora son provisorias. A propósito no son
     números, para que nadie deduzca que el orden alfabético
     es el orden en que exponen.
   - "members" lleva una línea por estudiante:
         {n:"Apellido, Nombre"},

   Estado al 3/9/2026: 8 consultoras en uso (A a H) con los 38
   estudiantes que respondieron el formulario diagnóstico.
   La H tiene 3 y está abierta: si se incorpora alguien con PC,
   va ahí prioritariamente para cubrir ese déficit.

   La I y la J quedan reservadas por si aparecen más grupos.
   Mientras tengan members:[] vacío NO se muestran en la web;
   basta agregarles integrantes para que aparezcan solas.
   ============================================================ */
var CONSULTORAS = [
  {id:"ga", nombre:"Consultora A", members:[
    {n:"Delgado, Esteban Lautaro"},
    {n:"Alasino, Pablo"},
    {n:"Campoli, Agustin"},
    {n:"Jufresa, Francisco"},
    {n:"Lázaro, Camila"}
  ]},
  {id:"gb", nombre:"Consultora B", members:[
    {n:"Gigena, Ariana"},
    {n:"Sattler, Hanna"},
    {n:"Ibarra, Tiara Yazmin"},
    {n:"Marinaro, Sol"},
    {n:"Cupper, Tihara"}
  ]},
  {id:"gc", nombre:"Consultora C", members:[
    {n:"Guerrero Gianini, Juan Pablo"},
    {n:"Trujillo Pérez, María Constanza"},
    {n:"De Los Santos, Lucía"},
    {n:"Ibañez, Kiara"},
    {n:"Andrada, Ivana Evelin"}
  ]},
  {id:"gd", nombre:"Consultora D", members:[
    {n:"Gonzalez Aballay, Melani Belen"},
    {n:"Cacciamano Morales, Rosina"},
    {n:"Gimenez, Luana Zamira"},
    {n:"Cadena, Gabriel"},
    {n:"Perez, Marysol"}
  ]},
  {id:"ge", nombre:"Consultora E", members:[
    {n:"Sosa, Rocío"},
    {n:"Fonseca Caravello, Azul"},
    {n:"Roberts Conesa, Simona"},
    {n:"Tuntis, Simon"},
    {n:"Norte, Ignacio Salvador"}
  ]},
  {id:"gf", nombre:"Consultora F", members:[
    {n:"Castro, Melani"},
    {n:"Zapata, Malena Soledad"},
    {n:"Carreño, Sofia Abigail"},
    {n:"Gonzalez, Martina"},
    {n:"Herrera, Venus"}
  ]},
  {id:"gg", nombre:"Consultora G", members:[
    {n:"Sanchez, Zahira Delfina"},
    {n:"Barreto, Tania"},
    {n:"Sosa, Selene Abigail"},
    {n:"Roca, Maxima"},
    {n:"Loyola, Martina"}
  ]},
  {id:"gh", nombre:"Consultora H", members:[
    {n:"Perez Vasquez, Melany Fabiola"},
    {n:"Diaz Hernandez, Antonella Yanina"},
    {n:"Garay, Laura"}
  ]},
  {id:"gi", nombre:"Consultora I", members:[]},
  {id:"gj", nombre:"Consultora J", members:[]}
];
