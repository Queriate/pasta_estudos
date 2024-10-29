// JavaScript Utility Script: Funções Úteis para o Dia a Dia

// ========== Funções Financeiras ==========
// 1 Calcula o juros compostos
function calcularJurosCompostos(principal, taxa, tempo) {
    return principal * Math.pow(1 + taxa / 100, tempo);
}
// Exemplo de uso
console.log(calcularJurosCompostos(1000, 5, 2)); // Juros compostos de 1000 a 5% por 2 anos

// 2 Converte moeda de Real para Dólar (com taxa de câmbio)
function converterRealParaDolar(valorReal, taxaCambio) {
    return valorReal / taxaCambio;
}
// Exemplo de uso
console.log(converterRealParaDolar(500, 5.25)); // 500 reais convertidos com taxa de 5.25

// ========== Funções de Tarefas ==========
// 3 Gerenciador de tarefas simples
class GerenciadorTarefas {
    constructor() {
        this.tarefas = [];
    }

    adicionarTarefa(descricao) {
        this.tarefas.push({ descricao, concluida: false });
    }

    marcarConcluida(index) {
        if (this.tarefas[index]) this.tarefas[index].concluida = true;
    }

    listarTarefas() {
        return this.tarefas.map((tarefa, index) => `${index + 1} ${tarefa.descricao} - ${tarefa.concluida ? 'Concluída' : 'Pendente'}`);
    }
}
// Exemplo de uso
const tarefas = new GerenciadorTarefas();
tarefas.adicionarTarefa("Comprar pão");
tarefas.marcarConcluida(0);
console.log(tarefas.listarTarefas());

// ========== Conversão de Unidades ==========
// 4 Conversor de temperatura (Celsius para Fahrenheit e vice-versa)
function celsiusParaFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitParaCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}
// Exemplo de uso
console.log(celsiusParaFahrenheit(25)); // Converte 25°C para Fahrenheit
console.log(fahrenheitParaCelsius(77)); // Converte 77°F para Celsius

// 5 Conversor de quilômetros para milhas
function kmParaMilhas(km) {
    return km * 0.621371;
}
// Exemplo de uso
console.log(kmParaMilhas(10)); // Converte 10 km para milhas

// ========== Manipulação de Datas e Horários ==========
// 6 Formata uma data no formato 'dd/mm/yyyy'
function formatarData(data) {
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
}
// Exemplo de uso
console.log(formatarData(new Date())); // Data de hoje formatada

// 7 Calcula a diferença em dias entre duas datas
function diferencaEmDias(data1, data2) {
    const msPorDia = 1000 * 60 * 60 * 24;
    return Math.floor((data2 - data1) / msPorDia);
}
// Exemplo de uso
const dataInicio = new Date('2024-10-01');
const dataFim = new Date('2024-10-29');
console.log(diferencaEmDias(dataInicio, dataFim)); // Diferença em dias entre duas datas

// ========== Funções Diversas ==========
// 8 Gera uma senha aleatória
function gerarSenhaAleatoria(tamanho = 8) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*';
    let senha = '';
    for (let i = 0; i < tamanho; i++) {
        senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return senha;
}
// Exemplo de uso
console.log(gerarSenhaAleatoria()); // Gera uma senha aleatória com 8 caracteres

// 9 Converte texto em camelCase para formato normal (ex: "meuExemplo" para "Meu Exemplo")
function camelCaseParaNormal(texto) {
    return texto.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
}
// Exemplo de uso
console.log(camelCaseParaNormal('exemploDeTextoCamelCase'));

// 10 Calcula a média de uma lista de números
function calcularMedia(numeros) {
    const soma = numeros.reduce((total, numero) => total + numero, 0);
    return soma / numeros.length;
}
// Exemplo de uso
console.log(calcularMedia([5, 10, 15, 20])); // Média dos números

// 11 Função para encontrar o valor máximo em uma lista de números
function encontrarMaximo(numeros) {
    return Math.max(...numeros);
}
// Exemplo de uso
console.log(encontrarMaximo([1, 2, 3, 4, 5])); // Encontra o maior valor na lista

// ========== Fim do Script ==========

// ========== Funções de Utilidade JavaScript: Parte 2 ==========

// ========== Manipulação de Strings ==========

// 1 Capitaliza a primeira letra de cada palavra
function capitalizarPalavras(texto) {
    return texto.replace(/\b\w/g, char => char.toUpperCase());
}
// Exemplo de uso
console.log(capitalizarPalavras("transformando a primeira letra de cada palavra"));

