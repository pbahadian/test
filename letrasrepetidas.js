/*var letras = ['P','A','8','L','A'];

var nombre = "PA8LA";

	console.log("Partimos del nombre: ",nombre);

for (var i = 0; i<letras.lenght; i++){
 	console.log(letras[i]);

if(isNaN(letras[i])){

if (letras[i] == 'A'|| letras[i] == 'E'|| letras[i] == 'I'||letras[i] == 'O'||letras[i] == 'U') 

	{

	console.log("He encontrado la VOCAL: " + letras[i]);

}else{

	console.log("He encontrado la CONSONANTE: " + letras[i]);
		
	}

}else{
	console.log(" No es una letra, " + letras[i]);
}
}
*/



var letras = ['P','A','8','L','A'];
var nombre = "PA8LA";

console.log("Partimos del nombre :",nombre);

	for (var i =0; i<letras.length; i++) {
    console.log(letras[i]);

	if (isNaN(letras[i])) {

	if (letras[i] == 'A'|| letras[i] == 'E' || letras[i] == 'I' || letras[i] == 'O' || letras[i] == 'U') 
			{

     console.log("He  encontrado la VOCAL: " + letras[i]);
    
    } else {           

     console.log("He encontrado la CONSONANTE: " + letras[i]);       
    }
  
  }else 
  {    console.log ("Los nombres de personas no contienen el num: " + letras[i]);}}

  