/* ============================================================
   CONSULTORAS DE LA COMISIÓN 1
   Única fuente de los grupos. Lo usan las dos páginas:
   consultoras.html (para mostrarlos) y comision1.html
   (para decir qué consultora expone cada semana).

   - "id" es fijo y NO se toca nunca. Es lo que une este
     archivo con el panel de estadías.
   - "nombre" es libre: cuando el grupo elija el suyo,
     cambiás solo este campo y se actualiza en todas partes.
     Los de ahora son provisorios.
   - "members" lleva una línea por estudiante:
         {n:"Apellido, Nombre"},

   Ejemplo de un grupo cargado:
       {id:"g1", nombre:"Los Melquíades", members:[
         {n:"Perez, Ana"},
         {n:"Gomez, Luis"}
       ]},

   Son 51 estudiantes: nueve consultoras de 5 y una de 6.
   ============================================================ */
var CONSULTORAS = [
  {id:"g1",  nombre:"Consultora Buendía",    members:[]},
  {id:"g2",  nombre:"Consultora Úrsula",     members:[]},
  {id:"g3",  nombre:"Consultora Melquíades", members:[]},
  {id:"g4",  nombre:"Consultora Aureliano",  members:[]},
  {id:"g5",  nombre:"Consultora Remedios",   members:[]},
  {id:"g6",  nombre:"Consultora Amaranta",   members:[]},
  {id:"g7",  nombre:"Consultora Arcadio",    members:[]},
  {id:"g8",  nombre:"Consultora Fernanda",   members:[]},
  {id:"g9",  nombre:"Consultora Pilar",      members:[]},
  {id:"g10", nombre:"Consultora Petra",      members:[]}
];
