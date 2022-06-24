let theme = false;

function changeTheme(){    
    const presentation = document.querySelector('.apresentacao');
    const header = document.querySelector('header');
    const slogan = document.querySelector('.slogan');
    const pawIcon = document.getElementById('paw-icon');
    const smartphone = document.getElementById('smartphone');
    //const carousel = document.querySelector('.owl-carousel');
    const imgs = document.getElementsByClassName('box-filmes');
    const mainPhrase = document.getElementById('main-phrase');
    const darkLogo = document.querySelector('.dark-logo');
    const lightLogo = document.querySelector('.light-logoo');
    const installButtons = document.getElementsByClassName('install-button');
    const qrCodePhrase = document.getElementById('join-us');
    const secondQrCodePhrase = document.getElementById('download-phrase');   
    const labelFooter = document.getElementById('p-footer');
    
    
    if(theme === false){
        
    pawIcon.setAttribute('src', './images/dark-paw-icon.png');
    smartphone.setAttribute('src', './images/dark-smartphone.png');
    const cor = document.documentElement.style.setProperty('--main-color', '#000');
    presentation.style.transition = '2s';
    darkLogo.style.transition = '3s';
    lightLogo.style.transition = '3s';
    smartphone.style.transition = '8s'
    header.style.flexDirection = 'row-reverse';
    slogan.style.flexDirection = 'row-reverse';
    presentation.style.borderBottomRightRadius = '0%';
    presentation.style.borderBottomLeftRadius = '15%';
    mainPhrase.innerHTML = 'Tornando a diferença possível com o E-PET Gerência';
    mainPhrase.style.maxWidth = '870px';
    document.documentElement.style.setProperty('--after-margin-left', '0%');
    document.documentElement.style.setProperty('--after-width', '42%');
    qrCodePhrase.innerHTML = 'Traga sua empresa para o nosso time';
    secondQrCodePhrase.innerHTML = 'Utilize o E-PET Gerência';
    labelFooter.innerHTML = '&copy E-PET Gerência 2022';

    darkLogo.style.width = '120px';
    lightLogo.style.width = '95px';

    for(let i = 0; i < installButtons.length; i++){
        installButtons[i].innerHTML = 'Baixe o E-PET Gerência';
    }

    
    // Tem o dobro de imagens (24) por conta do loop do carrossel. 
    // Caso o loop estivesse desativado, o total de imagens deve ser 12
    const teste = [
        './images/e-pet-gerencia/Tela Inicial.jpg',
        './images/e-pet-gerencia/Tela Dashboard.jpg',
        './images/e-pet-gerencia/Tela Confirmar Dados.jpg',
        './images/e-pet-gerencia/Tela Filtrar Ocorrências.jpg',
        './images/e-pet-gerencia/Tela Login.jpg',
        './images/e-pet-gerencia/Tela Meu Perfil.jpg',
        './images/e-pet-gerencia/Tela Meus Dados.jpg',
        './images/e-pet-gerencia/Tela Ocorrências.jpg',
        './images/e-pet-gerencia/Tela Pesquisar Denúncia.jpg',        

        './images/e-pet-gerencia/Tela Inicial.jpg',
        './images/e-pet-gerencia/Tela Dashboard.jpg',
        './images/e-pet-gerencia/Tela Confirmar Dados.jpg',
        './images/e-pet-gerencia/Tela Filtrar Ocorrências.jpg',
        './images/e-pet-gerencia/Tela Login.jpg',
        './images/e-pet-gerencia/Tela Meu Perfil.jpg',
        './images/e-pet-gerencia/Tela Meus Dados.jpg',
        './images/e-pet-gerencia/Tela Ocorrências.jpg',
        './images/e-pet-gerencia/Tela Pesquisar Denúncia.jpg',

        './images/e-pet-gerencia/Tela Inicial.jpg',
        './images/e-pet-gerencia/Tela Dashboard.jpg',
        './images/e-pet-gerencia/Tela Confirmar Dados.jpg',
        './images/e-pet-gerencia/Tela Filtrar Ocorrências.jpg',
        './images/e-pet-gerencia/Tela Login.jpg',
        './images/e-pet-gerencia/Tela Meu Perfil.jpg',
    ]
    //let arr = [];
    for(let i = 0; i < imgs.length; i++){
        //arr.push(imgs[i]);
        for(let i=0; i < imgs.length; i++){
            imgs[i].setAttribute('src', teste[i]);
        }
    }
    theme = true
}
}


