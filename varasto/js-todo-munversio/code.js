var ostoslista = {
  // (A) INITIALIZE TO DO LIST
  data : [], // ostoslista list data array
  hAdd : null, // html add item text field
  hTemplate : null, // html item row template
  hList : null, // html to do list
  init : () => {
    // (A1) INIT LOCALSTORAGE
    if (localStorage.ostoslista == undefined) { localStorage.ostoslista = "[]"; }
    // (A2) RESTORE PREVIOUS SESSION
    ostoslista.data = JSON.parse(localStorage.ostoslista);
    // (A3) GET HTML ELEMENTS
    ostoslista.hAdd = document.getElementById("ostoslista-item");
    ostoslista.hTemplate = document.getElementById("ostoslista-template").content;
    ostoslista.hList = document.getElementById("ostoslista-list");
    // (A4) "ENABLE" ADD ITEM FORM
    document.getElementById("ostoslista-add").onsubmit = ostoslista.add;
    // (A5) DRAW TO DO LIST
    ostoslista.draw();
  },
  // (B) DRAW TO DO LIST
  draw : () => {
    // (B1) RESET LIST
    ostoslista.hList.innerHTML = "";
    // (B2) LOOP & GENERATE ROWS
    if (ostoslista.data.length>0) { for (let id in ostoslista.data) {
      let row = ostoslista.hTemplate.cloneNode(true);
      row.querySelector(".ostoslista-item").textContent = ostoslista.data[id][0];
      row.querySelector(".ostoslista-done").onclick = () => { ostoslista.toggle(id); };
      row.querySelector(".ostoslista-del").onclick = () => { ostoslista.del(id); };
      if (ostoslista.data[id][1]) {
        row.querySelector(".ostoslista-item").classList.add("ostoslista-ok");
      }
      ostoslista.hList.appendChild(row);
    }}
  },
  // (C) HELPER - SAVE DATA INTO LOCAL STORAGE
  save: () => {
    localStorage.ostoslista = JSON.stringify(ostoslista.data);
    ostoslista.draw();
  },  // (D) ADD A NEW ITEM TO THE LIST
  add : () => {
    ostoslista.data.push([ostoslista.hAdd.value, false]);
    ostoslista.hAdd.value = "";
    ostoslista.save();
    return false;
  },  // (E) UPDATE ostoslista ITEM DONE/NOT YET
  toggle: (id) => {
    ostoslista.data[id][1] = !ostoslista.data[id][1];
    ostoslista.save();
  },  // (F) DELETE ITEM
  del: (id) => { if (confirm("Poista tuote?")) {
    ostoslista.data.splice(id, 1);
    ostoslista.save();
  }}
};  // (G) PAGE INIT
window.addEventListener("load", ostoslista.init);
