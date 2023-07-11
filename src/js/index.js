//OBJETIVO 1
//passo 1
const personagens = document.querySelectorAll('.personagem');
console.log(personagens);

//passo 2
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        //COMPATIBILIDADE MOBILE
        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        //passo 3 
        removerSelecaoDoPersonagem();
        
        personagem.classList.add('selecionado');

        //OBJETIVO 2
        //passo 1
        newFunction(personagem);

        //passo 3
        newFunction_1(personagem);

        //passo 4
        alterarDescricaoPersonagem(personagem);
    })
})

function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function newFunction_1(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function newFunction(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');

    //passo 2
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}
