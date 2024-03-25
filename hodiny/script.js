setInterval(suprHodiny, 1);
setInterval(suprCasovac,100000 );

function suprHodiny() {
  const d = new Date();
  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}

function suprCasovac() {
    alert('dosahly ste sveho denniho limitu');
}

let i = 0;
function suprStopky() {
  document.getElementById("demon").innerHTML = ++i;
}

function suprLimit() {
  const seconds = parseFloat(document.getElementById("hej").value);
  
  const milliseconds = seconds * 1000;
  
  setTimeout(() => {
    const message = "Tvoje čas vypršel. Vrať se po přestávce.";
    alert(message);
  }, milliseconds);
}
