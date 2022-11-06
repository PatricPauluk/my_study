// criadas strings passando valores no terminal
// executa: node .\2_FUNDAMENTOS\4_ler_argumentos\index.js nome=Patric idade=26

// console.log(process.argv) 

const args = process.argv.slice(2) // separa o nome=Patric de process.argv
// console.log(args)

const nome = args[0].split("=")[1] // divite o nome=Patric de args a partir do '=', e salva apenas o nome (segundo valor)
// console.log(nome)

const idade = args[1].split("=")[1] // divite a idade=26 de args a partir do '=', e salva apenas a idade (segundo valor)
// console.log(idade)

console.log(`O nome dele é ${nome} e ele tem ${idade} anos.`)