// 2 Conta o número de vogais em uma string
function contarVogais(texto) {
    const vogais = texto.match(/[aeiou]/gi);
    return vogais ? vogais.length : 0;
}
// Exemplo de uso
console.log(contarVogais("quantas vogais há nesta frase?"));

// ========== Cálculos Matemáticos ==========

// 3 Calcula o fatorial de um número
function fatorial(num) {
    return num <= 1 ? 1 : num * fatorial(num - 1);
}
// Exemplo de uso
console.log(fatorial(5)); // 5! = 120

// 4 Calcula o valor da hipotenusa dado os catetos
function calcularHipotenusa(catetoA, catetoB) {
    return Math.sqrt(Math.pow(catetoA, 2) + Math.pow(catetoB, 2));
}
// Exemplo de uso
console.log(calcularHipotenusa(3, 4)); // Hipotenusa de um triângulo com catetos 3 e 4

// ========== Manipulação de Arrays ==========

// 5 Remove elementos duplicados de um array
function removerDuplicados(arr) {
    return [...new Set(arr)];
}
// Exemplo de uso
console.log(removerDuplicados([1, 2, 2, 3, 4, 4, 5]));

// 6 Divide um array em grupos de tamanho especificado
function dividirArrayEmGrupos(arr, tamanho) {
    const grupos = [];
    for (let i = 0; i < arr.length; i += tamanho) {
        grupos.push(arr.slice(i, i + tamanho));
    }
    return grupos;
}
// Exemplo de uso
console.log(dividirArrayEmGrupos([1, 2, 3, 4, 5, 6, 7], 3)); // [[1, 2, 3], [4, 5, 6], [7]]

// ========== Utilitários para Web ==========

// 7 Copia texto para a área de transferência
function copiarParaClipboard(texto) {
    navigator.clipboard.writeText(texto).then(() => {
        console.log("Texto copiado para a área de transferência!");
    }).catch(err => {
        console.error("Erro ao copiar: ", err);
    });
}
// Exemplo de uso
copiarParaClipboard("Este texto será copiado!");

// 8 Cria um download de texto em arquivo
function downloadTextoArquivo(texto, nomeArquivo = "download.txt") {
    const elemento = document.createElement("a");
    const arquivo = new Blob([texto], { type: 'text/plain' });
    elemento.href = URL.createObjectURL(arquivo);
    elemento.download = nomeArquivo;
    document.body.appendChild(elemento);
    elemento.click();
    document.body.removeChild(elemento);
}
// Exemplo de uso
downloadTextoArquivo("Este texto será baixado como um arquivo de texto.", "exemplo.txt");

// ========== Funções de Data e Hora ==========

// 9 Calcula quantos dias faltam para o final do ano
function diasAteFimAno() {
    const hoje = new Date();
    const fimAno = new Date(hoje.getFullYear(), 11, 31); // 31 de dezembro
    const umDia = 1000 * 60 * 60 * 24;
    return Math.ceil((fimAno - hoje) / umDia);
}
// Exemplo de uso
console.log(diasAteFimAno() + " dias até o fim do ano");

// 10 Adiciona dias a uma data
function adicionarDias(data, dias) {
    const novaData = new Date(data);
    novaData.setDate(novaData.getDate() + dias);
    return novaData;
}
// Exemplo de uso
console.log(adicionarDias(new Date(), 30)); // Data atual mais 30 dias

// ========== Funções Diversas ==========

// 11 Verifica se um número é primo
function ehPrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
// Exemplo de uso
console.log(ehPrimo(7)); // true, 7 é um número primo

// 12 Converte ângulos de graus para radianos e vice-versa
function grausParaRadianos(graus) {
    return graus * (Math.PI / 180);
}

function radianosParaGraus(radianos) {
    return radianos * (180 / Math.PI);
}
// Exemplo de uso
console.log(grausParaRadianos(180)); // Converte 180° para radianos
console.log(radianosParaGraus(Math.PI)); // Converte π radianos para graus

// 13 Verifica se uma string é um palíndromo
function ehPalindromo(texto) {
    const textoLimpo = texto.replace(/[\W_]/g, '').toLowerCase();
    return textoLimpo === textoLimpo.split('').reverse().join('');
}
// Exemplo de uso
console.log(ehPalindromo("A base do teto desaba")); // true

// 14 Gera uma cor hexadecimal aleatória
function gerarCorHexadecimal() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}
// Exemplo de uso
console.log(gerarCorHexadecimal()); // Exemplo de cor gerada aleatoriamente

// ========== Função para validar emails ==========

// 15 Valida se um email tem um formato correto
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
// Exemplo de uso
console.log(validarEmail("exemplo@dominio.com")); // true

// ========== Fim do Script ==========
