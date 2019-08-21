
window.cipher = {
  encode:    function() {

    let nome = document.getElementById('nome').value;
    let intervalo = Number (document.getElementById('offset').value);
    let retorna ="";

      for ( i = 0; i < nome.length; i++) {
        let char = nome[i].charCodeAt();
        retorna+=String.fromCharCode(char + intervalo);
      }

      alert('Sua criptografia é ' + retorna);

},
decode:  function() {

    let nome = document.getElementById('nome').value;
    let intervalo = Number(document.getElementById('offset').value);
    let retorna="";

    for (i = 0; i < nome.length; i++) {
      let char = nome[i].charCodeAt();
      retorna+=String.fromCharCode(char - intervalo);
    }

    document.getElementById('descriptografado').value=retorna;
  }
}




encode: function(){

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
