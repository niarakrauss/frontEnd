/*
    tipo conta: 
        1 - Conta Poupança
        2 - Conta Corrente
*/

let contas = [];
let banco = {
    clientes: contas,
    consultarCliente: consultarCliente,
    deposito: deposito,
    saque: saque,
}

adicionarConta(5486273622, 2, 27771, "Abigael Natte");
adicionarConta(1183971869, 1, 8675, "Ramon Connell");
adicionarConta(9582019689, 1, 27363, "Jarret Lafuente");
adicionarConta(1761924656, 1, 32415, "Ansel Ardley");
adicionarConta(7401971607, 1, 18789, "Jacki Shurmer");
adicionarConta(630841470, 2, 28776, "Jobi Mawtus");
adicionarConta(4223508636, 2, 2177, "Thomasin Latour");
adicionarConta(185979521, 1, 25994, "Lonnie Verheijden");
adicionarConta(3151956165, 2, 7601, "Alonso Wannan");
adicionarConta(2138105881, 1, 33196, "Bendite Huggett");

console.log(banco.consultarCliente("Alonso Wannan"))
banco.deposito("Alonso Wannan", 200)
banco.saque("Alonso Wannan", 500)
banco.saque("Alonso Wannan", 8000)
console.log(banco.consultarCliente("Alonso Wannan"))

/* ------------------------- funções ---------------------------------------*/

function saque(titular, valor){
    let conta = banco.consultarCliente(titular);
    
    if(!conta){
        console.log("Conta inexistente")
        return false;
    }

    if(conta.saldo - valor < 0){
        console.log("Fundos insuficientes")
    }else{
        conta.saldo -= valor;
        console.log(`Extração feita com sucesso, seu novo saldo é: ${conta.saldo}`)
    }
}

function deposito(titular, valor){
    let conta = banco.consultarCliente(titular);
    if(!conta){
        console.log("Conta inexistente")
        return false;
    }
    conta.saldo += valor;
    console.log(`Depósito realizado, seu novo saldo é: ${conta.saldo}`)
}


function consultarCliente(titular){
    const conta = banco.clientes.find(conta => conta.titular == titular);
    if(!conta){
        console.log("Conta inexistente")
        return false;
    }
    return conta;
}

function adicionarConta(numero, tipo = 1, saldo = 0, titular){
    let conta = {
        numero_conta: numero,
        tipo_conta: tipo,
        saldo: saldo,
        titular: titular
    }
    contas.push(conta);
    console.log(`Conta ${conta.numero_conta} adicionada com sucesso!!`)
    return 
}

