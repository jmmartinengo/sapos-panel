/* ============================================================
   CONSULTORAS DE LA COMISIÓN 2
   Única fuente de los grupos. La usan index.html (el panel)
   y consultoras-c2.html (la página de integrantes).

   - "id" es fijo y NO se toca nunca. Es lo que une este
     archivo con el panel de estadías.
   - "nombre" es libre: cuando el grupo elija el suyo, cambiás
     solo este campo y se actualiza en todas partes.
     Las letras de ahora son provisorias. A propósito no son
     números, para que nadie deduzca que el orden alfabético
     es el orden en que exponen.
   - "members" lleva una línea por estudiante.

   41 estudiantes en 8 consultoras (siete de 5 y una de 6).
   Quedan 5 sin responder el formulario, todavía sin grupo.
   ============================================================ */
var CONSULTORAS = [
  {id:"ga", nombre:"Consultora A", members:[
    {n:"Silva Solian, Mauro Federico"},
    {n:"Quiñones, Francisco"},
    {n:"Bartolini, Luciana"},
    {n:"Carchidi, Viviana"},
    {n:"Sidra, Talia"}
  ]},
  {id:"gb", nombre:"Consultora B", members:[
    {n:"Coste, Antonella"},
    {n:"Fraticelli, Ania"},
    {n:"Heredia, Ayelen"},
    {n:"Riviere, Micaela"},
    {n:"Reales, Maia"}
  ]},
  {id:"gc", nombre:"Consultora C", members:[
    {n:"Angonoa, Gianina Nadine"},
    {n:"Rui, Micaela"},
    {n:"Pelegrine, Lautaro Damián"},
    {n:"Duran, Luciano"},
    {n:"Noguera, Brenda"}
  ]},
  {id:"gd", nombre:"Consultora D", members:[
    {n:"Torres D'Albano, Uriel"},
    {n:"Pedraza, Valentin"},
    {n:"Bernaola Guerrero, Bruno Joaquin"},
    {n:"Sanchez, Leila"},
    {n:"Sanchez, Eliana"}
  ]},
  {id:"ge", nombre:"Consultora E", members:[
    {n:"Candia, Morena"},
    {n:"Sanchez, Florencia Belen"},
    {n:"Pruyas, Agustina"},
    {n:"Reynoso, Agustina M. Oriana"},
    {n:"Peralta, Malena Alejandra"}
  ]},
  {id:"gf", nombre:"Consultora F", members:[
    {n:"Villa, Micaela"},
    {n:"Lopez, Matias Valentin"},
    {n:"Ferreyra, Rocio Milagros"},
    {n:"Barbero, Luz"},
    {n:"Cabutto, Delfina"}
  ]},
  {id:"gg", nombre:"Consultora G", members:[
    {n:"Servin, David"},
    {n:"Campañó, Alvaro"},
    {n:"Macias, Abril Narela"},
    {n:"Gutiérrez, Lucia Gutiérrez"},
    {n:"Ferretjans, Felicitas"}
  ]},
  {id:"gh", nombre:"Consultora H", members:[
    {n:"Rosales Vanega, Soledad"},
    {n:"Novillo, Valentina"},
    {n:"Vaquera, Malena"},
    {n:"Ozan, Selene"},
    {n:"Dominguez Barrera, Paula"},
    {n:"Zalazar Amaya, Marianela"}
  ]}
];
