const SHORTCUT_1 = "Meu Atalho 1";
const SHORTCUT_2 = "Meu Atalho 2";

function runShortcut(name){
  const url = "shortcuts://run-shortcut?name=" + encodeURIComponent(name) + "&input=none";
  window.location.href = url;
}

function setStatus(msg){
  document.getElementById("status").textContent = msg;
}

document.getElementById("btnShortcut1").addEventListener("click", ()=>{
  setStatus("Abrindo Atalho 1…");
  runShortcut(SHORTCUT_1);
});

document.getElementById("btnShortcut2").addEventListener("click", ()=>{
  setStatus("Abrindo Atalho 2…");
  runShortcut(SHORTCUT_2);
});

document.getElementById("btnAbout").addEventListener("click", ()=>{
  alert("Template WebView\n- Troque os nomes dos atalhos em app.js\n- Edite o layout em index.html");
});