function lightTheme(){
    const presentation = document.querySelector('.apresentacao');
    const header = document.querySelector('header');
    const slogan = document.querySelector('.slogan');
    const pawIcon = document.getElementById('paw-icon');
    const smartphone = document.getElementById('smartphone');
    //const carousel = document.querySelector('.owl-carousel');
    const imgs = document.getElementsByClassName('box-filmes');
    const mainPhrase = document.getElementById('main-phrase');
    const darkLogo = document.querySelector('.dark-logo');
    const lightLogo = document.querySelector('.light-logoo');
    const installButtons = document.getElementsByClassName('install-button');
    const qrCodePhrase = document.getElementById('join-us');
    const secondQrCodePhrase = document.getElementById('download-phrase');   
    const labelFooter = document.getElementById('p-footer');
    
    
    if(theme === true){
        
    pawIcon.setAttribute('src', './images/paw-icon.png');
    smartphone.setAttribute('src', './images/smartphone.png');
    const cor = document.documentElement.style.setProperty('--main-color', '#FB474E');
    presentation.style.transition = '2s';
    darkLogo.style.transition = '3s';
    lightLogo.style.transition = '3s';    
    header.style.flexDirection = 'row';
    slogan.style.flexDirection = 'row';
    presentation.style.borderBottomRightRadius = '15%';
    presentation.style.borderBottomLeftRadius = '0%';
    mainPhrase.innerHTML = 'Faça a diferença com o E-PET';
    mainPhrase.style.maxWidth = '800px';
    document.documentElement.style.setProperty('--after-margin-left', '33%');
    document.documentElement.style.setProperty('--after-width', '30%');
    qrCodePhrase.innerHTML = 'Junte-se a nós nessa causa';
    secondQrCodePhrase.innerHTML = 'Baixe o E-PET';
    labelFooter.innerHTML = '&copy E-PET 2022';

    darkLogo.style.width = '95px';
    lightLogo.style.width = '120px';

    for(let i = 0; i < installButtons.length; i++){
        installButtons[i].innerHTML = 'Baixe o E-PET';
    }

    
    // Tem o dobro de imagens (24) por conta do loop do carrossel. 
    // Caso o loop estivesse desativado, o total de imagens deve ser 12
    const teste = [
        './images/Tela Descrição Denúncia - Modo Claro.jpg',
        './images/Tela Endereço Denúncia - Modo Claro.jpg',
        './images/Tela Inicial - Modo Claro.jpg',
        './images/Tela Mapa_Marker - Modo Claro.jpg',
        './images/Tela Meenu Principal - Modo Claro.jpg',
        './images/Tela Meu Perfil - Modo Claro.jpg',
        './images/Tela Meus Dados - Modo Claro.jpg',
        './images/Tela Minhas Contribuições_3 - Modo Claro.jpg',
        './images/Tela Realizar Denúncia - Modo Claro.jpg',        
        './images/Telas Minhas Contribuições_2 - Modo Claro.jpg',
        './images/Tela Sobre_2 - Modo Claro.jpg',
        './images/Tela Sobre_3 - Modo Claro.jpg',

        './images/Tela Descrição Denúncia - Modo Claro.jpg',
        './images/Tela Endereço Denúncia - Modo Claro.jpg',
        './images/Tela Inicial - Modo Claro.jpg',
        './images/Tela Mapa_Marker - Modo Claro.jpg',
        './images/Tela Meenu Principal - Modo Claro.jpg',
        './images/Tela Meu Perfil - Modo Claro.jpg',
        './images/Tela Meus Dados - Modo Claro.jpg',
        './images/Tela Minhas Contribuições_3 - Modo Claro.jpg',
        './images/Tela Realizar Denúncia - Modo Claro.jpg',        
        './images/Telas Minhas Contribuições_2 - Modo Claro.jpg',
        './images/Tela Sobre_2 - Modo Claro.jpg',
        './images/Tela Sobre_3 - Modo Claro.jpg',
    ]
    //let arr = [];
    for(let i = 0; i < imgs.length; i++){
        //arr.push(imgs[i]);
        for(let i=0; i < imgs.length; i++){
            imgs[i].setAttribute('src', teste[i]);
        }
    }
    theme = false
}
}