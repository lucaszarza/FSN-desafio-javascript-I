// Base a ser utilizada
const alunosDaEscola = [{ nome: "Henrique", notas: [], cursos: [], faltas: 5 }, { nome: "Edson", notas: [], cursos: [], faltas: 2 },
{ nome: "Bruno", notas: [10, 9.8, 9.6], cursos: [], faltas: 0 }, {
    nome: "Guilherme", notas: [10, 9.8, 9.6], cursos: [{ nomeDoCurso: "Full Stack", dataMatricula: new Date }],
    faltas: 0
}, { nome: "Carlos", notas: [], cursos: [], faltas: 0 }, { nome: "Lucca", notas: [10, 9.8, 9.6], cursos: [{ nomeDoCurso: "UX", dataMatricula: new Date }], faltas: 0 }];


// implementação

function adicionarAluno(nome) {

    let nomeFormatado = nome.charAt(0).toUpperCase() + nome.slice(1);
    if (typeOf(nome) === String) {
        console.log("O nome do aluno foi cadastrado com sucesso.")
        return alunosDaEscola.push({ nome: nomeFormatado });
    } else {
        console.log("O nome digitado deve conter apenas letras.")
    }
}

function listarAlunos() {
    let cont = 1
    for (let aluno in alunosDaEscola) {
        console.log(cont + ") " + alunosDaEscola[aluno].nome);
        cont++;
    }
}

let posAlunoProcurado;

function buscarAluno(nome) {
    let alunoProcurado = "";
    for (let aluno in alunosDaEscola) {
        if (nome == alunosDaEscola[aluno].nome) {
            alunoProcurado = alunosDaEscola[aluno]
            posAlunoProcurado = alunosDaEscola.indexOf(alunosDaEscola[aluno])
        }
    }
    if (alunoProcurado != "") {
        console.log(` O aluno ${nome} foi encontrado.`)
        return alunoProcurado;
    } else {
        console.log(` O aluno ${nome} não foi encontrado.`)
    }
}

function matricularAluno(aluno, curso) {
    if (buscarAluno(aluno.nome)) {
        alunosDaEscola[posAlunoProcurado].cursos.push({ nomeDoCurso: curso, dataMatricula: new Date })
        console.log("O aluno foi cadastrado com sucesso.")
    } else {
        console.log("O aluno não foi encontrado.")
    }
}

function aplicarFalta(aluno) {
    /*
     Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá incrementar uma falta ao aluno. 
     Você deverá dar um feedback ao concluir a tarefa. Só poderá aplicar falta em aluno se o mesmo tiver matriculado em um curso.
    */
    if (buscarAluno(aluno.nome) && alunosDaEscola[posAlunoProcurado].cursos.length != 0) {
        alunosDaEscola[posAlunoProcurado].faltas++
        console.log("Falta aplicada.")
    } else {
        console.log("O aluno não foi encontrado ou não está matriculado em um curso.")
    }
}

function aplicarNota(aluno) {
    if (buscarAluno(aluno.nome)) {
        alunosDaEscola[posAlunoProcurado].faltas++
        console.log("Falta aplicada.")
    } else {
        console.log("O aluno não foi encontrado ou não está matriculado em um curso.")
    }
}



function aprovarAluno(aluno) {
   
    const media = (aluno) => {
        return alunosDaEscola[posAlunoProcurado].notas.reduce((anterior,atual) => anterior+atual) / alunosDaEscola[posAlunoProcurado].notas.length
    }

    if (buscarAluno(aluno.nome) && alunosDaEscola[posAlunoProcurado].faltas <= 3 && media(aluno) >= 7 ) {
        console.log(`O aluno ${aluno.nome} foi aprovado.`)
    } else if (!buscarAluno(aluno.nome)) {
        console.log("O aluno não foi encontrado ou não está matriculado em um curso.")
    } else{
        console.log("O aluno foi reprovado.")
    }
}