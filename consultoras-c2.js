/* ============================================================
   CONSULTORAS DE LA COMISIÓN 2
   Única fuente de los grupos. La usan index.html (el panel)
   y consultoras-c2.html (la página de integrantes).

   - "id" es fijo y NO se toca nunca. Es lo que une este
     archivo con el panel de estadías.
   - "nombre" es libre: cuando el grupo elija el suyo, cambiás
     solo este campo y se actualiza en todas partes.
     Los números de ahora son provisorios.
   - "members" lleva una línea por estudiante.

   41 estudiantes en 8 consultoras (siete de 5 y una de 6).
   Quedan 5 sin responder el formulario, todavía sin grupo.
   ============================================================ */
var CONSULTORAS = [
  {id:"g1", nombre:"Consultora 1", members:[
    {n:"Silva Solian, Mauro Federico"},
    {n:"Quiñones, Francisco"},
    {n:"Bartolini, Luciana"},
    {n:"Carchidi, Viviana"},
    {n:"Sidra, Talia"}
  ]},
  {id:"g2", nombre:"Consultora 2", members:[
    {n:"Coste, Antonella"},
    {n:"Fraticelli, Ania"},
    {n:"Heredia, Ayelen"},
    {n:"Riviere, Micaela"},
    {n:"Reales, Maia"}
  ]},
  {id:"g3", nombre:"Consultora 3", members:[
    {n:"Angonoa, Gianina Nadine"},
    {n:"Rui, Micaela"},
    {n:"Pelegrine, Lautaro Damián"},
    {n:"Duran, Luciano"},
    {n:"Noguera, Brenda"}
  ]},
  {id:"g4", nombre:"Consultora 4", members:[
    {n:"Torres D'Albano, Uriel"},
    {n:"Pedraza, Valentin"},
    {n:"Bernaola Guerrero, Bruno Joaquin"},
    {n:"Sanchez, Leila"},
    {n:"Sanchez, Eliana"}
  ]},
  {id:"g5", nombre:"Consultora 5", members:[
    {n:"Candia, Morena"},
    {n:"Sanchez, Florencia Belen"},
    {n:"Pruyas, Agustina"},
    {n:"Reynoso, Agustina M. Oriana"},
    {n:"Sanchez, Milagros"}
  ]},
  {id:"g6", nombre:"Consultora 6", members:[
    {n:"Villa, Micaela"},
    {n:"Lopez, Matias Valentin"},
    {n:"Ferreyra, Rocio Milagros"},
    {n:"Barbero, Luz"},
    {n:"Cabutto, Delfina"}
  ]},
  {id:"g7", nombre:"Consultora 7", members:[
    {n:"Servin, David"},
    {n:"Campañó, Alvaro"},
    {n:"Macias, Abril Narela"},
    {n:"Gutiérrez, Lucia Gutiérrez"},
    {n:"Ferretjans, Felicitas"}
  ]},
  {id:"g8", nombre:"Consultora 8", members:[
    {n:"Rosales Vanega, Soledad"},
    {n:"Novillo, Valentina"},
    {n:"Vaquera, Malena"},
    {n:"Ozan, Selene"},
    {n:"Dominguez Barrera, Paula"},
    {n:"Zalazar Amaya, Marianela"}
  ]}
];
