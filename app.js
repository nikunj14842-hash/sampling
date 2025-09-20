// ✅ Sampling tables
const table1 = [...];
const master = [...];
let currentRules = {};

function findCode(lot,lvl){
  for(let r of table1) if(lot>=r.min && lot<=r.max) return r[lvl];
  return 'R';
}

// ✅ Calculate plan
document.getElementById('samplingForm').addEventListener('submit', function(e){
  e.preventDefault();
  // ... full code from earlier ...
});

// ✅ Check defects
document.getElementById('checkDef').addEventListener('click', function(){
  // ... full code from earlier ...
});

// ✅ PDF Download
document.getElementById('downloadPdf').addEventListener('click', function(){
  // ... full code from earlier ...
});