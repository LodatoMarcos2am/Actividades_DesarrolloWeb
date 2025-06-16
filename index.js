
var formulario = document.querySelector(".Formulario_suscripcion");
var elementos = formulario.querySelectorAll("input, select");
var boton = document.getElementById("Boton_Submit");
var errorSpan = document.getElementById("error-contraseña");

function actualizarBorde(elemento) {
  if (elemento.value.trim() === "") {
   
    elemento.style.border = "2px solid red";
  } else {
  
    elemento.style.border = "2px solid";
    elemento.style.borderImage = "linear-gradient(to right, #4682b4, #87ceeb) 1";
    elemento.style.outline = "none";
  }
}


elementos.forEach(function(elemento) {
  elemento.addEventListener("focus", function() {
    actualizarBorde(elemento);
  });

  elemento.addEventListener("input", function() {
    actualizarBorde(elemento);
  });

  elemento.addEventListener("blur", function() {

    elemento.style.border = "";
    elemento.style.borderImage = "";
    elemento.style.outline = "";
  });
});

boton.addEventListener("click", function(event) {
  event.preventDefault();
  var hayVacios = false;
  let pass1Contenido = document.getElementById("Contraseña").value;
  let pass2Contenido = document.getElementById("Contraseña2").value;

  elementos.forEach(function(elemento) {
    if (elemento.value.trim() === "") {
      hayVacios = true;
      actualizarBorde(elemento); 
    }
  });

  if (hayVacios) {
    alert("Hay campos vacíos. Por favor, completalos.");
    return; 
  }

  if (pass1Contenido !== pass2Contenido) {
    errorSpan.textContent = "Las contraseñas deben ser iguales.";
    errorSpan.style.color = "red";
    return; 
  } else {
    errorSpan.textContent = "";
  }

  alert("Formulario válido, podés enviarlo.");
  LimpiarElementos();
});


function LimpiarElementos()
{
  elementos.forEach(element => {
    element.value = "";
  });
}