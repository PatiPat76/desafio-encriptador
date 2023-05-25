var bencriptar  = document.querySelector(".b-encriptar");
var bdesencriptar = document.querySelector(".b-desencriptar");
var muneco = document.querySelector (".muneco");
var textmuneco = document.querySelector(".text-muneco");
var mensaje = document.querySelector(".mensaje");
var inputexto = document.querySelector(".inputexto");
var bcopiar = document.querySelector(".b-copiar");
var breiniciar = document.querySelector(".b-reiniciar");


//La letra "e" es convertida para "enter"//
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"//

bencriptar.onclick = cifrar;
bdesencriptar.onclick =descifrar;
bcopiar.onclick = copiar;
breiniciar.onclick = reiniciar



function reiniciar (){
inputexto.value = "";
mensaje.textContent = "";
muneco.classList.remove("ocultar");
textmuneco.classList.remove("ocultar");

}

function copiar(){
  let copimensaje = mensaje.textContent;
  navigator.clipboard.writeText(copimensaje).then(()=>{ 
    console.log ("mensaje" +copimensaje);
    mensaje.textContent = "";
     });
     }


bcopiar.addEventListener('click', function() {
 inputexto.value = mensaje.textContent;
});

function cifrar(){
  ocultarMuneco();
  mensaje.textContent = cifrartexto(recuperarTexto());
  inputexto.value = "";
  document.getElementById(bcopiar);
    }

function descifrar(){
  ocultarMuneco();
  mensaje.textContent = descifrartexto(recuperarTexto());
  inputexto.value = "";
  document.getElementById(bcopiar);
}

function recuperarTexto(){
  var inputexto = document.querySelector(".inputexto");
  return inputexto.value;
}

function ocultarMuneco(){
  muneco.classList.add("ocultar");
  textmuneco.classList.add("ocultar");
}

function cifrartexto(palabras){
  var textoUsuario = palabras;
  var textocifrado = "";

  for(var i = 0; i < textoUsuario.length; i++){
    if(textoUsuario[i] == "a"){
      textocifrado = textocifrado + "ai"
    }
    else if(textoUsuario[i] == "e"){
      textocifrado = textocifrado + "enter"
    }
    else if(textoUsuario[i] == "i"){
      textocifrado = textocifrado + "imes"
    }
    else if(textoUsuario[i] == "o"){
      textocifrado = textocifrado + "ober"
    }
    else if(textoUsuario[i] == "u"){
      textocifrado = textocifrado + "ufat"

  }

  else{textocifrado = textocifrado + textoUsuario[i];
  }

}
return textocifrado; 

}

function descifrartexto(palabras){
  var textoUsuario = palabras;
  var textodescifrado = "";

  for(var i = 0; i < textoUsuario.length; i++){
    if(textoUsuario[i] == "a"){
      textodescifrado = textodescifrado + "a"
      i= i+1;
    }
    else if(textoUsuario[i] == "e"){
      textodescifrado = textodescifrado + "e"
      i= i+4;
    }
    else if(textoUsuario[i] == "i"){
      textodescifrado = textodescifrado + "i"
      i= i+3;
    }
    else if(textoUsuario[i] == "o"){
      textodescifrado = textodescifrado + "o"
      i= i+3;
    }
    else if(textoUsuario[i] == "u"){
      textodescifrado = textodescifrado + "u"
      i= i+3;

  }

  else{textodescifrado = textodescifrado + textoUsuario[i];
  }

}
return textodescifrado; 

}

