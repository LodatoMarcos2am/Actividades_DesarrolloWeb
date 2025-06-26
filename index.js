
var formulario = document.querySelector(".Formulario_suscripcion");
var elementos = formulario.querySelectorAll("input, select");
var boton = document.getElementById("Boton_Submit");
var errorSpan = document.getElementById("error-contraseña");


document.getElementById("modal-suscripcion").classList.add("oculto");


function actualizarBorde(elemento) {
  if (elemento.type !== "checkbox" && elemento.value.trim() === "") {
    elemento.style.border = "2px solid red";
  } else {
    elemento.style.border = "2px solid";
    elemento.style.borderImage = "linear-gradient(to right, #4682b4, #87ceeb) 1";
    elemento.style.outline = "none";
  }
}


elementos.forEach(function (elemento) {
  elemento.addEventListener("focus", function () {
    actualizarBorde(elemento);
  });

  elemento.addEventListener("input", function () {
    actualizarBorde(elemento);
  });

  elemento.addEventListener("blur", function () {
    elemento.style.border = "";
    elemento.style.borderImage = "";
    elemento.style.outline = "";
  });
});


boton.addEventListener("click", function (event) {
  event.preventDefault();

  var hayVacios = false;
  let pass1Contenido = document.getElementById("Contraseña").value;
  let pass2Contenido = document.getElementById("Contraseña2").value;
  let checkbox = document.getElementById("acepto");


  elementos.forEach(function (elemento) {
    if (elemento.type !== "checkbox" && elemento.value.trim() === "") {
      hayVacios = true;
      actualizarBorde(elemento);
    }
  });


  if (!checkbox.checked) {
    alert("Debes aceptar los términos para continuar.");
    return;
  }

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


  const datosFormulario = {
    nombre: document.getElementById("nombre").value,
    email: document.getElementById("email").value,
    sexo: document.getElementById("sexo").value,
    pais: document.getElementById("pais").value,
    telefono: document.getElementById("telefono").value,
    interes: document.getElementById("interes").value,
  };


  localStorage.setItem("datosSuscriptor", JSON.stringify(datosFormulario));


  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(datosFormulario),
  })
    .then((response) => response.json())
    .then((data) => {
      mostrarModalConDatos(datosFormulario);
      LimpiarElementos();
    })
    .catch((error) => {
      console.error("Error al enviar:", error);
    });
});


function LimpiarElementos() {
  elementos.forEach((element) => {
    if (element.type === "checkbox") {
      element.checked = false;
    } else {
      element.value = "";
    }
  });
}


function mostrarModalConDatos(datos) {
  document.getElementById("modal-nombre").textContent = datos.nombre;
  document.getElementById("modal-email").textContent = datos.email;
  document.getElementById("modal-sexo").textContent = datos.sexo;
  document.getElementById("modal-pais").textContent = datos.pais;
  document.getElementById("modal-telefono").textContent = datos.telefono;
  document.getElementById("modal-interes").textContent = datos.interes;

  document.getElementById("modal-suscripcion").classList.remove("oculto");
}


document.getElementById("cerrar-modal").addEventListener("click", function () {
  document.getElementById("modal-suscripcion").classList.add("oculto");
});
