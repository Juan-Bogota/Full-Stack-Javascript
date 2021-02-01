# CURSO DE JAVASCRIPT UDEMY


## HISTORIA DE JAVASCRIPT

* Javascript es un lenguaje de programacion.
* Lo creo Brendan Eich.
* Es el unico lenguaje de programacion que puede interpretar el Navegador.
* Su nombre se debe en que en ese momento estaba de moda JAVA, pero ha tenido varios nombres
* Hasta el 2009 se podia user desde el lado del cliente. Actualmente con Node.js podemos ejecutarlo en un servidor

### Linea de Tiempo

* __1995__- Netscape crea JavaScript
* __1997__- Netscape se lleva JavaScript a ECMA(European COmputer Manufacturers Association)
* __1997__- Se lanza el standar ECMA-262 y se crea ECMAScript 1.0
* __1998__- ECMAScript 2 - Ajuste con el estandar internacional
* __1999__- ECMAScript 3
* __2009__- ECMAScript 5
* __2011__- ECMAScript 5.1
* __2015__- ECMAScript 6

## TECNOLOGIAS JS

* **AJAX** = Obtener informacion del servidor sin necesidad de recargar el servidor
* __JQuery__ = Framework JS -> es mejor usar REACT, VUEJS o ANGULAR
* __NODEJS__ = Ejecuta JS desde el servidor
* __JSON__ = JAVASCRIPT ON NOTATION

## FRAMEWORKS

* React
* Angular
* VueJS

## SINTAXIS DE JAVASCRIPT

#### Es case sensitive
    Numero no es igual que numero

#### Es de tipado debil o dinamico
    Las variables son del tipo del dato que almacene

#### Las sentencia finaliza con ;
    No es obligatorio pero es muy recomendable(el compilador del navegador se encarga de colocarlos pero puede haber algun error)

## VARIABLE Y CONSTANTES

__Variable__
Una variable es un espacio que reservamos en memoria para almacenar un dato que podra cambiar durante la ejecucion de nuestro programa

    La palabra reservada para declarar es "let" no es recomendable usar "var"

__Constantes__

Una constante es un espacio que reservamos pero el dato no cambiara durante la ejecucion del programa

    La palabra reservada es "const"

## DECLARACION, INICIALIZACION Y MODIFICACION

```
let numero; # Declaracion de la variable
numero = 5; # Inicializacion de variable
```

```
let numero = 5; # Declaracion e inicializacion de la variable en la misma sentencia
numero = 3; # Modificacion de la variable existente
```


```
const PI = 3.14; # Las constantes solo admiten la declaracion e inicializacion en la misma sentencia
```
### TIPOS DE DATOS

__Numeros__ >> let numero = 5;
__Strings__ >> let palabra = 'hola'; let palabra = "hola";
__Boolean__ >> let respuesta = true; let respuesta = false;
__Undefined__
__Null__
__Symbol__

## OPERADORES EN JAVASCRIPT

![OPERADORES](./images/operadores_js.PNG)

## METODOS Y PROPIEDADES DE LOS STRINGS

__Metodo__ = Es todo aquello que la cadea puede hacer Ej Convertir a Mayusculas
__Propiedad__ = Son las caracteristicas que las cadenas tiene por ser una cadena Ej Longitud

Se emplean usando la nomenclatura del punto
    cadena.metodo
    cadena.propiedad

## OBJETO MATH
Es un objeto que se utiliza para operaciones Matematicas

Al ser un objet utiliza la nomenclatura del punto
__Propiedades__ = Math.E, Math.Pi

__Metodos__ = Math.abs(x), Math.ceil(x), Math.floor(x), Math.pow(x,y), Math.random(), Math.round(x), Math.sign(x)  

## ESTRUCTURA DE CONTROL DE FLUJO

### Condicionales
* Simple 
* Compuestos
* Multiple

### Bucles
* Determinados
* Indeterminados

