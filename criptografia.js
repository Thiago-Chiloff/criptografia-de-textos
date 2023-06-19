document.addEventListener('DOMContentLoaded' , () => {

const criptografia =  document.querySelector('.criptografia');
const descriptografar = document.querySelector('.descriptografar');
const texto = document.querySelector('h2');

let listagemDeCriptografia = '';
let listagem = 0;

let listagemDeDescriptografia = '';
let Listagem = 0;

criptografia.addEventListener('click' ,(e) => {

e.preventDefault();

const input = document.querySelector('.criptografar').value;

listagemDeCriptografia += listagem++ + '- Seu texto Criptografado é: ' + Math.random(input) + '\n';

texto.innerText = listagemDeCriptografia;

})

descriptografar.addEventListener('click' , (e) => {

e.preventDefault();

const input = String(document.querySelector('.criptografar').value);

listagemDeDescriptografia += Listagem++ + ' - Seu texto descriptografado é: ' + input + '\n';

texto.innerText = listagemDeDescriptografia;

document.querySelector('.criptografar').value = '';

})
})