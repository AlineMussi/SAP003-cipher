const Criptografia = () =>{
  const name = (document.getElementById("nome").value);
  const intervalo = Number (document.getElementById("offset").value);
  const armazenaCifra=window.cipher.encode(intervalo, name);
  document.getElementById("criptografia").value=armazenaCifra;
};

const Descriptografar = () => {
  const name = (document.getElementById("nome").value);
  const intervalo = Number(document.getElementById("offset").value);
  const retornaDeco=window.cipher.decode(intervalo, name);
  document.getElementById("criptografia").value=retornaDeco;
};

document.getElementById("criptografar").addEventListener("click", Criptografia);
document.getElementById("descriptografar").addEventListener("click", Descriptografar);
