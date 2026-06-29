export function soma(number1: number, number2: number) {
  if (typeof number1 !== "number" || typeof number2 !== "number") {
    return "Me envie números!";
  }

  return number1 + number2;
}

export function fibonacci(quantity: number) {
  if (quantity < 0) return "Me dê um número positivo!";
  if (!Number.isInteger(quantity)) return "Me dê um número inteiro!";
  if (quantity > 50) return "Me dê um número menor ou igual a 50";

  if (quantity === 0) return [];

  const sequence: number[] = [1];

  for (let i = 1; i < quantity; i++) {
    if (i === 1) {
      sequence.push(1);
    } else {
      const anterior = sequence[i - 1] ?? 0;
      const anteAnterior = sequence[i - 2] ?? 0;
      sequence.push(anterior + anteAnterior);
    }
  }

  return sequence;
}

export function media(number1: number, number2: number) {
  return (number1 + number2) / 2;
}

export function ehPar(numero: number) {
  if (!Number.isFinite(numero)) return "Me passe um número finito";

  return numero % 2 === 0;
}

export function maior(numero1: number, numero2: number) {
  if (numero1 === numero2) return "Números iguais";

  return numero1 > numero2 ? numero1 : numero2;
}

export function menor(numero1: number, numero2: number) {
  if (numero1 === numero2) return "Números iguais";

  return numero1 < numero2 ? numero1 : numero2;
}

export function aprovado(nota: number) {
  if (nota < 0) return "Me dê uma nota positiva";
  if (nota > 10) return "Me dê uma nota válida";

  return nota >= 7 ? "Aprovado" : "Reprovado";
}

export function categoriaIdade(idade: number) {
  if (idade < 0) return "Me dê uma idade positiva";
  if (!Number.isInteger(idade)) return "Me dê uma idade inteira";

  if (idade <= 2) return "Bebê";
  if (idade <= 12) return "Criança";
  if (idade <= 17) return "Adolescente";
  if (idade <= 59) return "Adulto";
  if (idade <= 110) return "Idoso";

  return "Defunto";
}

export function contarCaracteres(texto: string, letra: string) {
  if (letra.length !== 1) {
    return "Me dê um caracter para verificar a quantidade";
  }

  let contador = 0;

  for (const caractere of texto) {
    if (caractere.toLowerCase() === letra.toLowerCase()) {
      contador++;
    }
  }

  return contador;
}

export function inverter(texto: string) {
  if (texto.length === 0) return "Me dê uma string";
  if (texto.length === 1) {
    return "Me dê uma string com no mínimo 2 caracteres";
  }

  return texto.split("").reverse().join("");
}

export function contarVogais(texto: string) {
  const vogais = "aeiouáéíóúâêîôûàèìòùãõAEIOUÁÉÍÓÚÂÊÎÔÛÀÈÌÒÙÃÕ";
  let contador = 0;

  for (const caractere of texto) {
    if (vogais.includes(caractere)) {
      contador++;
    }
  }

  return contador;
}

export function somatorio(numeros: number[]) {
  return numeros.reduce((acumulado, atual) => acumulado + atual, 0);
}

export function maiorDaLista(numeros: number[]) {
  if (numeros.length === 0) return "Me dê números";

  return Math.max(...numeros);
}

export function mediaDaLista(numeros: number[]) {
  if (numeros.length === 0) return "Me dê números";

  const resultado = somatorio(numeros) / numeros.length;

  if (!Number.isFinite(resultado)) return resultado;

  return Math.round(resultado * 1e10) / 1e10;
}

export function contagemRegressiva(quantidade: number) {
  if (quantidade < 0) return "Me dê um número positivo";
  if (!Number.isInteger(quantidade)) return "Me dê um número inteiro";

  const contagem: number[] = [];

  for (let i = quantidade; i >= 0; i--) {
    contagem.push(i);
  }

  return contagem;
}

export function fatorial(numero: number): number | string {
  if (numero < 0) return "Me dê um número maior ou igual a 0";
  if (!Number.isInteger(numero)) return "Me dê um número inteiro";
  if (numero > 170) return "Me dê um número menor ou igual a 170";

  if (numero === 0) return 1;

  let resultado = 1;
  for (let i = 2; i <= numero; i++) {
    resultado *= i;
  }

  return resultado;
}

export function ehPalindromo(texto: string) {
  if (texto.length === 0) return "Me dê uma palavra para verificar";

  const textoNormalizado = texto.toLowerCase().replace(/\s+/g, "");
  const textoInvertido = textoNormalizado.split("").reverse().join("");

  return textoNormalizado === textoInvertido;
}

export function ehPrimo(numero: number) {
  if (numero < 0) return "Me dê um número maior ou igual a 0";
  if (!Number.isInteger(numero)) return "Me dê um número inteiro";

  if (numero < 2) return false;

  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) return false;
  }

  return true;
}

export function removerDuplicados(texto: string) {
  if (texto.length === 0) return "Me dê caracteres";

  const textoSemEspacos = texto.replace(/\s+/g, "");

  return [...new Set(textoSemEspacos)].join("");
}

export function ordemAlfabetica(texto: string) {
  if (texto.length === 0) return "Me dê caracteres";

  const textoSemEspacos = texto.replace(/\s+/g, "").toLowerCase();

  return textoSemEspacos
    .split("")
    .sort((a, b) => a.localeCompare(b, "pt-BR"))
    .join("");
}

export function contarPalavras(texto: string) {
  const palavras = texto
    .trim()
    .split(/\s+/)
    .filter((palavra) => palavra.length > 0);

  return palavras.length;
}