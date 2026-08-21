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

   Ejemplo de un grupo cargado:
       {id:"ga", nombre:"Los Melquíades", members:[
         {n:"Perez, Ana"},
         {n:"Gomez, Luis"}
       ]},

   Son 51 estudiantes: nueve consultoras de 5 y una de 6.
   ============================================================ */
var CONSULTORAS = [
  {id:"ga",  nombre:"Consultora A",    members:[]},
  {id:"gb",  nombre:"Consultora B",     members:[]},
  {id:"gc",  nombre:"Consultora C", members:[]},
  {id:"gd",  nombre:"Consultora D",  members:[]},
  {id:"ge",  nombre:"Consultora E",   members:[]},
  {id:"gf",  nombre:"Consultora F",   members:[]},
  {id:"gg",  nombre:"Consultora G",    members:[]},
  {id:"gh",  nombre:"Consultora H",   members:[]},
  {id:"gi",  nombre:"Consultora I",      members:[]},
  {id:"gj", nombre:"Consultora J",      members:[]}
];
