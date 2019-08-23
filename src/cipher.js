
window.cipher = {
  encode: encode,
  decode: decode,
}


function encode(nome,intervalo){
  let nameUpper = nome.toUpperCase();
  let armazenaCifra ="";

  for (let i = 0; i < nome.length; i++) {
    let char = (((nameUpper.charCodeAt(i) - 65 + intervalo)% 26)+65);
    armazenaCifra+=String.fromCharCode(char);
  }
  return armazenaCifra;

  //alert('Sua criptografia é ' + retorna);
}

function decode(nome, intervalo) {
  let nameUpper = nome.toUpperCase();
  let retornaDeco="";

  for (let i = 0; i < nome.length; i++) {
    let char = (((nameUpper.charCodeAt(i) - 90 - intervalo)% 26)+90);
    retornaDeco+=String.fromCharCode(char);
  }
  return retornaDeco;
}










/*function(offset) {

    let name  = document.getElementById('nome').value;
    let nameEncoded = "";

    for(let x=0; x< name.length;x++){
      let letraAtual = name[x];
      let indexCharact = window.arrayAlfabeto.indexOf(letraAtual);
      let indexEncode = indexCharact + offset;
      let characEncoded = window.arrayAlfabeto[indexEncode];
      nameEncoded+=characEncoded;
    }
    alert("Sua criptografia é " + nameEncoded);

  },
  decode: function(offset) {
    let name  = document.getElementById('chave').value;
    let nameDecoded = "";

    for(let i=0; i< name.length;i++){
      let indexCharact = window.arrayAlfabeto.indexOf(name[i]);
      let indexDecode = indexCharact - offset;
      let characDecoded = window.arrayAlfabeto[indexDecode];
      nameDecoded+=characDecoded;
    }
    alert("Seu nome descriptografado é " + nameDecoded);
  }
};




/*


let myFunction = function(offset,string) {
  alert("seu nome descriptografado é ");
}


let myFunction = offset,string => {
  alert("seu nome descriptografado é ");
}
*/
