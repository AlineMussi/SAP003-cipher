function criptografar() {
  event.preventDefault();
  let nome = document.getElementById('nome').value;
  let intervalo = Number (document.getElementById('offset').value);

  let armazenaCifra=window.cipher.encode(nome,intervalo);

  document.getElementById('criptografia').value=armazenaCifra;



}

function descriptografar() {
  event.preventDefault();
  let nome = document.getElementById('nome').value;
  let intervalo = Number(document.getElementById('offset').value);

  let retornaDeco=window.cipher.decode(nome,intervalo);

  document.getElementById('descriptografado').value=retornaDeco;


}
