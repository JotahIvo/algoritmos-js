const livros = require('./listaLivros');

function menorValor(arr, posInicial){
    let maisBarato = posInicial;

    for(let atual = posInicial; atual < arr.length; atual++){
        if(arr[atual].preco < arr[maisBarato].preco){
            maisBarato = atual;
        };
    };

    return maisBarato;
};

module.exports = menorValor;