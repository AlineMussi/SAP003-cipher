const encode = (intervalo, name) => {
  let armazenaCifra ="";
  for (let i = 0; i < name.length; i++) {
    if (name.charCodeAt(i) >=65 && name.charCodeAt(i) <=90) {
      if (intervalo<0 ) {
        let char = (((name.charCodeAt(i) + 65 + intervalo) % 26)+65);
        armazenaCifra+=String.fromCharCode(char);
      } else {
        let char = (((name.charCodeAt(i) - 65 + intervalo) % 26)+65);
        armazenaCifra+=String.fromCharCode(char);
      }
    }
    else if (name.charCodeAt(i) >=97 && name.charCodeAt(i) <=122) {
      if (intervalo<0 ) {
        let char = (((name.charCodeAt(i) - 122 + intervalo) % 26)+122);
        armazenaCifra+=String.fromCharCode(char);
      } else {
        let char = (((name.charCodeAt(i) - 97 + intervalo) % 26)+97);
        armazenaCifra+=String.fromCharCode(char);
      }
    }
    else {
      let char = (name.charCodeAt(i));
      armazenaCifra+=String.fromCharCode(char);
    }
  }
  return armazenaCifra;
};

const decode = (intervalo, name) => {
  let armazenaCifra="";
  for (let i = 0; i < name.length; i++) {
    if (name.charCodeAt(i) >=65 && name.charCodeAt(i) <=90) {
      if (intervalo<0 ) {
        let char = (((name.charCodeAt(i) + 65 - intervalo) % 26) +65);
        armazenaCifra+=String.fromCharCode(char);
      } else {
        let char = (((name.charCodeAt(i) - 90 - intervalo) % 26) +90);
        armazenaCifra+=String.fromCharCode(char);
      }
    }
    else if (name.charCodeAt(i) >=97 && name.charCodeAt(i) <=122) {
      if (intervalo<0 ) {
        let char = (((name.charCodeAt(i) - 97 - intervalo) % 26)+97);
        armazenaCifra+=String.fromCharCode(char);
      } else {
        let char = (((name.charCodeAt(i) - 122 - intervalo) % 26)+122);
        armazenaCifra+=String.fromCharCode(char);
      }
    }
    else {
      let char = (name.charCodeAt(i));
      armazenaCifra+=String.fromCharCode(char);
    }
  }
  return armazenaCifra;
};

window.cipher = {
  encode: encode,
  decode: decode,
};
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

/*let myFunction = function(offset,string) {
  alert("seu nome descriptografado é ");
}

let myFunction = offset,string => {
  alert("seu nome descriptografado é ");
}
*/
