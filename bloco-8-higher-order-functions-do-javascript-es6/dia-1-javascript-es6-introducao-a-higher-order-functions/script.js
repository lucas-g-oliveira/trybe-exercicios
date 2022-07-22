/*
1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando
uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar
cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome
completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato
nome_da_pessoa@trybe.com.
*/

//CALBACK
const newP = (fullName) => {
    let fullNameLocal = fullName.toLowerCase();
    let temp = '';

    for (let index in fullNameLocal) { temp += (fullNameLocal[index] == ' ') ? '_' : fullNameLocal[index]; }
    return { Nome: fullName, Email: `${temp}@trybe.com` };
};

//ROF
const newEmployees = (one, two, three) => {
    const employees = {
        id1: one,
        id2: two,
        id3: three,
    }
    return employees;
};

console.log('///////////////////- Exercicio 1 -///////////////////////');
console.table(newEmployees(newP('Pedro Guerra'), newP('Luiza Drumond'), newP('Carla Paiva')));

////////////////////////////////////////////////////////////////////////////////////////////////
/*
2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número
aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o
número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string
(Ex: "Tente novamente" ou "Parabéns você ganhou").
*/
const sorteado = () => Math.round(Math.random() * 5);

const sorteio = (num, metodo) => {
    console.log('Retorno da funçao metodo: ' + metodo());
    return (num === metodo()) ? "Parabéns você ganhou!" : "Tente novamente!";
}

console.log('\n///////////////////- Exercicio 2 -///////////////////////');
console.log(sorteio(2, sorteado));

///////////////////////////////////////////////////////////////////////////////////////////////
/*
3 - Crie uma HOF que receberá três parâmetros:
-O primeiro será um array de respostas corretas (Gabarito);
-O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;

-O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos.
-Para isso essa função usará os seguintes critérios:

-Uma resposta correta adiciona 1 ponto à pontuação final;
-A ausência de uma resposta não altera a pontuação (quando for "N.A");
-Uma resposta incorreta reduz a pontuação final em 0.5 ponto.
-Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante. Utilize os seguintes arrays:
*/

const funcaoAvalia = (a, b) => {
    if (b === a) return 1;
    if (b === 'N.A') return 0;
    return -0.5;
}

const somaNota = (gabarito, respAluno, fxComparaArrays) => {
    let count = 0;
    for (let i = 0; i < gabarito.length; i += 1) {
        count += fxComparaArrays(gabarito[i], respAluno[i]);
    }
    return count;
};

//////////////////////////////////////////////////////////////////////////////////
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
console.log('\n///////////////////- Exercicio 2 -///////////////////////');
console.log(somaNota(RIGHT_ANSWERS, STUDENT_ANSWERS, funcaoAvalia));