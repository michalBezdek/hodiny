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
    const iCas = parseFloat(document.getElementById("hej").value); 
    
    setTimeout(() => {
        const konec = "tvuj cas vyprsel vrat se po prestavce";
        alert(konec);
    }, iCas); 
  }

