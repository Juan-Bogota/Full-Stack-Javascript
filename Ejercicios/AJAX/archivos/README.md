# CURSO DE JAVASCRIPT UDEMY

## HISTORIA DE JAVASCRIPT

- Javascript es un lenguaje de programacion.
- Lo creo Brendan Eich.
- Es el unico lenguaje de programacion que puede interpretar el Navegador.
- Su nombre se debe en que en ese momento estaba de moda JAVA, pero ha tenido varios nombres
- Hasta el 2009 se podia user desde el lado del cliente. Actualmente con Node.js podemos ejecutarlo en un servidor

### Linea de Tiempo

- **1995**- Netscape crea JavaScript
- **1997**- Netscape se lleva JavaScript a ECMA(European COmputer Manufacturers Association)
- **1997**- Se lanza el standar ECMA-262 y se crea ECMAScript 1.0
- **1998**- ECMAScript 2 - Ajuste con el estandar internacional
- **1999**- ECMAScript 3
- **2009**- ECMAScript 5
- **2011**- ECMAScript 5.1
- **2015**- ECMAScript 6

## TECNOLOGIAS JS

- **AJAX** = Obtener informacion del servidor sin necesidad de recargar el servidor
- **JQuery** = Framework JS -> es mejor usar REACT, VUEJS o ANGULAR
- **NODEJS** = Ejecuta JS desde el servidor
- **JSON** = JAVASCRIPT ON NOTATION

## FRAMEWORKS

- React
- Angular
- VueJS

## SINTAXIS DE JAVASCRIPT

#### Es case sensitive

    Numero no es igual que numero

#### Es de tipado debil o dinamico

    Las variables son del tipo del dato que almacene

#### Las sentencia finaliza con ;

    No es obligatorio pero es muy recomendable(el compilador del navegador se encarga de colocarlos pero puede haber algun error)

## VARIABLE Y CONSTANTES

**Variable**
Una variable es un espacio que reservamos en memoria para almacenar un dato que podra cambiar durante la ejecucion de nuestro programa

    La palabra reservada para declarar es "let" no es recomendable usar "var"

**Constantes**

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

**Numeros** >> let numero = 5;
**Strings** >> let palabra = 'hola'; let palabra = "hola";
**Boolean** >> let respuesta = true; let respuesta = false;
**Undefined**
**Null**
**Symbol**

## OPERADORES EN JAVASCRIPT

![OPERADORES](./images/operadores_js.PNG)
