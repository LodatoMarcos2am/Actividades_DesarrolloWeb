// Ejercicio 1
// A
function ejercicio1A()
{
    var A = 10;
    var B = 30;
    var resultado = A + B;
    console.log(resultado)
}
//ejercicio1A()
//B
function Ejercicio1B()
{
    var Nombre = 'Marcos';
    var Apellido = 'Lodato';
    var NyA = Nombre + Apellido;
    console.log(NyA);
}
//Ejercicio1B()
//C
function Ejercicio1C()
{
    var Nombre = 'Marcos';
    var Apellido = 'Lodato';
    var Resultado = Apellido.length + Nombre.length;
    console.log(Resultado);
}
//Ejercicio1C()

/////////////////////////////////////////////////////////////

//Ejercicio 2
//A
function Ejercicio2A()
{
    var Club = 'central córdoba';
    console.log(Club.toUpperCase())
}
//Ejercicio2A()
//B
function Ejercicio2B()
{
var Club = 'Central Córdoba';
var Primeras5 = Club.substring(0,5);
console.log(Primeras5);
}
//Ejercicio2B()
//C
function Ejercicio2C()
{
var Club = 'Central Córdoba';
var Ultimos3 = Club.substring(15,12);
console.log(Ultimos3);
}
//Ejercicio2C()
//D
function Ejercicio2D()
{
    var Palabra = 'tERMÓMETRO';
    var PrimeraLetra = Palabra.substring(0,1).toUpperCase();
    var DemasLetras = Palabra.substring(1,10).toLowerCase();
    var Resultado = PrimeraLetra + DemasLetras;
    console.log(Resultado);
}
//Ejercicio2D()
//E
function Ejercicio2E()
{
    var palabra = 'Central Córdoba';
    var PosicionEspacioBlanco = palabra.indexOf(' ');
    console.log(PosicionEspacioBlanco);
}
//Ejercicio2E()
//F
function Ejercicio2F()
{
var DosPalabras = "áCIDO rEBONUCLÉICO";

var espacioIndex = DosPalabras.indexOf(" ");
var palabra1 = DosPalabras.substring(0, espacioIndex);
var palabra2 = DosPalabras.substring(espacioIndex + 1);
var palabra1Formateada = palabra1.substring(0,1).toUpperCase() + palabra1.substring(1).toLowerCase();
var palabra2Formateada = palabra2.substring(0,1).toUpperCase() + palabra2.substring(1).toLowerCase();


var NuevaPalabra = palabra1Formateada + " " + palabra2Formateada;

console.log(NuevaPalabra); 
}
//Ejercicio2F()

/////////////////////////////////////////

//Ejercicio 3

var Meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] // La defino global porq se utiliza en casi todos los ej

//A
function Ejercicio3A()
{
    console.log(Meses[4] + ' / ' + Meses[10]);
}
//Ejercicio3A()
//B
function Ejercicio3B()
{
    var MesesOrdenadosAlfabéticamente = Meses.sort();
    console.log(MesesOrdenadosAlfabéticamente);
}
//Ejercicio3B()
//C
function Ejercicio3C()
{
    var MesesModificados = Meses;
    MesesModificados.unshift('PrimerElemento');
    MesesModificados.push('Último elemento');
    console.log(MesesModificados);
}
//Ejercicio3C()
//D
function Ejercicio3D()
{
    var MesesSinEneroniDiciembre = Meses;
    MesesSinEneroniDiciembre.shift();
    MesesSinEneroniDiciembre.pop();
    console.log(MesesSinEneroniDiciembre);
}
//Ejercicio3D()
//E
function Ejercicio3E()
{
    console.log(Meses.reverse());
}
//Ejercicio3E()
//F
function Ejercicio3F()
{
    var TodoJunto = Meses.join("-");
    console.log(TodoJunto);
}
//Ejercicio3F()
//G
function Ejercicio3G()
{
    var MayoANoviembre = Meses.slice(4,11);
    console.log(MayoANoviembre);
}
//Ejercicio3G()

////////////////////////////////////////////////

//Ejercicio 4

//A
function Ejercicio4A()
{
    var Numero = Math.random();
    if(Numero >= 0.5)
        console.log('El numero es: ' + Numero + ' Greater than 0,5')
    else
    {
        console.log('El numero es: ' + Numero + " Lower than 0,5")
    }
}
//Ejercicio4A()
//B
function Ejercicio4B(edad)
{
    if(edad < 2)
        console.log('Bebé')
    else if(edad >= 2 && edad <= 12)
        console.log('Niño')
    else if(edad > 13 && edad <= 19)
        console.log('Adolescente')
    else if(edad >= 20 && edad <= 30)
        console.log('Joven')
    else if(edad >= 31 && edad <= 60)
        console.log('Adulto')
    else if(edad >= 61 && edad <= 75)
        console.log('Adulto Mayor')
    else if(edad > 75)
        console.log('Anciano')
}
//Ejercicio4B(670)

///////////////////////////////////////

//Ejercicio 5
var Arreglo = ['flores','juventud','locura','velocidad','sentimiento']; //Lo mismo que antes
//A
function Ejercicio5A()
{
    
    for(var pal in Arreglo)
    {
        console.log(Arreglo[pal])
    }
}
//Ejercicio5A();
//B
function Ejercicio5B()
{
    for(var pal in Arreglo)
    {
        console.log(Arreglo[pal].substring(0,1).toUpperCase() + Arreglo[pal].substring(1).toLowerCase())
    }
}
//Ejercicio5B()
//C
function Ejercicio5C()
{
var ArregloTodoJunto = '';
for(var Pal in Arreglo)
{
    ArregloTodoJunto += Arreglo[Pal];
}
console.log(ArregloTodoJunto);
}
//Ejercicio5C()
//D
function Ejercicio5D()
{
    var ArregloVacio = [];
    for(var i = 0; i < 10;i++)
    {
        ArregloVacio.push(i);
    }
    console.log(ArregloVacio.join('-'));
}
//Ejercicio5D()

///////////////////////////////////////////

//Ejercicio 6

//A
function SumaDosValores(A,B)
{
    var Resultado = A + B;
    return Resultado;
}
//console.log(SumaDosValores(5,9))
//B --- Modificada por el punto D
function SumaDosValorValidacion(A, B) {
    if (typeof A === "number" && typeof B === "number") {
        if (EsEntero(A) && EsEntero(B)) {
            return SumaDosValores(A, B);
        } else {
            console.log("Error: uno o ambos números tienen decimales. Se redondearán.");
            let Aredondeado = Math.round(A);
            let Bredondeado = Math.round(B);
            return SumaDosValores(Aredondeado, Bredondeado);
        }
    } else {
        return NaN;
    }
}

//console.log(SumaDosValorValidacion(1.1, 5));  
//console.log(SumaDosValorValidacion(3, 4));    
//console.log(SumaDosValorValidacion("3", 4));  
//C
function EsEntero(Numero)
{
    return Number.isInteger(Numero);
}
//console.log(EsEntero(12.4))

