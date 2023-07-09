const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado')
        personagem.classList.add('selecionado');

        const imagempersonagemGrande = document.querySelector('.grande');
        const idPersonagem = personagem.attributes.id.value;
        imagempersonagemGrande.src = `./src/images/images/card-${idPersonagem}.png`;
        const nomePersonagem = document.getElementById('name');
        nomePersonagem.innerText = personagem.getAttribute('data-name');
        const descricaoPersonagem = document.getElementById('descri');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');
    })
})

