const avança = document.querySelectorAll('.btn-proximo');

avança.forEach(button => { 
    button.addEventListener('clik', function(){
        const atual = document.querySelectorAll('.ativo')
        const proximoPasso = 'passo-' + this.getAtribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximopasso).classList.add('ativo');
    })
})