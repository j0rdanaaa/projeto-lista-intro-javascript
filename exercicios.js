// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2

  
}
console.log(soma(8,15))
// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}
//imprimeMensagem()
// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
  // implemente sua lógica aqui
const alturaDoRetangulo = Number(prompt("Insira aqui a altura do retângulo:"))
const larguraDoRetangulo = Number(prompt("Insira aqui a largura do retângulo:"))
const areaTotal = alturaDoRetangulo * larguraDoRetangulo
console.log(areaTotal)
}

// EXERCÍCIO 02
function imprimeIdade(atual, nascimento) {
  // implemente sua lógica aqui
const anoAtual = Number(prompt("Em qual ano estamos?"))
const anoDeNascimento = Number(prompt("Em que ano, você nasceu?"))
const calculoDeIdade = anoAtual - anoDeNascimento
console.log(calculoDeIdade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

  const imc = peso / (altura * altura).toFixed(2)
  return imc
 
}


// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
const seuNome = prompt('Qual é o seu nome?')
const qualASuaIdade = prompt('Qual é a sua idade?')
const qualSeuEmail = prompt('Qual é o seu email?')

  const frase = (`Meu nome é ${seuNome}, tenho ${qualASuaIdade} anos, e o meu email é ${qualSeuEmail}.`)
  console.log(frase)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
const primeiraCorFavorita = prompt("Digite a sua primeira cor favorita:")
const segundaCorFavortita = prompt("Digite a sua segunda cor favorita: ")
const terceiraCorFavorita = prompt("Digite a sua terceira cor favorita:")
const meuArray = [primeiraCorFavorita,
  segundaCorFavortita,
  terceiraCorFavorita]
  console.log(meuArray)


}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string)  {
  // implemente sua lógica aqui

return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
const espetaculoIngresso = custo / valorIngresso
return espetaculoIngresso


}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  string1.length == string2.length
return string1.length == string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

return array[0]

 
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length -1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const meuArray = array[0]
  const outroArray = array[array.length - 1]
  array[0] = outroArray
  array[array.length - 1] = meuArray
  return array


}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
return string1.toUpperCase() === string2.toUpperCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = prompt('Digite o ano atual:')
  const anoDeNascinento = prompt('Digite o ano de nascimento:')
  const anoDeEmissao = prompt('Digite o ano de emissão:')
  const idade = anoAtual - anoDeNascinento
  const dataEmissao = anoAtual - anoDeEmissao
  if(idade <= 20){
  console.log(dataEmissao >=5)
} else if (idade <= 50){
  console.log(dataEmissao >= 10)

} else {
  console.log(dataEmissao >= 15)
  
}
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const anoAnoBissexto = ano % 400 === 0 || (ano % 4 === 0 && ano % 100 != 0)
return anoAnoBissexto
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
const idade = prompt("Você tem mais de 18 anos?")
const ensinoMedio = prompt("Você possui ensino médio?")
const disponibilidadeDeHorario = prompt("Você possui disponibilidade de horário?")

const resposta = 
idade.toLowerCase() === "sim" && 
ensinoMedio.toLocaleLowerCase() === "sim" &&
disponibilidadeDeHorario.toLocaleLowerCase() === "sim"
console.log(resposta)
}