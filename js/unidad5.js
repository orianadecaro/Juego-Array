//Consignas:
//Abrir el archivo evaluacion5.html y guardarlo como evaluacion5_apellido.html
// (ej. evaluacion5_rodriguez.html)
//Partiendo del siguiente array:
//var letras = ['T', 'R', 'W', 'I', 'U', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q',
//'V', 'H', 'L', 'C', 'K', 'E', 'A', 'O'];
//Elaborar un pequeño script que:
// Le pida al usuario que ingrese un número entre 0 y 25, y una letra, y las almacene cada dato en una variable. (Pista: prompt() )
// En primer lugar (y en una sola instrucción) se debe comprobar si el número es menor que 0 o mayor que 25. Si ese es el caso, se muestra un
// mensaje al usuario indicando que el número proporcionado no es válido y el programa no muestra más mensajes.
// Si el número es válido, se calcula la letra que le corresponde en el array.
//Una vez calculada la letra, se debe comparar con la letra indicada por el usuario.
// Si no coinciden, se muestra un mensaje al usuario diciéndole que la letra que no coinciden “Ha perdido”.
//En otro caso, se muestra un mensaje indicando que el número y la letra coinciden y que “Ha ganado”.



var letras = ['T', 'R', 'W', 'I', 'U', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z',
'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'A', 'O'];

var numero = prompt('Ingrese un numero del 0 al 25');

var letras1 = prompt('Ingrese una letra del abecedario').toUpperCase();


if(numero >= 0 && numero <= 25){

document.write('El numero ingresado es valido, su letra del array es:' + letras[numero]+ '<br>');

    if(letras1 != letras[numero]){
        document.write('La letra ingresada es:' + letras1 + '<br>'+ 'No hay coincidencias, ¡Has perdido!');
    }else{
         document.write('La letra ingresada es:' + letras1 + '<br>' +'Hay coincidencia, ¡Has ganado!' );

    }


}else{
    document.write('El numero ingresado no es valido' + '<br>' )

}